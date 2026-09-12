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
