export const faqs = {
  left: [
    {
      id: "faq-left-1",
      q: "What types of videos do you edit?",
      a: "I specialize in premium commercials, documentaries, and high-end social media content that requires a cinematic touch.",
    },
    {
      id: "faq-left-2",
      q: "How long does a typical project take?",
      a: "Depending on the scope, most projects are completed within 1 to 3 weeks. Rush delivery is available upon request.",
    },
    {
      id: "faq-left-3",
      q: "Do you offer revisions?",
      a: "Yes, every project includes two rounds of revisions to ensure the final product perfectly aligns with your vision.",
    },
  ],
  right: [
    {
      id: "faq-right-1",
      q: "Can you help with the script and creative direction?",
      a: "Absolutely. I often collaborate with clients early in the process to shape the narrative and visual style before editing begins.",
    },
    {
      id: "faq-right-2",
      q: "What software do you use?",
      a: "I work primarily in Adobe Premiere Pro, After Effects, and DaVinci Resolve for color grading.",
    },
    {
      id: "faq-right-3",
      q: "How do we get started?",
      a: "Simply reach out via the contact form with details about your project, and we can schedule a quick discovery call.",
    },
  ],
};


export const steps = [
  {
    id: "step-1",
    step: "Step 1",
    stage: "Stage 1:",
    title: "Discovery & Strategy",
    description: "We start by analyzing your brand, audience, and goals. We discuss the creative direction to ensure the final video aligns perfectly with your vision.",
    isLast: false,
    hasBr: false,
    icon: "FileText",
  },
  {
    id: "step-2",
    step: "Step 2",
    stage: "Stage 2:",
    title: "Asset Curation & Storymapping",
    description: "I review all provided footage, curate the best takes, and build a rough structural outline of the narrative before diving into the detailed edit.",
    isLast: false,
    hasBr: false,
    icon: "MapTrifold",
  },
  {
    id: "step-3",
    step: "Step 3",
    stage: "Stage 3:",
    title: "The Edit & Motion",
    description: "This is where the magic happens. I cut the footage to the beat, add seamless transitions, and integrate premium motion graphics that elevate the production value.",
    isLast: false,
    hasBr: false,
    icon: "MagicWand",
  },
  {
    id: "step-4",
    step: "Step 4",
    stage: "Stage 4:",
    title: "Color & Sound Design",
    description: "A great edit needs great sound and color. I perform professional color grading to achieve a cinematic look and layer immersive sound effects to bring the video to life.",
    isLast: false,
    hasBr: false,
    icon: "RocketLaunch",
  },
  {
    id: "step-5",
    step: "Step 5",
    stage: "Stage 5:",
    title: "Final Delivery",
    description: "You receive a polished, high-resolution master file optimized for your target platforms, ready to captivate your audience and drive results.",
    isLast: true,
    hasBr: false,
    icon: "Crown",
  },
];



export const endResultVideos = [
  {
    id: "video-duolingo",
    src: "/videos/01.mp4",
    img: "/image/video-duolingo.webp",
    title: "Duolingo",
    mt: "",
  },
  {
    id: "video-files",
    src: "/videos/02.mp4",
    img: "/image/video-files.webp",
    title: "Files",
    mt: "lg:mt-8",
  },
  {
    id: "video-chatgpt",
    src: "/videos/03.mp4",
    img: "/image/video-chatgpt.webp",
    title: "ChatGPT",
    mt: "",
  },
  {
    id: "video-uber",
    src: "/videos/04.mp4",
    img: "/image/video-uber.webp",
    title: "Uber",
    mt: "lg:mt-8",
  },
];

