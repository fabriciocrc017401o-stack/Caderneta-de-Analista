import { Match, EventType } from './types';
export const countEvents = (match: Match, type: EventType, side?: 'home' | 'away') =>
  match.events.filter(e => e.type === type && (!side || e.side === side)).length;
export const score = (match: Match) => ({ home: countEvents(match, 'Gol', 'home'), away: countEvents(match, 'Gol', 'away') });
