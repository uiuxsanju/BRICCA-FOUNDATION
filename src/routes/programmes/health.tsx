import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/health")({
  head: () => ({
    meta: [
      { title: "Health Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's health programme: village health camps, screening and vaccination support for underserved communities.",
      },
      { property: "og:title", content: "Health Programme — BRICCA Foundation" },
      { property: "og:description", content: "Community health, close to home." },
    ],
  }),
  component: HealthProgramme,
});

function HealthProgramme() {
  const programme = getProgrammeDetail("health")!;
  return <ProgrammeDetailPage programme={programme} />;
}
