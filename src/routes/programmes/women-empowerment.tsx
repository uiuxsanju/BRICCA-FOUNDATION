import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/women-empowerment")({
  head: () => ({
    meta: [
      { title: "Women Empowerment Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's women empowerment programme: group formation, skills training and enterprise support for women in rural and coastal Andhra Pradesh.",
      },
      { property: "og:title", content: "Women Empowerment Programme — BRICCA Foundation" },
      {
        property: "og:description",
        content: "Independence through enterprise and voice for women in the communities we serve.",
      },
    ],
  }),
  component: WomenEmpowermentProgramme,
});

function WomenEmpowermentProgramme() {
  const programme = getProgrammeDetail("women")!;
  return <ProgrammeDetailPage programme={programme} />;
}
