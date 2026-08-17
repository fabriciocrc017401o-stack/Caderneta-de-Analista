export type TeamSide = 'home' | 'away';
export type MatchPeriod = 1 | 2 | 3 | 4 | 5;
export type EventType = 'Gol' | 'Cartão amarelo' | 'Cartão vermelho' | 'Falta' | 'Escanteio' | 'Impedimento' | 'Finalização' | 'Finalização no gol' | 'Defesa' | 'Substituição' | 'Pênalti' | 'Pênalti convertido' | 'Pênalti perdido' | 'VAR' | 'Lesão' | 'Anotação';
export type MatchEvent = { id: string; type: EventType; side: TeamSide; player: string; minute: number; period: MatchPeriod; note: string };
export type Match = {
  id: string; competition: string; date: string; time: string; venue: string;
  homeTeam: string; awayTeam: string; homePlayers: string[]; awayPlayers: string[];
  events: MatchEvent[]; createdAt: string; finished: boolean;
};
