type ContactNotification = {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
};

const fallbackRecipients = [
  "juanitaherrera846@gmail.com",
];

export async function sendContactNotification(contact: ContactNotification): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ALPHA_FROM_EMAIL;
  if (!apiKey || !from) return false;

  const recipients = (process.env.ALPHA_CONTACT_EMAILS || fallbackRecipients.join(","))
    .split(",")
    .map(address => address.trim())
    .filter(Boolean);
  if (recipients.length === 0) return false;

  const body = [
    "Nuevo mensaje de contacto para Alpha Coders",
    "",
    `Nombre: ${contact.name}`,
    `Correo: ${contact.email}`,
    `Teléfono: ${contact.phone || "No indicado"}`,
    `Interés: ${contact.interest || "No indicado"}`,
    "",
    "Mensaje:",
    contact.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: contact.email,
      subject: "Nuevo mensaje de contacto | Alpha Coders",
      text: body,
    }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    console.warn(`[Contact] Email provider returned status ${response.status}; the message remains stored.`);
    return false;
  }
  return true;
}
