// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// export const SITE_TITLE = 'Splinterlands Blog - Una guida per chi vuole inziare a giocare';
// export const SITE_DESCRIPTION = 'Splinterlands Blog è una guida pratica che ti permetterà di iniziare a giocare e guadagnare.';
// export const HOMEPAGE_URL = 'https://splinterlandsblog.it'

import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://splinterlandsblog.it",
  author: "Selfrules",
  desc: "Splinterlands Blog è una guida pratica che ti permetterà di iniziare a giocare e guadagnare.",
  title: "Splinterlands Blog",
  ogImage: "default-og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Selfrules/splinterlands-blog",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "#",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "#",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/selfrules/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mattia@selfrules.org",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "#",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "#",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "#",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "#",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "#",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "#",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "#",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "#",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "discordapp.com/users/selfrules#0605",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "GitLab",
    href: "#",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "#",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "#",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "#",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "#",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
