import { writeFileSync } from "fs";
import { join } from "path";

const nojekyllPath = join("dist", ".nojekyll");
writeFileSync(nojekyllPath, "");

console.log("Added nojekyll file.");