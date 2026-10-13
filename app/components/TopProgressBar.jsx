"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(30);

    const midTimer = setTimeout(() => {
      setProgress(75);
    }, 120);

    const completeTimer = setTimeout(() => {
      setProgress(100);
      const hideTimer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(hideTimer);
    }, 320);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(completeTimer);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] h-[2px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transitionProperty: "width, opacity",
        }}
      />
    </div>
  );
}
