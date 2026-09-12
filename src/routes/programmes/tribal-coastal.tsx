import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/tribal-coastal")({
  head: () => ({
    meta: [
      { title: "Tribal & Coastal Development Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's tribal and coastal development programme: community development shaped around the realities of tribal and coastal Andhra Pradesh.",
      },
      {
        property: "og:title",
        content: "Tribal & Coastal Development Programme — BRICCA Foundation",
      },
      { property: "og:description", content: "Programmes shaped by local realities." },
    ],
  }),
  component: TribalCoastalProgramme,
});

function TribalCoastalProgramme() {
  const programme = getProgrammeDetail("tribal-coastal")!;
  return <ProgrammeDetailPage programme={programme} />;
}
