import { runCli } from "./cli";
import { downloadDataIfNecessary } from "./downloader";

downloadDataIfNecessary().then(() => {
    runCli();
});
