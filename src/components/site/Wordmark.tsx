import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";
import { cn } from "@/lib/utils";

/**
 * Official BRICCA FOUNDATION logo.
 *
 * On light backgrounds (tone="dark") we render the full-colour lockup as
 * supplied. On dark backgrounds (tone="light" — the transparent navbar over
 * the hero image, and the footer) the logo's black wordmark text would be
 * unreadable, so we pair the badge icon with a light-coloured text treatment
 * instead.
 */
export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  if (tone === "dark") {
    return (
      <span className={cn("flex items-center", className)}>
        <img src={logoFull} alt="BRICCA Foundation" className="h-11 w-auto" />
      </span>
    );
  }

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img src={logoIcon} alt="" aria-hidden="true" className="size-10 shrink-0" />
      <span className="leading-tight">
        <span className="block font-display text-[0.95rem] font-extrabold tracking-[0.14em] text-on-dark">
          BRICCA
        </span>
        <span className="block text-[0.6rem] font-semibold tracking-[0.32em] text-on-dark-muted">
          FOUNDATION
        </span>
      </span>
    </span>
  );
}
