import { PlayingCardName, PlayingCardSuit } from '@models/PlayingCard';
import { ALL_UNO_COLORS, ALL_UNO_VALUES } from '@models/UnoCard';
import { generateRandomPlayingCard, generateRandomUnoCard } from './generate-card';

describe('generateRandomPlayingCard', () => {
  it('should generate a random card', () => {
    const randomCard = generateRandomPlayingCard();
    const uuidRegExp = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    expect(Object.values(PlayingCardName)).toContain(randomCard.name);
    expect(Object.values(PlayingCardSuit)).toContain(randomCard.suit);
    expect(randomCard.id).toMatch(uuidRegExp);
  });
});

describe('generateRandomUnoCard', () => {
  it('should generate a random card', () => {
    const randomCard = generateRandomUnoCard();
    const uuidRegExp = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    expect(ALL_UNO_COLORS).toContain(randomCard.color);
    expect(ALL_UNO_VALUES).toContain(randomCard.value);
    expect(randomCard.id).toMatch(uuidRegExp);
  });
});
