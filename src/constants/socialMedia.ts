import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import type { IconType } from "react-icons";

export interface SocialLink {
  id: string;
  icon: IconType;
  link: string;
  label: string;
}

export const SOCIAL_MEDIA: SocialLink[] = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/roseline-cheng/",
    label: "LinkedIn",
  },
  {
    id: "social-media-3",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/crytart/",
    label: "Instagram",
  },
  {
    id: "social-media-4",
    icon: AiFillMail,
    link: "mailto:roseline.cheng2006@gmail.com",
    label: "Email",
  },
];
