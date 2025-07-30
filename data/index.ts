
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Solutions", link: "#projects" },
  { name: "Our Team", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Breaking the cycle of procrastination through innovative productivity solutions.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Empowering individuals to overcome procrastination and achieve their goals.",
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
    title: "Building tools that transform procrastination into productive action.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "A non-profit dedicated to making productivity accessible to everyone.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Join Our Mission",
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
    des: " Your smart companion to beat procrastination and take action, one task at a time.",
    img: "/proact1.png",
    imgClassName: "absolute bottom-0 z-10 h-full w-auto object-cover object-center",
    iconLists: ["/flutterio-icon.svg","/Google_Gemini_logo.svg"],
    link: "https://play.google.com/store/apps/details?id=com.zeriuxlabs.proact&pli=1",
    sourceCode: "",
  },
  {
    id: 2,
    title: "ProSync+",
    des: "Optimize your weekly schedule with intelligent task planning tailored to your goals.",
    img: "/ProSync.png",
    imgClassName: "absolute bottom-0 z-10 w-full h-auto object-contain",
    iconLists: ["/flutterio-icon.svg","/Google_Gemini_logo.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 3,
    title: "Focus Forge",
    des: "Block distractions, track your time, and sharpen your focus – all in one browser extension.",
    img: "/focusforge.png",
    imgClassName: "absolute bottom-0 z-10 h-full w-auto object-cover object-center",
    iconLists: ["/python-logo-only.svg"],
    link: "",
    sourceCode: "",
  },

] as const;

export const testimonials = [
  {
    quote: `Passionate about helping people overcome procrastination through technology. Leading our mission to create accessible productivity tools that transform how individuals approach their goals and daily tasks.`,
    name: "Adityan Srinivasan",
    title: "Founder & CEO",
  },
  {
    quote: `Dedicated to designing user-centered solutions that make productivity intuitive and engaging. Focused on creating tools that turn procrastination into purposeful action for everyone.`,
    name: "Amogh Varote",
    title: "Founder & COO",
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
