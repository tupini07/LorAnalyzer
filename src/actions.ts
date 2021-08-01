import * as data from "./data";

export function getCardsWithKeywordByRegion(
  keyword: string
): Map<string, number> {
  const counts = new Map<string, number>();
  const cardsByRegion = data.getCardsByRegion();

  const lcKeyword = keyword.toLowerCase();

  for (const [region, cards] of cardsByRegion.entries()) {
    counts.set(
      region,
      cards.reduce((acc, card) => {
        const cardKeywords: string[] = card.keywords.map((kw: string) =>
          kw.toLowerCase()
        );
        return acc + (cardKeywords.includes(lcKeyword) ? 1 : 0);
      }, 0)
    );
  }

  return counts;
}
