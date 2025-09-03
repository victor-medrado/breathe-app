import {
  HeartbeatIcon,
  LightningIcon,
  MoonIcon,
  WindIcon,
} from "@phosphor-icons/react";
import type { BreathingTechnique } from "../@types";

export const breathingTechniques: BreathingTechnique[] = [
  {
    id: "478",
    title: "Respiração 4-7-8",
    description: "Relaxamento e sono: Inspirar 4s, segurar 7s, expirar 8s.",
    icon: MoonIcon,
    tags: ["Reduz ansiedade", "Melhora o sono", "Diminui o estresse"],
    sequence: [
      { action: "inhale", duration: 4 },
      { action: "hold", duration: 7 },
      { action: "exhale", duration: 8 },
    ],
  },
  {
    id: "box",
    title: "Respiração Quadrada",
    description:
      "Foco e clareza: Inspira, segura, expira, segura – tudo em 4 segundos.",
    icon: WindIcon,
    tags: ["Equilibra energia", "Melhora o foco", "Diminui o estresse"],
    sequence: [
      { action: "inhale", duration: 4 },
      { action: "hold", duration: 4 },
      { action: "exhale", duration: 4 },
      { action: "hold", duration: 4 },
    ],
  },
  {
    id: "energize",
    title: "Respiração Energizante",
    description: "Mais energia",
    icon: LightningIcon,
    tags: ["Aumenta energia", "Melhora alerta", "Estimula o foco"],
    sequence: [
      { action: "inhale", duration: 2 },
      { action: "exhale", duration: 1 },
    ],
  },
  {
    id: "cardiac",
    title: "Respiração Cardíaca",
    description: "Equilíbrio emocional",
    icon: HeartbeatIcon,
    tags: ["Aumenta bem-estar", "Diminui o estresse", "Reduz ansiedade"],
    sequence: [
      { action: "inhale", duration: 5 },
      { action: "exhale", duration: 5 },
    ],
  },
];
