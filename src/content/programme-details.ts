import { educationGallery, livelihoodGallery, womenGallery } from "@/content/images";

export type ProgrammeDetail = {
  slug: "education" | "livelihood-skills" | "women-empowerment";
  no: string;
  title: string;
  short: string;
  overview: string;
  whatWeDo: string[];
  whyItMatters: string;
  whoWeServe: string;
  keyActivities: string[];
  ourApproach: string[];
  gallery: string[];
};

export const programmeDetails: ProgrammeDetail[] = [
  {
    slug: "education",
    no: "01",
    title: "Education",
    short: "Building stronger foundations for learning.",
    overview:
      "BRICCA Foundation's education programme works alongside government schools and out-of-school children in rural and tribal parts of Andhra Pradesh, focusing on the basics that make everything else possible: regular attendance, reading and writing confidence, and comfort with numbers. The aim is simple — every child within reach of our team should have a real chance to learn at grade level, regardless of where they were born.",
    whatWeDo: [
      "Run after-school and remedial learning support for children who are falling behind in reading, writing or maths",
      "Provide basic learning material — notebooks, stationery and age-appropriate books — to students who would otherwise go without",
      "Introduce first exposure to computers and digital literacy for students with no access at school or home",
      "Work with parents and local school staff so support continues beyond our own sessions",
      "Identify out-of-school children in the community and support their return to formal education",
    ],
    whyItMatters:
      "In many of the villages BRICCA works in, the nearest school is under-resourced, understaffed, or simply too far for younger children to reach reliably. A child who falls behind in early reading rarely catches up on their own — the gap tends to widen every year. Consistent, local support at the right age keeps children in school and gives them a fair shot at everything that follows: secondary education, skilled work, and the ability to make their own choices as adults.",
    whoWeServe:
      "School-going children and out-of-school learners in the rural, tribal and coastal communities where BRICCA is active — with particular attention to first-generation learners, whose families have limited ability to support schoolwork at home.",
    keyActivities: [
      "Daily or weekly remedial learning sessions grouped by age and reading level",
      "Distribution of notebooks, textbooks and basic school supplies at the start of the academic year",
      "Digital literacy sessions introducing computers, typing and basic software",
      "Parent and community meetings to discuss each child's progress and attendance",
      "Coordination with local school teachers to align our support with classroom learning",
    ],
    ourApproach: [
      "We work with, not around, the existing government school system — our role is to reinforce it, not replace it.",
      "Every intervention starts with understanding the specific gap in a community: infrastructure, learning levels, or access, since the right response is different in each case.",
      "Progress is tracked child by child, not just at a programme level, so support can be adjusted for the students who need it most.",
      "We prioritise consistency over scale — steady, repeated contact with the same children rather than one-off events.",
    ],
    gallery: educationGallery,
  },
  {
    slug: "livelihood-skills",
    no: "02",
    title: "Livelihood & Skills",
    short: "Skills that lead to dignified employment.",
    overview:
      "The Livelihood & Skills programme gives unemployed and underemployed youth practical, market-relevant training — from vocational trades to basic digital skills — designed to connect directly to real employment or self-employment opportunities, not just a certificate.",
    whatWeDo: [
      "Deliver vocational skill training in trades with local demand, such as tailoring and basic technical repair",
      "Run digital and computer literacy courses for young people entering the job market",
      "Connect trained youth with local employers, self-employment opportunities, or further training pathways",
      "Support participants in building the basic paperwork and confidence needed for job applications and interviews",
    ],
    whyItMatters:
      "A large number of young people in the communities BRICCA serves finish school with no clear route into stable work. Without a recognised skill, they're often limited to irregular daily-wage labour. Practical, hands-on training — the kind that leads directly to a trade or a job — is one of the most direct ways to change a young person's economic trajectory, and that of their family.",
    whoWeServe:
      "Unemployed and underemployed youth in BRICCA's operating areas, with particular focus on young people who left formal education early and have limited access to formal vocational institutes.",
    keyActivities: [
      "Batch-based vocational training courses run over several weeks per trade",
      "Practical, hands-on instruction rather than classroom-only theory",
      "Basic digital literacy: typing, using a computer, and everyday software",
      "Placement support and introductions to local employers and enterprises",
      "Follow-up check-ins with participants after training to track outcomes",
    ],
    ourApproach: [
      "Training is chosen based on what the local job market can actually absorb, not a fixed national curriculum.",
      "We favour smaller batches with more hands-on practice time over large lecture-style classes.",
      "Placement and follow-up are treated as part of the programme, not an afterthought once training ends.",
      "Where possible we partner with local businesses and institutions so training reflects real workplace expectations.",
    ],
    gallery: livelihoodGallery,
  },
  {
    slug: "women-empowerment",
    no: "03",
    title: "Women Empowerment",
    short: "Independence through enterprise and voice.",
    overview:
      "BRICCA's Women Empowerment programme supports women in rural and coastal communities to build financial independence and a stronger voice in decisions that affect their households and communities — through skills training, group formation, and support for small enterprise.",
    whatWeDo: [
      "Support the formation and strengthening of women's groups for savings, mutual support and collective decision-making",
      "Provide skills training — including tailoring and craft-based livelihoods — that women can turn into income",
      "Help women navigate the basics of running a small enterprise: pricing, simple record-keeping and selling",
      "Create spaces for women to discuss shared concerns and support one another beyond the training itself",
    ],
    whyItMatters:
      "Many women in the communities BRICCA works in have limited independent income and limited say in household financial decisions, even when they contribute significant unpaid labour. A woman with her own income and a support network of peers is better placed to make decisions for herself and her family, and often becomes a source of support and encouragement for other women around her.",
    whoWeServe:
      "Women in rural and coastal communities across BRICCA's operating areas, including homemakers with no prior independent income and women already running small, informal enterprises who need support to grow them.",
    keyActivities: [
      "Formation and regular meetings of women's groups for savings and mutual support",
      "Skills and craft-based livelihood training suited to local demand",
      "Basic enterprise guidance: costing, pricing and simple bookkeeping",
      "Peer-support sessions where women share progress and challenges",
    ],
    ourApproach: [
      "Programmes are built around groups, not just individuals — peer support is often what sustains a woman's progress over time.",
      "Training is paired with practical guidance on actually selling what's produced, not skills training alone.",
      "We work at the pace of the community, respecting the time and household constraints many participants are balancing.",
      "Women who complete training are encouraged to mentor newer participants, so the programme's reach grows from within the community.",
    ],
    gallery: womenGallery,
  },
];

export function getProgrammeDetail(slug: ProgrammeDetail["slug"]) {
  return programmeDetails.find((p) => p.slug === slug);
}
