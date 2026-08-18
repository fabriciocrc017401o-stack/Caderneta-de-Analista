export type TeamSide = 'home' | 'away';
export type MatchPeriod = 1 | 2 | 3 | 4 | 5;
export type EventType = 'Gol' | 'Cartão amarelo' | 'Cartão vermelho' | 'Falta' | 'Escanteio' | 'Impedimento' | 'Finalização' | 'Finalização no gol' | 'Defesa' | 'Substituição' | 'Pênalti' | 'Pênalti convertido' | 'Pênalti perdido' | 'VAR' | 'Lesão' | 'Anotação';
export type MatchEvent = { id: string; type: EventType; side: TeamSide; player: string; playerIn?: string; minute: number; second?: number; period: MatchPeriod; note: string; fieldZone?: string; decision?: 'Correta' | 'Incorreta' | 'Duvidosa' | 'Revisada pelo VAR' };
export type Match = {
  id: string; competition: string; date: string; time: string; venue: string;
  homeTeam: string; awayTeam: string; homePlayers: string[]; awayPlayers: string[];
  analyst?: string; referee?: string; assistant1?: string; assistant2?: string;
  fourthOfficial?: string; varReferee?: string; avar?: string; refereeAssessor?: string;
  matchDelegate?: string; homeCoach?: string; awayCoach?: string;
  firstHalfAdded?: string; secondHalfAdded?: string; extraFirstAdded?: string; extraSecondAdded?: string;
  refereeRating?: string; assistant1Rating?: string; assistant2Rating?: string; varRating?: string;
  finalAnalysis?: string;
  livePeriod?: MatchPeriod; elapsedSeconds?: number; timerStartedAt?: number; timerRunning?: boolean;
  periodStartedAt?: Partial<Record<MatchPeriod, string>>;
  events: MatchEvent[]; createdAt: string; finished: boolean;
};
