type ProjectData = {
  title: string;
  codeLink?: string;
  blogLink?: string;
  otherLink?: {
    link: string;
    text: string;
  };
  description: string;
  image: {
    src: string;
    alt: string;
    slot: string;
  };
  tags: string[];
};

const projectCatppuccin = {
  title: "Catppuccin for IDA",
  codeLink: "https://github.com/catppuccin/ida-debugger",
  blogLink: "blog/first-os-contribution",
  description:
    "I developed the Catppuccin theme port for IDA. Catppuccin is a community-driven pastel theme with 4 flavors, each offering 26 eye-pleasing colors, perfect for coding, designing, and more! IDA is a powerful disassembler and versatile debugger.",
  image: {
    src: "/src/assets/projects/catppuccin-ida.png",
    alt: "Catppuccin for IDA logo",
    slot: "logo",
  },
  tags: ["CSS", "QtSS", "Open Source"],
};
const projectGone = {
  title: "Gone CLI",
  codeLink: "https://github.com/ValentinTT/gone",
  blogLink: "/blog/gone",
  description:
    "'gone' is a command-line utility for comparing dates and calculating differences, supporting multiple date formats and quick comparisons with today's date using a --today flag. It is written in Go with the Cobra framework.",
  image: {
    src: "/src/assets/projects/gone-cli.png",
    alt: "Gone cli logo",
    slot: "logo",
  },
  tags: ["GO", "Cobra", "Testing"],
};
const projectBeeWatcher = {
  title: "Bee Watcher",
  codeLink: "https://github.com/ValentinTT/bee-watcher",
  blogLink: "/blog/bee-watcher",
  description:
    "Radio frequency networked Arduinos gather internal hives' data (temperature, humidity, position and motion). They are then sent to a central unit for micro SD logging and emergency SMS alerts.",
  image: {
    src: "/src/assets/projects/bee-watcher-logo.png",
    alt: "Bee watcher logo",
    slot: "logo",
  },
  tags: ["Arduino", "C"],
};
const projectPremiere = {
  title: "ReEvolution Premiere",
  blogLink: "/blog/reevolution-premiere-1",
  description:
    "ReEvolution Premiere modernizes systems for Premiere, a small financial firm in Argentina. I led frontend development for the web system and PWA, and contributed to architectural decisions. I also blogged about my experience!",
  image: {
    src: "/src/assets/projects/premiere.png",
    alt: "Premiere logo",
    slot: "logo",
  },
  tags: ["Next.js", "Shadcn", "Tailwind", "Radix"],
};
const projectMedito = {
  title: "Medito Fundrasing PoC",
  codeLink: "https://github.com/ValentinTT/medito-fundrasing",
  otherLink: {
    link: "https://medito-fundrasing.pages.dev/",
    text: "Deployment",
  },
  description:
    "As a Medito app user, I accepted their challenge to code a fundraising page. I developed it on the go using Next.js, TypeScript, Tailwind CSS, and shadcn, and hosted it on Cloudflare.",
  image: {
    src: "/src/assets/projects/medito-fundrasing.png",
    alt: "Medito Fundrasing logo",
    slot: "logo",
  },
  tags: ["Next.js", "Typescript", "Tailwdind"],
};
const projectSalud = {
  title: "Salud Rugepresa",
  description:
    "Developed a licensing management system for healthcare institutions (hospitals, nursing homes) in collaboration with the Ministry of Health, Córdoba. Frontend development designing interfaces and collaborating in a large multidisciplinary team.",
  image: {
    src: "/src/assets/projects/salud.png",
    alt: "Salud project logo",
    slot: "logo",
  },
  tags: ["Next.js", "Material-UI"],
};

const projectsInfo: ProjectData[] = [
  projectPremiere,
  projectCatppuccin,
  projectGone,
  projectBeeWatcher,
  projectMedito,
  projectSalud,
];

export default projectsInfo;
