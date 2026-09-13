import {
  agricultureGallery,
  coastalGallery,
  disabilityGallery,
  educationGallery,
  healthGallery,
  livelihoodGallery,
  reliefGallery,
  sportsGallery,
  womenGallery,
} from "@/content/images";

export type ProgrammeSlug =
  | "education"
  | "livelihood"
  | "women"
  | "disability-inclusion"
  | "health"
  | "disaster-relief"
  | "agriculture"
  | "sports"
  | "tribal-coastal";

export type ProgrammeDetail = {
  slug: ProgrammeSlug;
  /** Route path for this programme's detail page. */
  route: string;
  no: string;
  title: string;
  titleTe: string;
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
    route: "/programmes/education",
    no: "01",
    title: "Education",
    titleTe: "విద్య",
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
    slug: "livelihood",
    route: "/programmes/livelihood-skills",
    no: "02",
    title: "Livelihood & Skills",
    titleTe: "జీవనోపాధి & నైపుణ్యాలు",
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
    slug: "women",
    route: "/programmes/women-empowerment",
    no: "03",
    title: "Women Empowerment",
    titleTe: "మహిళా సాధికారత",
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
  {
    slug: "disability-inclusion",
    route: "/programmes/disability-inclusion",
    no: "04",
    title: "Disability Inclusion",
    titleTe: "వికలాంగుల చేరిక",
    short: "Access, training and equal opportunity.",
    overview:
      "BRICCA's Disability Inclusion programme works to make training, opportunity and everyday community life more accessible for persons with disabilities and their families, so that disability is not the reason someone is left out of education, work or community participation.",
    whatWeDo: [
      "Identify persons with disabilities in the community and understand what specifically stands in the way of their participation",
      "Provide or connect participants to inclusive skill-training suited to their abilities and interests",
      "Work with families so support and encouragement continues at home, not just in a training session",
      "Raise awareness in the wider community to reduce stigma and encourage inclusion",
    ],
    whyItMatters:
      "Persons with disabilities in rural communities often face a double barrier: the disability itself, and a lack of accessible infrastructure, training or attitudes that would let them participate fully in education, work and community life. Small, practical changes — an accessible entry point, a tailored training approach, a family that's been engaged rather than left to manage alone — can open doors that would otherwise stay closed.",
    whoWeServe:
      "Persons with disabilities and their families in the communities where BRICCA is active, across a range of ages and disability types.",
    keyActivities: [
      "Household-level identification and needs assessment for persons with disabilities",
      "Inclusive, ability-appropriate skill-training sessions",
      "Family engagement sessions to build a supportive home environment",
      "Community awareness activities to reduce stigma around disability",
    ],
    ourApproach: [
      "We start from what a person can do and wants to do, not a generic template for their disability type.",
      "Families are treated as partners in the process, since sustained support at home matters as much as any single training session.",
      "We work to change attitudes in the wider community alongside supporting individuals directly.",
      "Progress is measured in real participation — in training, in family life, in the community — not attendance alone.",
    ],
    gallery: disabilityGallery,
  },
  {
    slug: "health",
    route: "/programmes/health",
    no: "05",
    title: "Health",
    titleTe: "ఆరోగ్యం",
    short: "Community health, close to home.",
    overview:
      "BRICCA's Health programme brings basic health awareness, screening and vaccination support directly into underserved villages, so that distance and cost are less of a barrier to routine care that many communities would otherwise go without.",
    whatWeDo: [
      "Organise health awareness and screening camps in villages with limited access to healthcare facilities",
      "Support vaccination drives and routine immunisation efforts in coordination with local health systems",
      "Provide basic health education on hygiene, nutrition and preventive care",
      "Refer cases that need specialist attention to the appropriate government or partner health facility",
    ],
    whyItMatters:
      "Rural households often have to travel long distances for even basic medical attention, which means minor, preventable conditions can go unaddressed until they become serious. Bringing screening, awareness and vaccination support closer to home helps catch problems earlier and builds the kind of routine health habits that reduce risk over time.",
    whoWeServe:
      "Rural households and vulnerable groups — including children, pregnant women and the elderly — in the villages where BRICCA runs health activities.",
    keyActivities: [
      "Village-level health screening and awareness camps",
      "Coordination and on-ground support for vaccination camps",
      "Basic health and hygiene education sessions for families",
      "Referral support connecting patients to appropriate follow-up care",
    ],
    ourApproach: [
      "We work alongside, not instead of, the local public health system — our role is to extend its reach into harder-to-access villages.",
      "Health camps are planned around when and where communities can actually attend, not administrative convenience.",
      "Awareness and prevention are treated as seriously as the camps themselves, since many issues are preventable with earlier information.",
      "We follow up on referrals rather than treating a single camp visit as the end of our involvement.",
    ],
    gallery: healthGallery,
  },
  {
    slug: "disaster-relief",
    route: "/programmes/disaster-relief",
    no: "06",
    title: "Disaster Relief",
    titleTe: "విపత్తు సహాయం",
    short: "Rapid, dignified support in crisis.",
    overview:
      "BRICCA's Disaster Relief programme provides essential relief material and on-ground community support to families affected by emergencies and natural disasters, aiming to respond quickly while treating every family with dignity.",
    whatWeDo: [
      "Assess urgent needs in affected communities immediately after a disaster or emergency",
      "Distribute essential relief material such as food, water and basic supplies to affected families",
      "Coordinate with local authorities and other organisations to avoid duplication and reach those most in need",
      "Support affected communities in the period after the immediate emergency as they begin to recover",
    ],
    whyItMatters:
      "In the hours and days after a disaster, the gap between families who get help quickly and those who don't can make a real difference to how they recover. A fast, well-coordinated local response — one that treats affected people with dignity rather than as passive recipients — helps meet urgent needs without adding to the disruption families are already facing.",
    whoWeServe:
      "Disaster-affected families in the communities BRICCA operates in, prioritising those with the most urgent and immediate needs.",
    keyActivities: [
      "Rapid needs assessment in the immediate aftermath of an emergency",
      "Distribution of food, water and essential relief supplies",
      "Coordination with local government and other responders to cover gaps efficiently",
      "Basic support for affected families during the early recovery period",
    ],
    ourApproach: [
      "Speed matters, so relief plans are prepared in advance rather than built from scratch after an emergency happens.",
      "We coordinate with local authorities and other responders to avoid duplicating effort and to reach families others may miss.",
      "Every family is treated as a person with dignity to be supported, not a statistic to be processed.",
      "We stay engaged past the first distribution, since recovery from a disaster rarely ends with the first delivery of supplies.",
    ],
    gallery: reliefGallery,
  },
  {
    slug: "agriculture",
    route: "/programmes/agriculture",
    no: "07",
    title: "Agriculture",
    titleTe: "వ్యవసాయం",
    short: "Sustainable farming, stronger incomes.",
    overview:
      "BRICCA's Agriculture programme works with small and marginal farmers to promote sustainable farming practices and provide practical support, aiming to strengthen incomes without depending on approaches that aren't suited to the farmer's own land and resources.",
    whatWeDo: [
      "Share sustainable and locally appropriate farming practices with small and marginal farmers",
      "Support farmers in adopting practices that can improve yield and reduce input costs over time",
      "Facilitate farmer meetings to share knowledge and troubleshoot common problems",
      "Connect farmers to relevant government schemes and support where applicable",
    ],
    whyItMatters:
      "Small and marginal farmers often work with limited land, limited capital and limited access to updated agricultural knowledge, which makes them especially vulnerable to a single bad season. Practical, sustainable practices suited to their own conditions — rather than one-size-fits-all advice — can make farming more resilient and more profitable over time.",
    whoWeServe:
      "Small and marginal farmers in the rural communities where BRICCA is active.",
    keyActivities: [
      "Farmer training sessions on sustainable and locally relevant agricultural practices",
      "On-field demonstrations and hands-on guidance",
      "Peer learning sessions where farmers share what has and hasn't worked for them",
      "Information sessions on relevant government agricultural schemes",
    ],
    ourApproach: [
      "Recommendations are grounded in what actually works for the specific land, crop and resources a farmer has — not generic advice.",
      "We favour practices farmers can sustain on their own after training ends, over dependency on ongoing external input.",
      "Farmer-to-farmer learning is encouraged, since peers often trust practical advice from someone facing the same conditions.",
      "We stay in touch across a season rather than treating a single training day as complete support.",
    ],
    gallery: agricultureGallery,
  },
  {
    slug: "sports",
    route: "/programmes/sports",
    no: "08",
    title: "Sports",
    titleTe: "క్రీడలు",
    short: "Confidence, discipline and teamwork.",
    overview:
      "BRICCA's Sports programme uses organised sporting activity to help children and youth build confidence, discipline, fitness and teamwork — skills that carry over well beyond the field or the court.",
    whatWeDo: [
      "Organise regular sports sessions and activities for children and youth in the community",
      "Provide access to basic sporting equipment and safe spaces to play",
      "Use team sport to build discipline, cooperation and healthy competition",
      "Encourage consistent participation rather than one-off events",
    ],
    whyItMatters:
      "Many children in the communities BRICCA works with have limited access to organised sport, safe playing spaces or basic equipment. Beyond fitness, regular sport teaches discipline, teamwork and resilience — habits that support children well beyond childhood, and give them a positive, structured way to spend their time.",
    whoWeServe:
      "Children and youth in the communities where BRICCA runs sports activities.",
    keyActivities: [
      "Regular, scheduled sports sessions for children and youth",
      "Basic equipment provision where it's the barrier to participation",
      "Structured team activities that build cooperation, not just physical fitness",
      "Encouragement of consistent, ongoing participation over isolated events",
    ],
    ourApproach: [
      "We prioritise consistent, regular participation over occasional big events, since the benefits of sport build over time.",
      "Activities are chosen to fit what the community already plays and enjoys, not an imported programme.",
      "Sport is treated as a vehicle for discipline, teamwork and confidence, not only physical activity.",
      "We keep participation open and inclusive, so it isn't limited to children who are already the strongest players.",
    ],
    gallery: sportsGallery,
  },
  {
    slug: "tribal-coastal",
    route: "/programmes/tribal-coastal",
    no: "09",
    title: "Tribal & Coastal Development",
    titleTe: "గిరిజన & తీరప్రాంత అభివృద్ధి",
    short: "Programmes shaped by local realities.",
    overview:
      "BRICCA's Tribal & Coastal Development programme delivers community development work specifically designed around the realities of tribal and coastal communities in Andhra Pradesh, rather than applying the same approach used elsewhere in the state.",
    whatWeDo: [
      "Understand the specific needs, livelihoods and constraints of individual tribal and coastal communities before designing any activity",
      "Coordinate relevant education, livelihood and health support to reach these communities where mainstream services often don't",
      "Support livelihoods tied to the local environment, such as fishing-dependent coastal communities",
      "Work with community leaders and structures already trusted within tribal and coastal areas",
    ],
    whyItMatters:
      "Tribal and coastal communities often sit furthest from mainstream infrastructure and services, whether because of geography, language, or simply being harder to reach. A generic development approach designed for other parts of the state frequently misses what these communities actually need. Programmes shaped around the specific realities of a tribal or coastal community are far more likely to actually reach and help the people they're meant for.",
    whoWeServe:
      "Tribal and coastal communities within BRICCA's operating areas in Andhra Pradesh.",
    keyActivities: [
      "Community-level needs assessment specific to each tribal or coastal area",
      "Coordinated delivery of education, livelihood and health support suited to local realities",
      "Support for livelihoods connected to the local environment and economy",
      "Engagement with existing community leadership and trusted local structures",
    ],
    ourApproach: [
      "We start with the specific community's own context and constraints, rather than a standard programme template.",
      "Existing community leadership and trust networks are engaged rather than bypassed.",
      "Support is coordinated across education, livelihood and health rather than delivered as disconnected activities.",
      "We recognise that what works in a tribal upland community and a coastal fishing community can look very different, even within the same programme.",
    ],
    gallery: coastalGallery,
  },
];

export function getProgrammeDetail(slug: ProgrammeSlug) {
  return programmeDetails.find((p) => p.slug === slug);
}
