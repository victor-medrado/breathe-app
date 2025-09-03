import type { Icon } from "@phosphor-icons/react";

export interface TechniqueSequence {
  action: "inhale" | "hold" | "exhale";
  duration: number;
}

export interface BreathingTechnique {
  id: string;
  title: string;
  description: string;
  icon: Icon;
  tags: string[];
  sequence: TechniqueSequence[];
}
