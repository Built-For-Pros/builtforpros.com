type BrandLogoProps = {
  className?: string;
  decorative?: boolean;
  /**
   * "auto" follows the theme: light text in dark mode, dark text in light mode.
   * "dark" always uses light text, for surfaces that stay dark in both themes
   * (the fixed header over the hero).
   */
  surface?: "auto" | "dark";
};

const WORDMARK = {
  width: 183,
  height: 25,
} as const;

const IMG_CLASS = "h-[25px] w-auto";

export function BrandLogo({
  className,
  decorative = false,
  surface = "auto",
}: BrandLogoProps) {
  const alt = decorative ? "" : "Built for Pros";

  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <img
        src="/built-for-pros-wordmark-on-dark.svg"
        alt={alt}
        width={WORDMARK.width}
        height={WORDMARK.height}
        className={surface === "dark" ? IMG_CLASS : `brand-logo-on-dark ${IMG_CLASS}`}
      />
      {surface === "auto" ? (
        <img
          src="/built-for-pros-wordmark-on-light.svg"
          alt={alt}
          width={WORDMARK.width}
          height={WORDMARK.height}
          className={`brand-logo-on-light ${IMG_CLASS}`}
        />
      ) : null}
    </span>
  );
}
