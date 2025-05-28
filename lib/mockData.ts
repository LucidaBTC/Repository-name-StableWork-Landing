export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance";
  salary: string;
  description: string;
  skills: string[];
  posted: string;
  category: string;
  urgent?: boolean;
  featured?: boolean;
}

export interface Freelancer {
  id: string;
  name: string;
  title: string;
  avatar: string;
  location: string;
  rate: string;
  rating: number;
  completedJobs: number;
  skills: string[];
  bio: string;
  languages: string[];
  responseTime: string;
  availability: "Available" | "Busy" | "Unavailable";
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Content Writer for Travel Blog",
    company: "Wanderlust Media",
    location: "Remote",
    type: "Freelance",
    salary: "$1,200 USDC",
    description:
      "Write engaging travel articles and destination guides for our popular travel blog.",
    skills: ["Content Writing", "SEO", "Travel", "Research"],
    posted: "2 hours ago",
    category: "Writing",
    featured: true,
  },
  {
    id: "2",
    title: "Virtual Assistant for E-commerce",
    company: "ShopSmart",
    location: "Remote",
    type: "Part-time",
    salary: "$800 DAI",
    description:
      "Manage customer inquiries, process orders, and handle administrative tasks.",
    skills: ["Customer Service", "Data Entry", "E-commerce", "Communication"],
    posted: "4 hours ago",
    category: "Admin",
  },
  {
    id: "3",
    title: "Social Media Manager",
    company: "GrowthLab",
    location: "Remote",
    type: "Contract",
    salary: "$2,500 USDC",
    description:
      "Create and manage social media content across multiple platforms.",
    skills: ["Social Media", "Content Creation", "Analytics", "Canva"],
    posted: "1 day ago",
    category: "Marketing",
    urgent: true,
  },
  {
    id: "4",
    title: "Graphic Designer for Startup",
    company: "TechFlow",
    location: "Remote",
    type: "Freelance",
    salary: "$1,800 DAI",
    description:
      "Design logos, marketing materials, and web graphics for a growing startup.",
    skills: ["Graphic Design", "Adobe Creative Suite", "Branding", "UI Design"],
    posted: "1 day ago",
    category: "Design",
  },
  {
    id: "5",
    title: "Spanish Translator",
    company: "GlobalDocs",
    location: "Remote",
    type: "Freelance",
    salary: "$900 USDC",
    description:
      "Translate business documents and marketing materials from English to Spanish.",
    skills: ["Translation", "Spanish", "Business Writing", "Proofreading"],
    posted: "2 days ago",
    category: "Translation",
  },
  {
    id: "6",
    title: "Bookkeeper for Small Business",
    company: "Local Cafe Chain",
    location: "Remote",
    type: "Part-time",
    salary: "$1,000 DAI",
    description:
      "Manage financial records, invoicing, and basic accounting tasks.",
    skills: ["Bookkeeping", "QuickBooks", "Excel", "Financial Analysis"],
    posted: "3 days ago",
    category: "Finance",
  },
  {
    id: "7",
    title: "Customer Support Specialist",
    company: "SaaS Solutions",
    location: "Remote",
    type: "Part-time",
    salary: "$1,400 USDC",
    description:
      "Provide excellent customer support via chat, email, and phone.",
    skills: ["Customer Support", "Communication", "Problem Solving", "CRM"],
    posted: "3 days ago",
    category: "Support",
  },
  {
    id: "8",
    title: "Video Editor for YouTube Channel",
    company: "CreativeMinds",
    location: "Remote",
    type: "Freelance",
    salary: "$1,600 DAI",
    description:
      "Edit engaging YouTube videos with motion graphics and sound design.",
    skills: [
      "Video Editing",
      "After Effects",
      "Premiere Pro",
      "Motion Graphics",
    ],
    posted: "4 days ago",
    category: "Video",
  },
  {
    id: "9",
    title: "Personal Chef for Events",
    company: "Elite Catering",
    location: "New York, NY",
    type: "Freelance",
    salary: "$2,200 USDC",
    description: "Prepare gourmet meals for private events and dinner parties.",
    skills: ["Cooking", "Menu Planning", "Food Safety", "Event Catering"],
    posted: "5 days ago",
    category: "Culinary",
  },
  {
    id: "10",
    title: "Dog Walker & Pet Sitter",
    company: "PetCare Plus",
    location: "San Francisco, CA",
    type: "Part-time",
    salary: "$600 DAI",
    description:
      "Walk dogs and provide pet sitting services for busy pet owners.",
    skills: ["Pet Care", "Reliability", "Physical Fitness", "Animal Handling"],
    posted: "1 week ago",
    category: "Pet Care",
  },
  {
    id: "11",
    title: "Local Tour Guide",
    company: "City Adventures",
    location: "Barcelona, Spain",
    type: "Freelance",
    salary: "$800 USDC",
    description:
      "Lead walking tours and share local history and culture with tourists.",
    skills: [
      "Public Speaking",
      "Local Knowledge",
      "Languages",
      "Customer Service",
    ],
    posted: "1 week ago",
    category: "Tourism",
  },
  {
    id: "12",
    title: "House Painter",
    company: "Home Renovations Co",
    location: "Austin, TX",
    type: "Contract",
    salary: "$1,500 DAI",
    description:
      "Paint interior and exterior walls for residential properties.",
    skills: [
      "Painting",
      "Surface Preparation",
      "Color Matching",
      "Attention to Detail",
    ],
    posted: "1 week ago",
    category: "Home Services",
  },
];

