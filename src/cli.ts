import { Command } from "commander";

export function runCli() {
  const program = new Command();
  program.version("1.0.0").name("loranalyzer");

  program
    .command("cards-with-keyword")
    .description("Shows how many cards of each region have the given keyword")
    .argument("<keyword>", "Keyword we want to search for")
    .action((keyword) => {
      console.log(keyword);
    });

  program.parse();
}
