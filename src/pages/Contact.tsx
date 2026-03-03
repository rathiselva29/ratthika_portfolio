import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { StaggerContainer, FadeUp } from "../components/AnimationWrappers";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    // Simulate send
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-xl">
        <StaggerContainer className="flex flex-col items-center mb-12">
          <FadeUp>
            <h1 className="section-title text-center">
              Get In <span className="gradient-text">Touch</span>
            </h1>
          </FadeUp>
          <FadeUp>
            <p className="section-subtitle text-center">
              Have a project in mind? Let's talk about it.
            </p>
          </FadeUp>
        </StaggerContainer>

        <FadeUp>
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card-hover p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle size={64} className="mx-auto text-primary mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">I'll get back to you soon.</p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="glow-btn-outline mt-6 text-sm px-6 py-2"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="glass-card-hover p-8 flex flex-col gap-5"
              >
                {(["name", "email", "message"] as const).map((field) => (
                  <div key={field}>
                    <label className="text-sm font-medium mb-1.5 block capitalize">{field}</label>
                    {field === "message" ? (
                      <textarea
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        rows={5}
                        className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 resize-none"
                        placeholder={`Your ${field}...`}
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300"
                        placeholder={`Your ${field}...`}
                      />
                    )}
                    {errors[field] && (
                      <p className="text-destructive text-xs mt-1">{errors[field]}</p>
                    )}
                  </div>
                ))}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="glow-btn inline-flex items-center justify-center gap-2 mt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "sending" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;
