/**
 * Real stock photography (Pexels — free license, no attribution required)
 * replacing the previous AI-generated placeholder images.
 *
 * Each URL points directly at Pexels' image CDN. Swap any of these for the
 * organisation's own photography whenever it's available — just replace the
 * string value, nothing else needs to change.
 */

const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const heroCommunity = px(20853361, 1920);
export const featureAbout = px(36739282, 1600);
export const featureImpact = px(3079978, 1600);

export const programEducation = px(31447794, 1200);
export const programLivelihood = px(28389703, 1200);
export const programWomen = px(15675900, 1200);
export const programDisability = px(7162989, 1200);
export const programHealth = px(9951142, 1200);
export const programRelief = px(6647008, 1200);
export const programAgriculture = px(29912210, 1200);
export const programSports = px(13509977, 1200);
export const programCoastal = px(31790339, 1200);

// Extra gallery images for the three detailed programme pages
// (/programmes/education, /programmes/livelihood-skills, /programmes/women-empowerment)
export const educationGallery = [
  programEducation,
  px(12199101, 1200),
  px(15119089, 1200),
  px(35558791, 1200),
];

export const livelihoodGallery = [
  programLivelihood,
  px(35216547, 1200),
  px(3869086, 1200),
];

export const womenGallery = [
  programWomen,
  px(36746074, 1200),
  px(36384099, 1200),
];

export const disabilityGallery = [
  programDisability,
  px(6194680, 1200),
  px(8415827, 1200),
  px(8127701, 1200),
];

export const healthGallery = [
  programHealth,
  px(33127835, 1200),
  px(33127869, 1200),
  px(33034061, 1200),
];

export const reliefGallery = [programRelief, px(6591161, 1200), px(6995260, 1200)];

export const agricultureGallery = [
  programAgriculture,
  px(20238488, 1200),
  px(20344368, 1200),
  px(20515274, 1200),
];

export const sportsGallery = [programSports, px(2549230, 1200), px(30969813, 1200)];

export const coastalGallery = [programCoastal, px(12865872, 1200)];
