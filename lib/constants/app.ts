// App Constants for The Best Property Group
export const APP_NAME = "The Best Property Group";
export const APP_DESCRIPTION = "Your Trusted Partner in Real Estate Excellence";
export const APP_URL = "https://thebestpropertygroup.com";

// Contact Information
export const CONTACT_INFO = {
  phone: "02-748-3030-2",
  mobile: "066-115-2538",
  email: "best23238@gmail.com",
  address: "Bangkok, Thailand",
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/bestpropertygroup",
  instagram: "https://instagram.com/bestpropertygroup",
  twitter: "https://twitter.com/bestpropertygroup",
  linkedin: "https://linkedin.com/company/bestpropertygroup",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

// Property Types
export const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Investment",
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];
