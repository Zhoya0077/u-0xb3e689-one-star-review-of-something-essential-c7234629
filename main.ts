import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. Sleep takes a third of my life, offers no refund for the nightmares, and still wakes me up tired, as if that were my fault.";
// Single-line deadpan review, 133 characters: well under the 160 gate.
// No trailing newline is written, so entry.txt is exactly this text.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
