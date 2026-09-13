import { createFileRoute } from "@tanstack/react-router";

import { CtaLink, PageHero } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/content/bricca";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Previous Projects — TRRAIN, World Bank, Gangavaram Port | BRICCA Foundation" },
      {
        name: "description",
        content:
          "Projects delivered by BRICCA Foundation with TRRAIN, World Bank-supported initiatives and Gangavaram Port.",
      },
      { property: "og:title", content: "Previous Projects — BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Project history with TRRAIN, World Bank-supported initiatives and Gangavaram Port.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Previous projects"
        title="Delivered with donors who ask for evidence"
        titleTe="ఆధారాలు అడిగే దాతలతో కలిసి పూర్తి చేసినవి"
        lede="BRICCA Foundation has implemented programmes supported by retail-sector, institutional and port-sector partners."
      />

      <section className="container-page py-20 lg:py-28">
        <ul className="grid gap-14">
          {projects.map((p, i) => (
            <Reveal
              as="li"
              key={p.donor}
              delay={i * 60}
              className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"
            >
              <img
                src={p.image}
                alt={`${p.donor} supported project activity`}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-4/3 w-full object-cover lg:aspect-4/5"
              />
              <div>
                <p className="eyebrow">Donor</p>
                <h2 className="display-md mt-3 text-primary">{p.donor}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.project}</p>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="border-l-2 border-accent pl-4">
                    <dt className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground">
                      FISCAL YEAR
                    </dt>
                    <dd className="mt-1 font-display text-base font-semibold text-foreground">
                      {p.year}
                    </dd>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <dt className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground">
                      PROJECT VALUE
                    </dt>
                    <dd className="mt-1 font-display text-base font-semibold text-foreground">
                      {p.amount}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-12 text-sm text-muted-foreground">
          Exact fiscal years and project values are being confirmed with each partner and will be
          added once documented.
        </p>

        <div className="mt-6">
          <CtaLink to="/partners" variant="outline">
            OUR PARTNERS
          </CtaLink>
        </div>
      </section>
    </>
  );
}