export const advantagesData = {
  disadvantages: [
    { id: "dis-1", text: "Always missing deadlines and delaying your content schedule" },
    { id: "dis-2", text: "Has no clue about scroll-stopping hooks or viewer retention" },
    { id: "dis-3", text: "Can't assist with scripts, leaving you to do all the creative heavy lifting" },
    { id: "dis-4", text: "Demands money every single day without actually understanding your business needs" },
    { id: "dis-5", text: "Inexperienced editors who need constant supervision and direction" },
    { id: "dis-6", text: "Fails to turn simple footage into anything more than a basic, boring video" },
  ],
  advantages: [
    { id: "adv-1", text: "Always delivers high-quality work on time and keeps your content schedule running smoothly" },
    { id: "adv-2", text: "Master of scroll-stopping hooks that grab attention and maximize viewer retention" },
    { id: "adv-3", text: "Proactively helps you with your scripts and creative direction to elevate every video" },
    { id: "adv-4", text: "Deeply understands your business and your goals instead of just demanding money every day" },
    { id: "adv-5", text: "Highly experienced editor who takes ownership of projects with minimal supervision" },
    { id: "adv-6", text: "Expertly turns simple, raw footage into a polished and unforgettable cinematic experience" },
  ],
};

export const allProjects = [
  {
    id: 1,
    slug: "global-campaign",
    title: "Global Campaign",
    client: "BMW",
    role: "Lead Editor",
    year: "2024",
    description: "A high-octane global launch campaign requiring split-second precision and seamless speed-ramps to capture the sheer power and elegance of the new M-Series.",
    src: "/videos/05.mp4",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    slug: "product-launch",
    title: "Product Launch",
    client: "Apple",
    role: "Motion Designer",
    year: "2023",
    description: "Minimalist, rhythm-driven editing that highlights the pristine design and capability of the device, matching every cut to the bespoke sound design.",
    src: "/videos/01.mp4",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    slug: "brand-anthem",
    title: "Brand Anthem",
    client: "Nike",
    role: "Editor & Colorist",
    year: "2024",
    description: "An emotional, raw documentary-style anthem piece focusing on grit and perseverance, featuring dynamic transitions and a highly cinematic grade.",
    src: "/videos/02.mp4",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    slug: "documentary",
    title: "Documentary",
    client: "National Geographic",
    role: "Lead Editor",
    year: "2023",
    description: "A breathtaking visual journey that required thousands of hours of raw footage to be distilled into a compelling 20-minute narrative.",
    src: "/videos/03.mp4",
    colSpan: "md:col-span-2",
  },
  {
    id: 5,
    slug: "social-commercial",
    title: "Social Commercial",
    client: "Spotify",
    role: "Video Editor",
    year: "2024",
    description: "A fast-paced, highly engaging commercial optimized for vertical social feeds, featuring bold typography and kinetic motion design.",
    src: "/videos/04.mp4",
    colSpan: "md:col-span-3",
  }
];

export const socialLinks = [
  { id: "social-1", label: "Instagram", href: "#" },
  { id: "social-2", label: "X / Twitter", href: "#" },
  { id: "social-3", label: "LinkedIn", href: "#" },
];

export const capabilities = [
  {
    id: "cap-1",
    title: "Editorial",
    description: "Commercials, Documentaries, Social Campaigns, Brand Anthems.",
  },
  {
    id: "cap-2",
    title: "Motion Design",
    description: "Kinetic Typography, UI Animation, Seamless Transitions, Title Sequences.",
  },
  {
    id: "cap-3",
    title: "Color & Sound",
    description: "Cinematic Color Grading, Sound Design, Audio Mixing, Foley.",
  },
  {
    id: "cap-4",
    title: "Software",
    description: "Premiere Pro, After Effects, DaVinci Resolve, Figma.",
  },
];

export const outcomeStats = [
  { id: "stat-1", label: "10M+ Views Delivered", color: "bg-gray-400" },
  { id: "stat-2", label: "Award-Winning Edits", color: "bg-rose-500" },
];

export const testimonials = [
  {
    id: 1,
    quote: "This changed everything for me.",
    author: "Sarah Chen",
    role: "Designer at Figma",
    avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
  },
  {
    id: 2,
    quote: "Simply brilliant. Nothing else compares.",
    author: "Marcus Johnson",
    role: "Engineer at Vercel",
    avatar: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
  },
  {
    id: 3,
    quote: "The attention to detail is unmatched.",
    author: "Elena Rodriguez",
    role: "Founder at Craft",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0",
  },
];
