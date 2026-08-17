export type TeamSide = "home" | "away";
export type MatchStatus = "draft" | "live" | "finished";

export type EventType =
  | "goal"
  | "corner"
  | "shot"
  | "shot_on_target"
  | "save"
  | "yellow"
  | "red"
  | "foul"
  | "offside"
  | "substitution"
  | "var"
  | "penalty"
  | "injury"
  | "note";

export type MatchEvent = {
  id: string;
  type: EventType;
  team: TeamSide;
  player?: string;
  secondaryPlayer?: string;
  note?: string;
  period: 1 | 2;
  elapsedSeconds: number;
  createdAt: number;
};

export type Match = {
  id: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  homePlayers: string[];
  awayPlayers: string[];
  status: MatchStatus;
  period: 1 | 2;
  elapsedSeconds: number;
  events: MatchEvent[];
  halftimeNote?: string;
  finalNote?: string;
  createdAt: number;
  updatedAt: number;
};

export const EVENT_META: Record<EventType, { label: string; icon: string }> = {
  goal: { label: "Gol", icon: "⚽" },
  corner: { label: "Escanteio", icon: "🚩" },
  shot: { label: "Finalização", icon: "🎯" },
  shot_on_target: { label: "No gol", icon: "🥅" },
  save: { label: "Defesa", icon: "🧤" },
  yellow: { label: "Amarelo", icon: "🟨" },
  red: { label: "Vermelho", icon: "🟥" },
  foul: { label: "Falta", icon: "⚠️" },
  offside: { label: "Impedimento", icon: "🚫" },
  substitution: { label: "Substituição", icon: "🔄" },
  var: { label: "VAR", icon: "📺" },
  penalty: { label: "Pênalti", icon: "⭕" },
  injury: { label: "Lesão", icon: "🩹" },
  note: { label: "Anotação", icon: "📝" },
};
