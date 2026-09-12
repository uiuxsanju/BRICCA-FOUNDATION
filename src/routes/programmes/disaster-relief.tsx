import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/disaster-relief")({
  head: () => ({
    meta: [
      { title: "Disaster Relief Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's disaster relief programme: rapid, dignified relief material and community support during emergencies.",
      },
      { property: "og:title", content: "Disaster Relief Programme — BRICCA Foundation" },
      { property: "og:description", content: "Rapid, dignified support in crisis." },
    ],
  }),
  component: DisasterReliefProgramme,
});

function DisasterReliefProgramme() {
  const programme = getProgrammeDetail("disaster-relief")!;
  return <ProgrammeDetailPage programme={programme} />;
}