export const mockFreelancers: Freelancer[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Content Writer & SEO Specialist",
    avatar: "👩‍💻",
    location: "Toronto, Canada",
    rate: "$45/hour",
    rating: 4.9,
    completedJobs: 127,
    skills: [
      "Content Writing",
      "SEO",
      "Copywriting",
      "Blog Writing",
      "Technical Writing",
    ],
    bio: "Experienced content writer with 5+ years creating engaging content for tech companies and startups.",
    languages: ["English", "Mandarin"],
    responseTime: "< 1 hour",
    availability: "Available",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "UI/UX Designer",
    avatar: "👨‍🎨",
    location: "London, UK",
    rate: "$65/hour",
    rating: 4.8,
    completedJobs: 89,
    skills: [
      "UI Design",
      "UX Research",
      "Figma",
      "Prototyping",
      "User Testing",
    ],
    bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
    languages: ["English", "French"],
    responseTime: "< 2 hours",
    availability: "Available",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "Spanish Translator & Interpreter",
    avatar: "👩‍🏫",
    location: "Madrid, Spain",
    rate: "$35/hour",
    rating: 5.0,
    completedJobs: 203,
    skills: [
      "Spanish Translation",
      "English Translation",
      "Interpretation",
      "Localization",
    ],
    bio: "Native Spanish speaker with expertise in business and legal translation.",
    languages: ["Spanish", "English", "Portuguese"],
    responseTime: "< 30 minutes",
    availability: "Available",
  },
  {
    id: "4",
    name: "David Kim",
    title: "Video Editor & Motion Graphics",
    avatar: "👨‍💼",
    location: "Seoul, South Korea",
    rate: "$55/hour",
    rating: 4.7,
    completedJobs: 156,
    skills: [
      "Video Editing",
      "After Effects",
      "Motion Graphics",
      "Color Grading",
    ],
    bio: "Professional video editor with experience in commercials, YouTube, and social media content.",
    languages: ["Korean", "English"],
    responseTime: "< 3 hours",
    availability: "Busy",
  },
  {
    id: "5",
    name: "Priya Patel",
    title: "Virtual Assistant & Project Manager",
    avatar: "👩‍💼",
    location: "Mumbai, India",
    rate: "$25/hour",
    rating: 4.9,
    completedJobs: 312,
    skills: [
      "Virtual Assistance",
      "Project Management",
      "Data Entry",
      "Customer Service",
    ],
    bio: "Organized and efficient virtual assistant helping businesses streamline their operations.",
    languages: ["English", "Hindi", "Gujarati"],
    responseTime: "< 1 hour",
    availability: "Available",
  },
  {
    id: "6",
    name: "Ahmed Hassan",
    title: "Social Media Manager",
    avatar: "👨‍💻",
    location: "Cairo, Egypt",
    rate: "$30/hour",
    rating: 4.6,
    completedJobs: 94,
    skills: [
      "Social Media Marketing",
      "Content Creation",
      "Instagram",
      "Facebook Ads",
    ],
    bio: "Creative social media strategist helping brands grow their online presence.",
    languages: ["Arabic", "English"],
    responseTime: "< 2 hours",
    availability: "Available",
  },
  {
    id: "7",
    name: "Lisa Anderson",
    title: "Graphic Designer & Brand Specialist",
    avatar: "👩‍🎨",
    location: "Sydney, Australia",
    rate: "$50/hour",
    rating: 4.8,
    completedJobs: 178,
    skills: [
      "Graphic Design",
      "Branding",
      "Logo Design",
      "Print Design",
      "Adobe Creative Suite",
    ],
    bio: "Award-winning designer specializing in brand identity and visual communication.",
    languages: ["English"],
    responseTime: "< 4 hours",
    availability: "Available",
  },
  {
    id: "8",
    name: "Carlos Mendoza",
    title: "Bookkeeper & Financial Analyst",
    avatar: "👨‍💼",
    location: "Mexico City, Mexico",
    rate: "$40/hour",
    rating: 4.9,
    completedJobs: 145,
    skills: [
      "Bookkeeping",
      "QuickBooks",
      "Financial Analysis",
      "Tax Preparation",
    ],
    bio: "Certified bookkeeper with 8+ years experience helping small businesses manage their finances.",
    languages: ["Spanish", "English"],
    responseTime: "< 1 hour",
    availability: "Available",
  },
];

export const jobCategories = [
  "All Categories",
  "Writing",
  "Design",
  "Marketing",
  "Admin",
  "Translation",
  "Finance",
  "Support",
  "Video",
  "Culinary",
  "Pet Care",
  "Tourism",
  "Home Services",
];

export const freelancerCategories = [
  "All Skills",
  "Content Writing",
  "Design",
  "Translation",
  "Virtual Assistance",
  "Social Media",
  "Video Editing",
  "Bookkeeping",
  "Customer Support",
];
