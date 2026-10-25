import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { createContactMessage, countRecentContactMessages } from "./db";
import { sendContactNotification } from "./contact-email";
import { publicProcedure, router } from "./_core/trpc";

const contactInput = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre.").max(100, "El nombre es demasiado largo."),
  email: z.string().trim().email("Escribe un correo válido.").max(320, "El correo es demasiado largo."),
  phone: z.string().trim().max(40, "El teléfono es demasiado largo.").optional(),
  interest: z.string().trim().max(80, "La opción seleccionada no es válida.").optional(),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres).").max(5000, "El mensaje supera el límite permitido."),
  website: z.string().max(200).optional(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  contact: router({
    submit: publicProcedure.input(contactInput).mutation(async ({ input }) => {
      // A filled honeypot is treated like a successful submission without storing data.
      if (input.website?.trim()) return { success: true, notificationSent: false };

      const email = input.email.toLowerCase();
      try {
        const since = new Date(Date.now() - 15 * 60 * 1000);
        if (await countRecentContactMessages(email, since) >= 3) {
          throw new TRPCError({ code: "TOO_MANY_REQUESTS", message: "Ya recibimos varios mensajes desde este correo. Inténtalo de nuevo más tarde." });
        }

        const contact = {
          name: input.name,
          email,
          phone: input.phone || null,
          interest: input.interest || null,
          message: input.message,
        };
        await createContactMessage(contact);

        let notificationSent = false;
        try {
          notificationSent = await sendContactNotification({ ...contact, phone: contact.phone ?? undefined, interest: contact.interest ?? undefined });
        } catch {
          console.warn("[Contact] Email notification failed; the message remains stored.");
        }
        return { success: true, notificationSent };
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Contact] Could not save contact message.");
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "No pudimos guardar tu mensaje en este momento. Inténtalo de nuevo más tarde." });
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
