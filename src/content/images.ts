/**
 * Official BRICCA Foundation photography, supplied directly by the
 * organisation. These replace the earlier stock placeholder images.
 *
 * Each programme has one primary (card/hero) image. Where more than one
 * official photo was supplied for a programme, the extras are listed in
 * that programme's gallery array for use on its detail page.
 */

import heroCommunityImg from "@/assets/programmes/hero-community.jpg";
import featureAboutImg from "@/assets/programmes/feature-about.jpg";
import educationCardImg from "@/assets/programmes/education-card.jpg";
import educationFullImg from "@/assets/programmes/education.jpg";
import livelihoodImg from "@/assets/programmes/livelihood.jpg";
import livelihood2Img from "@/assets/programmes/livelihood-2.jpg";
import womenImg from "@/assets/programmes/women.jpg";
import disabilityImg from "@/assets/programmes/disability.jpg";
import healthImg from "@/assets/programmes/health.jpg";
import reliefImg from "@/assets/programmes/relief.jpg";
import agricultureImg from "@/assets/programmes/agriculture.jpg";
import sportsImg from "@/assets/programmes/sports.jpg";
import tribalCoastalImg from "@/assets/programmes/tribal-coastal.jpg";
import gangavaramPortImg from "@/assets/programmes/gangavaram-port.jpg";

export const heroCommunity = heroCommunityImg;
export const featureAbout = featureAboutImg;
// No second official "impact" photo was supplied — the Gangavaram Port
// CSR visual doubles here since it already depicts education, health and
// livelihood outcomes together.
export const featureImpact = gangavaramPortImg;

// Card/hero images. Education uses a crop of the official banner with its
// baked-in title cropped out, so it doesn't duplicate the site's own card
// heading — the full banner (with title) appears in the programme gallery.
export const programEducation = educationCardImg;
export const programLivelihood = livelihoodImg;
export const programWomen = womenImg;
export const programDisability = disabilityImg;
export const programHealth = healthImg;
export const programRelief = reliefImg;
export const programAgriculture = agricultureImg;
export const programSports = sportsImg;
export const programCoastal = tribalCoastalImg;

export const gangavaramPort = gangavaramPortImg;

// Galleries for the 9 detailed programme pages — official photos only.
export const educationGallery = [educationFullImg];
export const livelihoodGallery = [livelihoodImg, livelihood2Img];
export const womenGallery = [womenImg];
export const disabilityGallery = [disabilityImg];
export const healthGallery = [healthImg];
export const reliefGallery = [reliefImg];
export const agricultureGallery = [agricultureImg];
export const sportsGallery = [sportsImg];
export const coastalGallery = [tribalCoastalImg];
