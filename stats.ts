import { EventType, Match, TeamSide } from "./types";

export function count(match: Match, type: EventType, team: TeamSide) {
  return match.events.filter((e) => e.type === type && e.team === team).length;
}

export function score(match: Match) {
  return {
    home: count(match, "goal", "home"),
    away: count(match, "goal", "away"),
  };
}

export function statRows(match: Match) {
  return [
    { label: "Gols", home: count(match, "goal", "home"), away: count(match, "goal", "away") },
    { label: "Escanteios", home: count(match, "corner", "home"), away: count(match, "corner", "away") },
    {
      label: "Finalizações",
      home: count(match, "shot", "home") + count(match, "shot_on_target", "home"),
      away: count(match, "shot", "away") + count(match, "shot_on_target", "away"),
    },
    { label: "No gol", home: count(match, "shot_on_target", "home"), away: count(match, "shot_on_target", "away") },
    { label: "Defesas", home: count(match, "save", "home"), away: count(match, "save", "away") },
    { label: "Faltas", home: count(match, "foul", "home"), away: count(match, "foul", "away") },
    { label: "Impedimentos", home: count(match, "offside", "home"), away: count(match, "offside", "away") },
    { label: "Amarelos", home: count(match, "yellow", "home"), away: count(match, "yellow", "away") },
    { label: "Vermelhos", home: count(match, "red", "home"), away: count(match, "red", "away") },
  ];
}

export function minuteText(period: 1 | 2, elapsedSeconds: number) {
  const minuteInPeriod = Math.floor(elapsedSeconds / 60) + 1;
  const base = period === 1 ? 0 : 45;
  const official = base + minuteInPeriod;
  if (period === 1 && minuteInPeriod > 45) return `45+${minuteInPeriod - 45}'`;
  if (period === 2 && minuteInPeriod > 45) return `90+${minuteInPeriod - 45}'`;
  return `${official}'`;
}

export function clockText(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
