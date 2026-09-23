type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "feature";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const titleColor =
    tone === "feature" ? "text-[color:var(--feature-fg)]" : "text-[color:var(--fg)]";
  const descriptionColor =
    tone === "feature" ? "text-[color:var(--feature-muted)]" : "text-[color:var(--muted)]";

  return (
    <div className={alignment}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`section-title ${eyebrow ? "mt-4" : ""} ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`section-intro ${align === "center" ? "mx-auto" : ""} ${descriptionColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
