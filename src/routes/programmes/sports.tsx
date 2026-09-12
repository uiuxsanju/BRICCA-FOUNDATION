import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/sports")({
  head: () => ({
    meta: [
      { title: "Sports Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's sports programme: organised sporting activity building confidence, discipline and teamwork among children and youth.",
      },
      { property: "og:title", content: "Sports Programme — BRICCA Foundation" },
      { property: "og:description", content: "Confidence, discipline and teamwork." },
    ],
  }),
  component: SportsProgramme,
});

function SportsProgramme() {
  const programme = getProgrammeDetail("sports")!;
  return <ProgrammeDetailPage programme={programme} />;
}
