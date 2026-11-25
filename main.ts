import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "When I grabbed the screwdriver too fast, my grandfather, who fixed radios for fifty years, said, 'If you can't say what's broken before you touch it, you don't understand it yet.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
