import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Certifications", value: 7, suffix: "" },
  { label: "Tech Skills", value: 20, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
];

const AnimatedNumber = ({ value, suffix, isVisible }: { value: number; suffix?: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(duration / value);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const StatsCounter = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: i * 0.1 + "s",
            }}
          >
            <div className="text-4xl font-bold mb-1">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
            </div>
            <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
