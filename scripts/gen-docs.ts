import * as fs from "fs";
import * as path from "path";
import { customElementsManifestToMarkdown } from "@custom-elements-manifest/to-markdown";

import { injectContentBetweenTags } from "./utils";
import * as manifest from "../dist/custom-elements.json";

// ES Module
// https://github.com/nodejs/help/issues/2907
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ignore styles & methods
delete manifest.modules[0].exports;
manifest.modules[0].declarations[0].members = manifest.modules[0].declarations[0].members.filter(
    (member) => member.name !== "styles" && member.kind !== "method"
);

const customManifest = manifest;

const apiMd = customElementsManifestToMarkdown(customManifest, {
  headingOffset: 2,
  private: "hidden",
});

const readmePath = path.resolve(__dirname, "../README.md");
const rawMd = fs.readFileSync(readmePath, "utf-8");
console.log('=========')
console.log(rawMd)
console.log('=========')
console.log('=========')
console.log(apiMd)
console.log('=========')
const mdContent = injectContentBetweenTags("wc-api", rawMd, apiMd);

fs.writeFileSync(readmePath, mdContent);