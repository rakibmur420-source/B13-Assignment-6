import designTool from "./assets/products/design-tool.png";
import operation from "./assets/products/operation.png";
import portfolio from "./assets/products/portfolio.png";
import shoppingCart from "./assets/products/shopping-cart.png";
import socialMedia from "./assets/products/social-media.png";
import writing from "./assets/products/writing.png";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    period: "Mo",
    tag: "Best Seller",
    features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
    icon: writing,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "One-Time",
    tag: "Popular",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
    icon: designTool,
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "Mo",
    tag: "New",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    icon: shoppingCart,
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    period: "Mo",
    tag: "Popular",
    features: ["50+ automations", "API access", "Custom workflows"],
    icon: operation,
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Create professional resumes and cover letters that land interviews.",
    price: 15,
    period: "One-Time",
    tag: "New",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
    icon: portfolio,
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description: "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "Mo",
    tag: "Best Seller",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    icon: socialMedia,
  },
  {
    id: 7,
    name: "Email Marketing Pro",
    description: "Create, automate, and optimize email campaigns to boost engagement and conversions.",
    price: 25,
    period: "monthly",
    tag: "Popular",
    features: ["Unlimited campaigns", "Pre-built templates", "Automation workflows", "Analytics & reports"],
    icon: operation,
  },
  {
    id: 8,
    name: "Website Builder Kit",
    description: "Build modern, responsive websites with drag-and-drop tools and templates.",
    price: 59,
    period: "one-time",
    tag: "Best Seller",
    features: ["100+ website templates", "Drag & drop builder", "SEO optimization", "Custom domains support"],
    icon: designTool,
  },
  {
    id: 9,
    name: "Video Editing Suite",
    description: "Edit and produce high-quality videos with powerful and easy-to-use tools.",
    price: 35,
    period: "monthly",
    tag: "New",
    features: ["HD video editing", "Built-in effects", "Audio enhancement", "Export in multiple formats"],
    icon: writing,
  },
];

export default products;
