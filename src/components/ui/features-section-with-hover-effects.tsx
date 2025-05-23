import { cn } from "../../lib/utils";
import { 
  DollarSign, 
  Zap, 
  Truck, 
  PieChart, 
  HeadphonesIcon,
  ShieldCheck,
  Clock,
  BarChart3
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Maximize Revenue",
      description: "Low fees, comprehensive rate estimates, and data-backed load recommendations.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Instant Payments",
      description: "Get paid instantly upon proof-of-delivery at no additional cost.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Smarter Load Booking",
      description: "Build efficient schedules from multiple sources based on your preferences.",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Business Insights",
      description: "Track income and expenses, and set revenue goals for smoother operations.",
      icon: <PieChart className="w-6 h-6" />,
    },
    {
      title: "24/7 Customer Support",
      description: "Get assistance through our dedicated customer success team whenever you need it.",
      icon: <HeadphonesIcon className="w-6 h-6" />,
    },
    {
      title: "Compliance Management",
      description: "Stay on top of regulations and requirements with automated compliance tools.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Real-time Tracking",
      description: "Monitor your shipments in real-time with detailed status updates.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive reporting tools to analyze and improve your business metrics.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-neutral-900 dark:group-hover/feature:bg-white transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
