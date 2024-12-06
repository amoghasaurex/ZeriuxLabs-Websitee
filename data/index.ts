
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Our Team", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Empowering communities through advanced technology and compassionate design.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Pioneering the future of technology for the benefit of all.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our Tech Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Bridging gaps and fostering connections with intelligent technology.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Dedicated to enhancing lives through smart and empathetic tech.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Contact Us",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "ProAct+",
    des: "A revolutionary anti-procrastination app designed to help users manage their time effectively and boost productivity.",
    img: "/picsvg_download.svg",
    iconLists: ["/flutterio-icon.svg","/Google_Gemini_logo.svg"],
    link: "https://play.google.com/store/apps/details?id=com.zeriuxlabs.proact&pli=1",
    sourceCode: "",
  },
  {
    id: 2,
    title: "AI Model",
    des: "Our AI model simulates human-like conversations to provide empathetic support and promote well-being.",
    img: "/upcoming.svg",
    iconLists: ["/python-logo-only.svg", "/sql-database-generic-svgrepo-com.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 3,
    title: "Live Captioning Glasses",
    des: "Glasses that provide real-time captions to assist the deaf community, funded and donated for social good.",
    img: "/upcoming.svg",
    iconLists: ["/python-logo-only.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 4,
    title: "HoloBand",
    des: "A wearable device that creates 3D holograms with an offline AI voice assistant for seamless hands-free interaction.",
    img: "/upcoming.svg",
    iconLists: [],
    link: "",
    sourceCode: "",
  },
] as const;

export const testimonials = [
  {
    quote: `An Innovative tech enthusiast and the driving force behind groundbreaking projects, blending expertise in AI, robotics, and software development to create impactful solutions.`,
    name: "Adityan Srinivasan",
    title: "Founder & CEO",
  },
  {
    quote: `A dedicated leader known for his analytical skills and problem-solving abilities, contributing to the success of our projects with precision and creativity.`,
    name: "Pratham Shah",
    title: "Founder & COO",
  },
  {
    quote: `A skilled engineer and creative thinker, Amogh contributes to developing innovative, user-focused solutions with a strong blend of technical expertise and design insight.`,
    name: "Amogh Varote",
    title: "Founder & CTO",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience:{
  id: string
  title: string
  thumbnail: string
  desc: string
}[]= [ 
  
]

export const socialMedia = [
  {
    name: "Instagram",
    img: "/insta.svg",
    link: "https://instagram.com/zerixlabs",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://linkedin.com/company/zeriuxlabs",
  },
] as const;

export const techStack = {
  stack1: ["Python", "Next.js", "Typescript"],
  stack2: ["Flutter", "React.js", "Supabase"],
} as const;
