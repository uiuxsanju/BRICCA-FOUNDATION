import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/education")({
  head: () => ({
    meta: [
      { title: "Education Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's education programme: remedial learning support, digital literacy and school materials for children in rural Andhra Pradesh.",
      },
      { property: "og:title", content: "Education Programme — BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Building stronger foundations for learning for school-going and out-of-school children.",
      },
    ],
  }),
  component: EducationProgramme,
});

function EducationProgramme() {
  const programme = getProgrammeDetail("education")!;
  return <ProgrammeDetailPage programme={programme} />;
}
