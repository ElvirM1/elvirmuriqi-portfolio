"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Phone, MapPin, Clock3 } from "lucide-react";

const contactHighlights = [
  {
    label: "Email",
    value: "muriqielvir8@gmail.com",
    href: "mailto:muriqielvir8@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+383 49 210 337",
    href: "tel:+38349210337",
    Icon: Phone,
  },
  {
    label: "Location",
    value: "Pristina, Kosovo",
    href: undefined,
    Icon: MapPin,
  },
  {
    label: "Response",
    value: "Within 24 hours",
    href: undefined,
    Icon: Clock3,
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xwpbjzeq");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="section-shell scroll-mt-24 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] dark:bg-[linear-gradient(180deg,#0f172a_0%,#020617_100%)] px-4 sm:px-6 py-14 sm:py-24"
      >
        <div className="mx-auto max-w-2xl rounded-[28px] border border-slate-200/70 bg-white/85 p-6 sm:p-8 text-center shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
            Thank you!
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Your message has been successfully sent. I will get back to you
            soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="section-shell scroll-mt-24 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] dark:bg-[linear-gradient(180deg,#0f172a_0%,#020617_100%)] px-4 sm:px-6 py-14 sm:py-24"
    >
      <div className="mx-auto max-w-6xl rounded-[30px] border border-slate-200/70 bg-white/82 p-6 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/82 sm:p-8">
        <div className="mb-10 text-center lg:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-cyan-400">
            Contact
          </p>
          <h2 className="heading-font text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            If you want to discuss a role, a freelance collaboration, or a
            product idea, send a message and I’ll respond directly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] border border-slate-200/70 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/70 sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Direct Contact
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Prefer direct communication? You can email or call, and I’ll
              follow up quickly.
            </p>

            <div className="mt-6 grid gap-3">
              {contactHighlights.map(({ label, value, href, Icon }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 text-sky-600 shadow-sm dark:from-sky-500/15 dark:to-blue-600/15 dark:text-sky-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {value}
                      </span>
                    </span>
                  </>
                );

                if (href) {
                  return (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/85 p-3 transition hover:border-sky-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-500/40"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/85 p-3 dark:border-slate-800 dark:bg-slate-900"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <a
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50/60 hover:text-sky-700 hover:shadow-md active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/80 dark:hover:text-cyan-300"
              href="/CV_ElvirMuriqi.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Open CV
            </a>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            onSubmit={handleSubmit}
            className="rounded-[24px] border border-slate-200/70 bg-white/75 p-5 dark:border-slate-800 dark:bg-slate-900/75 sm:p-6"
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-11 rounded-xl border-slate-300/90 bg-white/90 dark:border-slate-700 dark:bg-slate-950/80"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Project or role details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project goals, timeline, and what type of collaboration you need."
                  rows={7}
                  required
                  className="rounded-xl border-slate-300/90 bg-white/90 dark:border-slate-700 dark:bg-slate-950/80"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  By submitting, you agree to be contacted via email.
                </p>
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="rounded-2xl px-6 py-3 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md shadow-slate-900/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/25 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 dark:from-cyan-400 dark:to-sky-300 dark:text-slate-950 dark:shadow-cyan-400/20 dark:hover:from-cyan-300 dark:hover:shadow-cyan-400/30"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
