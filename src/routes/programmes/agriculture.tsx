import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/agriculture")({
  head: () => ({
    meta: [
      { title: "Agriculture Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's agriculture programme: sustainable farming practices and support for small and marginal farmers.",
      },
      { property: "og:title", content: "Agriculture Programme — BRICCA Foundation" },
      { property: "og:description", content: "Sustainable farming, stronger incomes." },
    ],
  }),
  component: AgricultureProgramme,
});

function AgricultureProgramme() {
  const programme = getProgrammeDetail("agriculture")!;
  return <ProgrammeDetailPage programme={programme} />;
}
