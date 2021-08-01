import { downloadDataIfNecessary } from "./downloader";

downloadDataIfNecessary().then(() => {
  // we first need to check and download data before actually executing
  // application logic
  const cli = require("./cli");
  cli.runCli();
});
