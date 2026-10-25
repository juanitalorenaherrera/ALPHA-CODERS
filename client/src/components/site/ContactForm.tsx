import { ArrowUpRight, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { trpc } from "@/lib/trpc";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  website: string;
};

const emptyForm: FormValues = { name: "", email: "", phone: "", interest: "", message: "", website: "" };

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [feedback, setFeedback] = useState<{ kind: "success" | "error"; text: string } | null>(null);
  const submitMessage = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setFeedback({ kind: "success", text: "¡Gracias! Recibimos tu mensaje. Pronto nos pondremos en contacto." });
      setValues(emptyForm);
    },
    onError: error => {
      setFeedback({ kind: "error", text: error.message || "No pudimos enviar tu mensaje. Inténtalo de nuevo." });
    },
  });

  const update = (field: keyof FormValues, value: string) => {
    setValues(current => ({ ...current, [field]: value }));
    if (feedback) setFeedback(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    submitMessage.mutate({
      name: values.name,
      email: values.email,
      phone: values.phone || undefined,
      interest: values.interest || undefined,
      message: values.message,
      website: values.website,
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="form-kicker">Cuéntanos tu idea</span>
        <h3>Empecemos la conversación.</h3>
        <p>Déjanos algunos detalles y te responderemos por correo.</p>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Tu nombre <b aria-hidden="true">*</b></span>
          <input autoComplete="name" name="name" value={values.name} onChange={event => update("name", event.target.value)} placeholder="¿Cómo te llamas?" maxLength={100} required />
        </label>
        <label className="form-field">
          <span>Correo electrónico <b aria-hidden="true">*</b></span>
          <input autoComplete="email" name="email" type="email" value={values.email} onChange={event => update("email", event.target.value)} placeholder="tu@correo.com" maxLength={320} required />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Teléfono <small>opcional</small></span>
          <input autoComplete="tel" name="phone" type="tel" value={values.phone} onChange={event => update("phone", event.target.value)} placeholder="+57 300 000 0000" maxLength={40} />
        </label>
        <label className="form-field">
          <span>¿Qué tienes en mente?</span>
          <select name="interest" value={values.interest} onChange={event => update("interest", event.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Desarrollo web">Desarrollo web</option>
            <option value="Diseño digital">Diseño digital</option>
            <option value="Soporte técnico">Soporte técnico</option>
            <option value="Mentoría">Mentoría</option>
            <option value="Otra idea">Otra idea</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>Cuéntanos un poco más <b aria-hidden="true">*</b></span>
        <textarea name="message" value={values.message} onChange={event => update("message", event.target.value)} placeholder="¿Qué te gustaría construir?" rows={5} maxLength={5000} required />
        <small className="character-count">{values.message.length}/5000</small>
      </label>
      <label className="honeypot" aria-hidden="true">
        No llenar este campo
        <input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={event => update("website", event.target.value)} />
      </label>
      <div className="form-actions">
        <p>Usaremos tus datos para responder a esta consulta.</p>
        <button className="button button-primary form-submit" type="submit" disabled={submitMessage.isPending}>
          {submitMessage.isPending ? <><LoaderCircle size={16} className="spin" /> Enviando…</> : <>Enviar mensaje <Send size={16} /></>}
        </button>
      </div>
      {feedback && <div className={`form-feedback ${feedback.kind}`} role={feedback.kind === "error" ? "alert" : "status"} aria-live="polite">{feedback.text}{feedback.kind === "success" && <ArrowUpRight size={16} />}</div>}
    </form>
  );
}
