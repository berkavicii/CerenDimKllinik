import Link from "next/link";
import { clsx } from "clsx";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({ href, variant = "primary", external, className, children }: ButtonProps) {
  const cls = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300",
    variant === "primary" && "bg-forest text-paper hover:bg-forest-2",
    variant === "outline" && "border border-forest/30 text-forest hover:border-forest hover:bg-forest/5",
    variant === "light" && "bg-paper text-forest hover:bg-cream-2",
    className,
  );
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl leading-[1.1] text-forest sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{text}</p>}
    </div>
  );
}

/** İnce altın ayraç */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={clsx("flex items-center gap-3 text-gold", className)} aria-hidden>
      <span className="h-px w-10 bg-gold/50" />
      <svg viewBox="0 0 20 20" className="size-3.5" fill="currentColor">
        <path d="M10 2c1.2 3.6 4.4 6.8 8 8-3.6 1.2-6.8 4.4-8 8-1.2-3.6-4.4-6.8-8-8 3.6-1.2 6.8-4.4 8-8Z" />
      </svg>
      <span className="h-px w-10 bg-gold/50" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <LeafBackdrop />
      <Container className="relative py-16 sm:py-24">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="rise rise-2 mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-forest sm:text-6xl">
          {title}
        </h1>
        {text && <p className="rise rise-3 mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{text}</p>}
        {children}
      </Container>
    </section>
  );
}

/** Sağ üstte silik, büyük yaprak dalı */
export function LeafBackdrop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={clsx("pointer-events-none absolute -top-10 -right-16 w-72 text-sage/40 sm:w-96", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M150 290C150 180 120 90 40 20" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M128 200c-40-8-70-36-80-80 42 6 72 36 80 80Z" />
      <path d="M138 160c30-22 46-58 40-100-32 26-46 60-40 100Z" />
      <path d="M100 120c-36-2-64-22-80-58 38 0 66 20 80 58Z" />
      <path d="M112 96c18-26 22-58 10-90-22 28-26 60-10 90Z" />
      <path d="M142 250c34-16 56-46 60-86-36 18-56 48-60 86Z" />
    </svg>
  );
}
