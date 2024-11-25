"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it first comes into view
    threshold: 0.8, // Adjust as needed (10% visibility)
  });

  React.useEffect(() => {
    if (inView && progress < 100) {
      const timer = setTimeout(
        () => setProgress((prev) => prev + 5),
        150 - progress
      );
      return () => clearTimeout(timer);
    }
  }, [inView, progress]);

  return (
    <div ref={ref} className="w-full mx-auto">
      <Progress value={progress} />
    </div>
  );
}
