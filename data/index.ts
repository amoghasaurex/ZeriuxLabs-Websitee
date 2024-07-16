
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    des: "An app designed to combat procrastination by leveraging intelligent reminders and task management.",
    img: "/upcoming.svg",
    iconLists: ["/flutterio-icon.svg","/Google_Gemini_logo.svg"],
    link: "",
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
    title: "Computer Lab for Underpriviliged Students",
    des: "A dedicated space equipped with technology to empower underprivileged children with essential digital skills.",
    img: "/upcoming.svg",
    iconLists: [],
    link: "",
    sourceCode: "",
  },
] as const;

export const testimonials = [
  {
    quote: `"Zeriux Labs has completely revolutionized how I approach my daily tasks. ProAct+ is a game-changer for productivity!"`,
    name: "Sarah Thompson",
    title: "Software Engineer",
  },
  {
    quote: `"The AI model developed by Zeriux Labs has been a lifesaver. It's like having a supportive friend who's always there to listen."`,
    name: "James Bennet",
    title: "Student in Abu Dhabi",
  },
  {
    quote: `"The live captioning glasses have made a huge difference in my life. They are a fantastic tool for the deaf community"`,
    name: "Emily Rodriguez",
    title: "UAE Deaf Association",
  },
  {
    quote: `"Zeriux Labs' commitment to social good is inspiring. The computer lab they built for underprivileged kids is making a real impact."`,
    name: "Vijay Sharma",
    title: "Student in Karnataka",
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

export const workExperience = [
  
] as const;

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
