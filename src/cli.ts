import chalk from "chalk";
import { Command } from "commander";
import * as actions from "./actions";
import { getAllKnownKeywordsNames } from "./data";

export function runCli() {
  const program = new Command();
  program.version("1.0.0").name("loranalyzer");

  program
    .command("cards-with-keyword")
    .description("Shows how many cards of each region have the given keyword")
    .argument("<keyword>", "Keyword we want to search for")
    .action((keyword: string) => {
      const validKeywords = getAllKnownKeywordsNames();
      if (
        !validKeywords
          .map((kw) => kw.toLowerCase())
          .includes(keyword.toLowerCase())
      ) {
        console.error(chalk.red("The provided keyword is not valid!"));
        console.error(chalk.yellow("Valid keywords are:"));
        console.error(chalk.white(validKeywords.join(" ")));
      } else {
        const cardsWithKeywordByRegion =
          actions.getCardsWithKeywordByRegion(keyword);

        const sorted = [...cardsWithKeywordByRegion.entries()].sort(
          (a, b) => b[1] - a[1]
        );

        for (const [region, count] of sorted) {
          console.log(chalk.green(region + ": ") + chalk.blue(count));
        }
      }
    });

  program.parse();
}
