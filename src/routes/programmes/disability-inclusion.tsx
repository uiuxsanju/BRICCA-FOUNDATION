import { createFileRoute } from "@tanstack/react-router";

import { ProgrammeDetailPage } from "@/components/site/ProgrammeDetailPage";
import { getProgrammeDetail } from "@/content/programme-details";

export const Route = createFileRoute("/programmes/disability-inclusion")({
  head: () => ({
    meta: [
      { title: "Disability Inclusion Programme — BRICCA Foundation" },
      {
        name: "description",
        content:
          "BRICCA Foundation's disability inclusion programme: accessible training and community support for persons with disabilities and their families.",
      },
      { property: "og:title", content: "Disability Inclusion Programme — BRICCA Foundation" },
      {
        property: "og:description",
        content: "Access, training and equal opportunity for persons with disabilities.",
      },
    ],
  }),
  component: DisabilityInclusionProgramme,
});

function DisabilityInclusionProgramme() {
  const programme = getProgrammeDetail("disability-inclusion")!;
  return <ProgrammeDetailPage programme={programme} />;
}
