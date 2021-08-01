import coreData from "../data/expanded/core-en_us/en_us/data/globals-en_us.json";
import set1Data from "../data/expanded/set1-lite-en_us/en_us/data/set1-en_us.json";
import set2Data from "../data/expanded/set2-lite-en_us/en_us/data/set2-en_us.json";
import set3Data from "../data/expanded/set3-lite-en_us/en_us/data/set3-en_us.json";
import set4Data from "../data/expanded/set4-lite-en_us/en_us/data/set4-en_us.json";

const ALL_CARDS = [...set1Data, ...set2Data, ...set3Data, ...set4Data];
const CARDS_BY_REGION = ALL_CARDS.reduce((acc, card) => {
  if (!acc.has(card.regionRef)) {
    acc.set(card.regionRef, []);
  }
  acc.get(card.regionRef)!.push(card);

  return acc;
}, new Map<string, any[]>());

export function getAllKnownKeywordsNames(): string[] {
  return coreData.keywords.map((kw) => kw.name);
}

export function getAllCards(): any[] {
  return ALL_CARDS;
}

export function getCardsByRegion(): Map<string, any[]> {
  return CARDS_BY_REGION;
}
