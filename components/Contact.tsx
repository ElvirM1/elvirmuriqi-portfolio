'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [state, handleSubmit] = useForm("xwpbjzeq");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="scroll-mt-24 bg-slate-50 dark:bg-slate-900 px-6 py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Thank you!</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Your message has been successfully sent. I will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 dark:bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-10 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
          Get in touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <Button type="submit" disabled={state.submitting} className="mt-2 self-center">
            Send Message
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Or email me directly at{' '}
          <a
            className="underline hover:text-indigo-600 dark:hover:text-cyan-400"
            href="mailto:muriqielvir8@gmail.com"
          >
            muriqielvir8@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
