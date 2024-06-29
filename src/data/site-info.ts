export type SocialLink = {
  me?: string;
  text: string;
  icon: string;
  href: string;
  platform: string;
  footerOnly?: boolean;
};

export type SiteInfo = {
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

const siteInfo: SiteInfo = {
  name: "ValentinTT",
  title: "ValentinTT",
  description:
    "I'm a software engineering and tech enthusiast. Check is my personal portfolio and blog!",
  image: {
    src: "/favicon.svg",
    alt: "ValentinTT",
  },
  socialLinks: [
    {
      platform: "twitter",
      icon: "social/twitter",
      me: "https://x.com/n1770w",
      href: "https://x.com/n1770w",
      text: "Follow me on x.com (formerly Twitter)",
    },
    {
      platform: "github",
      icon: "social/github",
      text: "Go to my GitHub profile",
      me: "https://github.com/ValentinTT/",
      href: "https://github.com/ValentinTT/",
    },
  ],
};

export default siteInfo;
