"use client";

import Image from "next/image";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Download,
  GitBranch,
  LoaderCircle,
  Mail,
  PlayCircle,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { Background, Navbar, Logo } from "@/components/layout";
import {
  buttonClasses,
  Card,
  Container,
  Glow,
  SectionTitle,
} from "@/components/ui";
import {
  aboutContent,
  aboutFeatures,
  CONTACT_EMAIL,
  heroTechIcons,
  projects,
  RESUME_URL,
  skills,
  socialItems,
} from "@/lib/site-data";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const profileImage = "/images/profile-mukund-raj.png";
const aboutImage = "/images/profile-mukund-raj.png";

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center pb-20 pt-28 sm:pt-32"
      id="home"
    >
      <Glow className="left-4 top-28" size="lg" />
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          animate="show"
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
          initial={false}
          variants={staggerContainer}
        >
          <motion.p
            className="mb-5 font-display text-base font-semibold text-accent sm:text-lg"
            variants={fadeUp}
          >
            Final Year @ IIT Bombay
          </motion.p>
          <motion.h1
            className="font-display text-5xl font-extrabold leading-tight text-foreground sm:text-6xl lg:text-7xl"
            variants={fadeUp}
          >
            Mukund Raj
          </motion.h1>
          <motion.h2
            className="mt-4 font-display text-3xl font-bold text-gradient sm:text-4xl lg:text-5xl"
            variants={fadeUp}
          >
            Software Engineer
          </motion.h2>
          <motion.p
            className="mx-auto mt-7 max-w-xl text-base font-semibold leading-8 text-muted sm:text-lg lg:mx-0"
            variants={fadeUp}
          >
            Building AI-powered applications, intelligent systems, and scalable web experiences.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            variants={fadeUp}
          >
            <a
              className={buttonClasses({
                size: "lg",
                className:
                  "w-full gap-3 text-white shadow-[0_0_40px_var(--shadow)] transition duration-200 hover:shadow-[0_0_52px_var(--shadow)] sm:w-auto",
              })}
              href={RESUME_URL}
            >
              Download Resume
              <Download aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              className={buttonClasses({
                variant: "secondary",
                size: "lg",
                className: "w-full gap-3 sm:w-auto",
              })}
              href="#contact"
            >
              Contact Me
              <Mail aria-hidden="true" className="h-5 w-5" />
            </a>
          </motion.div>
          <motion.div
            aria-label="Social profile links"
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
            variants={fadeUp}
          >
            {socialItems.map(({ href, Icon, label }) => (
              <a
                aria-label={label}
                className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card/80 text-icon shadow-[0_0_18px_var(--shadow)] outline-none backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:scale-105 hover:border-[var(--border-strong)] hover:shadow-[0_0_24px_var(--shadow)] hover:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                href={href}
                key={label}
                title={label}
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate="show"
          className="relative mx-auto aspect-square w-full max-w-[28rem]"
          initial={false}
          variants={scaleIn}
        >
          <div className="absolute inset-3 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] opacity-75 blur-2xl" />
          <div className="relative h-full overflow-hidden rounded-full border border-[var(--border-strong)] bg-card shadow-[0_0_90px_var(--shadow)]">
            {/* Replace profile image here. Keep next/image and swap src with your image import or public path. */}
            <Image
              alt="Mukund Raj portrait"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              height={900}
              priority
              src={profileImage}
              width={900}
            />
          </div>
          {heroTechIcons.map(({ className, Icon, label }, index) => (
            <motion.div
              animate={{ y: [0, -12, 0] }}
              aria-label={label}
              className={cn(
                "absolute grid h-14 w-14 place-items-center rounded-full border border-[var(--border-strong)] bg-card/80 text-icon shadow-[0_0_26px_var(--shadow)] backdrop-blur-xl sm:h-16 sm:w-16",
                className,
              )}
              key={label}
              transition={{
                duration: 3.5 + index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon aria-hidden="true" className="h-7 w-7" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative py-24 sm:py-28" id="about">
      <Glow className="right-4 top-12" size="lg" tone="secondary" />
      <Container>
        <SectionTitle title="About Me" />
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-[25rem]"
            initial={false}
            variants={scaleIn}
            viewport={viewportOnce}
            whileInView="show"
          >
            <div className="absolute inset-0 rounded-full bg-[var(--glow)] opacity-55 blur-3xl" />
            <div className="relative h-full overflow-hidden rounded-full border border-[var(--border-strong)] shadow-[0_0_80px_var(--shadow)]">
              {/* Replace about image here. Keep next/image and swap src with your image import or public path. */}
              <Image
                alt="Mukund Raj portrait"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                height={900}
                src={aboutImage}
                width={900}
              />
            </div>
          </motion.div>

          <motion.div
            className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
            initial={false}
            variants={staggerContainer}
            viewport={viewportOnce}
            whileInView="show"
          >
            <motion.h3
              className="font-display text-3xl font-bold text-gradient sm:text-4xl"
              variants={fadeUp}
            >
              I&apos;m Mukund Raj
            </motion.h3>
            <motion.div
              className="mt-6 space-y-4 text-base leading-8 text-foreground/88 sm:text-lg"
              variants={fadeUp}
            >
              {aboutContent.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
            <motion.div className="mt-10 grid gap-4" variants={staggerContainer}>
              {aboutFeatures.map(({ Icon, title }) => (
                <motion.div
                  className="flex items-center gap-5 rounded-lg border border-[var(--border-strong)] bg-card/70 px-6 py-5 text-left shadow-[0_0_34px_var(--shadow)] backdrop-blur-xl"
                  key={title}
                  variants={fadeUp}
                >
                  <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-icon" />
                  <span className="font-display text-lg font-semibold text-gradient sm:text-xl">
                    {title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function SkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 10);
  const firstColumn = visibleSkills.slice(0, Math.ceil(visibleSkills.length / 2));
  const secondColumn = visibleSkills.slice(Math.ceil(visibleSkills.length / 2));

  return (
    <section className="relative py-24 sm:py-28" id="skills">
      <Glow className="left-1/2 top-8 -translate-x-1/2" size="md" />
      <Container>
        <SectionTitle title="My Skills" />
        <motion.div
          className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-24"
          initial={false}
          layout
          transition={{ duration: 0.25 }}
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="show"
        >
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div className="space-y-7" key={columnIndex}>
              {column.map((skill) => (
                <SkillRow key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          {!showAll ? (
            <motion.button
              animate={{ opacity: 1, y: 0 }}
              className={buttonClasses({
                variant: "secondary",
                size: "md",
                className: "mx-auto mt-10 min-w-36",
              })}
              exit={{ opacity: 0, y: 8 }}
              initial={{ opacity: 0, y: 8 }}
              onClick={() => setShowAll(true)}
              type="button"
              whileHover={{ scale: 1.02 }}
            >
              Show More
            </motion.button>
          ) : null}
        </AnimatePresence>
      </Container>
    </section>
  );
}

function SkillRow({
  Icon,
  name,
  rating,
}: (typeof skills)[number]) {
  return (
    <motion.div
      className="grid grid-cols-[3rem_minmax(5rem,8rem)_1fr] items-center gap-3 sm:grid-cols-[3.5rem_minmax(7rem,10rem)_1fr] sm:gap-5"
      variants={fadeUp}
    >
      <div className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border-strong)] bg-card/80 text-icon shadow-[0_0_22px_var(--shadow)] backdrop-blur-xl">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <span className="min-w-0 truncate font-display text-sm font-semibold text-foreground sm:text-base">
        {name}
      </span>
      <div
        aria-label={`${name} skill rating ${rating} out of 10`}
        className="flex min-w-0 items-center gap-2 sm:gap-3"
      >
        {Array.from({ length: 10 }, (_, index) => {
          const active = index < rating;
          return (
            <span
              aria-hidden="true"
              className={cn(
                "h-3 w-3 shrink-0 rounded-full sm:h-4 sm:w-4",
                active ? "skill-bulb" : "bg-[var(--skill-bulb)] opacity-20",
              )}
              key={index}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  return (
    <section className="relative py-24 sm:py-28" id="projects">
      <Glow className="-left-28 bottom-10" size="lg" tone="secondary" />
      <Glow className="right-0 top-24" size="lg" />
      <Container>
        <SectionTitle title="My Projects" />
        <motion.div
          className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
          initial={false}
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="show"
        >
          {projects.map((project) => (
            <motion.article key={project.title} variants={fadeUp}>
              <Card
                className="flex h-full flex-col gap-5 p-4 sm:p-5"
                interactive
              >
                <div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-background-soft">
                  <Image
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    height={500}
                    loading="lazy"
                    src={project.imageSrc}
                    width={900}
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  {/* Replace project titles and descriptions in lib/site-data.ts. */}
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-4">
                    {/* Replace GitHub and Demo links in lib/site-data.ts. */}
                    <a
                      className={buttonClasses({
                        variant: "secondary",
                        size: "sm",
                        className: "gap-2 px-3",
                      })}
                      href={project.githubUrl}
                    >
                      Repository
                      <GitBranch aria-hidden="true" className="h-4 w-4" />
                    </a>
                    <a
                      className={buttonClasses({
                        size: "sm",
                        className: "gap-2 px-3",
                      })}
                      href={project.demoUrl}
                    >
                      Demo
                      <PlayCircle aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields before sending your message.",
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured yet. Please contact me directly.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          email,
          message,
        },
        publicKey,
      );

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong while sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative py-24 sm:py-28" id="contact">
      <Glow className="right-8 bottom-20" size="lg" />
      <Container size="md">
        <SectionTitle title="Contact" />
        <motion.form
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card/70 p-6 shadow-[0_24px_90px_rgb(0_0_0_/_0.35)] backdrop-blur-xl sm:p-8"
          initial={false}
          onSubmit={handleSubmit}
          variants={scaleIn}
          viewport={viewportOnce}
          whileInView="show"
        >
          <div className="space-y-6">
            <FormField
              id="name"
              label="Name"
              onChange={(value) => setFormData((current) => ({ ...current, name: value }))}
              type="text"
              value={formData.name}
            />
            <FormField
              id="email"
              label="Email"
              onChange={(value) => setFormData((current) => ({ ...current, email: value }))}
              type="email"
              value={formData.email}
            />
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-foreground"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="min-h-40 w-full resize-y rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition placeholder:text-muted/70 focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--accent)]"
                id="message"
                name="message"
                onChange={(event) =>
                  setFormData((current) => ({ ...current, message: event.target.value }))
                }
                placeholder="Write your message"
                required
                value={formData.message}
              />
            </div>
          </div>
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              className={buttonClasses({ size: "md", className: "gap-2" })}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send a message
                  <Send aria-hidden="true" className="h-4 w-4" />
                </>
              )}
            </button>
            {status.type ? (
              <p
                aria-live="polite"
                className={cn(
                  "text-sm",
                  status.type === "success" ? "text-[var(--accent)]" : "text-red-400",
                )}
              >
                {status.message}
              </p>
            ) : null}
          </div>
        </motion.form>
        <div
          aria-label="Contact social links"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {socialItems.map(({ href, Icon, label }) => (
            <a
              aria-label={label}
              className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card/80 text-icon shadow-[0_0_20px_var(--shadow)] outline-none backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:scale-105 hover:border-[var(--border-strong)] hover:shadow-[0_0_24px_var(--shadow)] hover:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              href={href}
              key={label}
              title={label}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FormField({
  id,
  label,
  onChange,
  type,
  value,
}: {
  id: string;
  label: string;
  onChange: (value: string) => void;
  type: "email" | "text";
  value: string;
}) {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-semibold text-foreground"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="h-12 w-full rounded-lg border border-border bg-background/50 px-4 text-foreground outline-none transition placeholder:text-muted/70 focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--accent)]"
        id={id}
        name={id}
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        required
        type={type}
        value={value}
      />
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-5 text-center text-sm text-muted sm:flex-row sm:text-left">
        <Logo />
        <p>
          Built with Next.js · {currentYear} ·{""}
          <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
        <a
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/80 text-icon outline-none transition hover:border-[var(--border-strong)] hover:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          href="#home"
        >
          <ArrowUp aria-hidden="true" className="h-5 w-5" />
        </a>
      </Container>
    </footer>
  );
}
