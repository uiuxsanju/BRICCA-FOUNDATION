import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/livelihood-skills")({
  head: () => ({
    meta: [
      { title: "Livelihood & Skills Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's livelihood and skills programme: vocational training and digital literacy connecting youth to dignified employment.",
      },
      { property: "og:title", content: "Livelihood & Skills Programme — BRICCA Foundation" },
      {
        property: "og:description",
        content: "Skills that lead to dignified employment for unemployed and underemployed youth.",
      },
    ],
  }),
  component: LivelihoodSkillsProgramme,
});

function LivelihoodSkillsProgramme() {
  const programme = getProgrammeDetail("livelihood-skills")!;
  return <ProgrammeDetailPage programme={programme} />;
}
