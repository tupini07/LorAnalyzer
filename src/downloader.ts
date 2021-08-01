import chalk from "chalk";
import decompress from "decompress";
import download from "download";
import * as fs from "fs";

const DATA_DIR = "data";
const RAW_DATA_DIR = `${DATA_DIR}/raw/`;
const EXPANDED_DATA_DIR = `${DATA_DIR}/expanded/`;

export async function downloadDataIfNecessary() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }

  const downloadRaw = async (url: string) => {
    const zipFileName = url.split("/").slice(-1)[0];
    const noExtenstionName = zipFileName.split(".")[0];

    const printProgress = (descriptor: string) =>
      console.log(
        chalk.green(`${descriptor}: `) + chalk.white(noExtenstionName)
      );

    const outputRawFilePath = RAW_DATA_DIR + zipFileName;
    const outputExpandedPath = EXPANDED_DATA_DIR + noExtenstionName;

    let doneAnything = false;

    if (!fs.existsSync(outputRawFilePath)) {
      doneAnything = true;
      printProgress("💾 Downloading");
      await download(url, RAW_DATA_DIR);
    }

    if (!fs.existsSync(outputExpandedPath)) {
      doneAnything = true;
      printProgress("📁 Starting decompression");
      decompress(outputRawFilePath, outputExpandedPath);
    }

    if (doneAnything) {
      printProgress("✔ Done");
    }
  };

  await Promise.all(
    [
      "https://dd.b.pvp.net/latest/core-en_us.zip",
      "https://dd.b.pvp.net/latest/set1-lite-en_us.zip",
      "https://dd.b.pvp.net/latest/set2-lite-en_us.zip",
      "https://dd.b.pvp.net/latest/set3-lite-en_us.zip",
      "https://dd.b.pvp.net/latest/set4-lite-en_us.zip",
    ].map(downloadRaw)
  );
}
