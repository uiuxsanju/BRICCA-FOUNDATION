import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { CtaLink, PageHero, PlaceholderNote, SectionHead } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { StatStrip } from "@/components/site/StatStrip";
import { type ProgrammeDetail, programmeDetails } from "@/content/programme-details";

const routeForSlug: Record<ProgrammeDetail["slug"], string> = {
  education: "/programmes/education",
  "livelihood-skills": "/programmes/livelihood-skills",
  "women-empowerment": "/programmes/women-empowerment",
};

export function ProgrammeDetailPage({ programme }: { programme: ProgrammeDetail }) {
  const related = programmeDetails.filter((p) => p.slug !== programme.slug);

  return (
    <>
      <PageHero
        eyebrow={`Programme ${programme.no}`}
        title={programme.title}
        lede={programme.short}
      />

      {/* Overview */}
      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHead eyebrow="Overview" title="What this programme is" />
          <Reveal className="mt-6 max-w-3xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              {programme.overview}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-border bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHead eyebrow="What we do" title="Our day-to-day work in the community" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {programme.whatWeDo.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 60}
                className="flex gap-3 border border-border bg-card p-5"
              >
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-foreground">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why it matters + who we serve */}
      <section className="py-20 lg:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Why it matters</p>
            <p className="mt-4 rule-accent text-base leading-relaxed text-muted-foreground">
              {programme.whyItMatters}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Who we serve</p>
            <p className="mt-4 rule-accent text-base leading-relaxed text-muted-foreground">
              {programme.whoWeServe}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Key activities */}
      <section className="border-t border-border bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHead
            eyebrow="Key activities"
            title="How the programme runs on the ground"
          />
          <ol className="mt-10 grid gap-4">
            {programme.keyActivities.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 60}
                className="flex items-start gap-5 border-b border-border pb-4"
              >
                <span className="font-display text-2xl font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-sm leading-relaxed text-foreground">{item}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHead eyebrow="Our approach" title="Principles that guide this work" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {programme.ourApproach.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 60}
                className="border border-border-strong p-6 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact / results */}
      <section className="border-t border-on-dark/10 bg-primary-deep py-20 text-on-dark lg:py-24">
        <div className="container-page">
          <SectionHead
            eyebrow="Impact so far"
            title="Documented reach across BRICCA's programmes"
            tone="light"
            lede="These figures reflect BRICCA Foundation's overall, organisation-wide reach since 2019 — programme-specific figures for this page will be added once documented and verified."
          />
        </div>
        <div className="container-page mt-12">
          <StatStrip tone="dark" />
        </div>
      </section>

      {/* Field stories */}
      <section className="py-20 lg:py-24">
        <div className="container-page max-w-3xl">
          <SectionHead eyebrow="Field stories" title="Stories from the communities we work with" />
          <PlaceholderNote>
            Field stories from this programme are being documented with the consent of the
            families and communities involved, and will be published here as they become
            available.
          </PlaceholderNote>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-border bg-surface py-20 lg:py-24">
        <div className="container-page">
          <SectionHead eyebrow="Image gallery" title={`${programme.title} in the field`} />
          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {programme.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 60} className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt={`${programme.title} programme photo ${i + 1}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related programmes */}
      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHead eyebrow="Keep exploring" title="Related programmes" />
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug} className="bg-card">
                <Link
                  to={routeForSlug[p.slug]}
                  className="group flex h-full flex-col justify-between gap-6 p-7"
                >
                  <div>
                    <p className="font-display text-[0.7rem] font-bold tracking-[0.24em] text-accent">
                      {p.no}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.short}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.18em] text-foreground">
                    EXPLORE
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
            <li className="bg-card">
              <Link
                to="/programs"
                className="group flex h-full flex-col justify-between gap-6 border-2 border-dashed border-border-strong p-7"
              >
                <div>
                  <p className="font-display text-[0.7rem] font-bold tracking-[0.24em] text-accent">
                    ALL PROGRAMMES
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-primary">
                    See all 9 focus areas
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Health, disaster relief, agriculture, sports, disability inclusion and more.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.18em] text-foreground">
                  VIEW ALL
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-20 text-on-dark lg:py-24">
        <div className="container-page flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Get involved</p>
            <h2 className="display-md mt-4 max-w-xl text-on-dark">
              Help this programme reach further
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <CtaLink to="/donate" variant="solid">
              DONATE NOW
            </CtaLink>
            <CtaLink to="/get-involved" variant="outlineLight">
              PARTNER WITH US
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
