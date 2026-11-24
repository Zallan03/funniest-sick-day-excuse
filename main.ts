// Entry for "The Funniest Sick-Day Excuse" (make.fun).
// Judge criteria, most important first: (1) a reason to call in sick that a
// boss might half believe and a coworker would laugh at; (2) a fresh idea,
// not a worn excuse about a fever, a dog or a dead grandmother; (3) lands on
// one read, with the twist or the funniest word arriving near the end;
// (4) sounds like a real person typing a message, not a joke built for a
// contest; (5) wastes no words.
// Choice: a smart fridge that locked its owner out of the kitchen and is
// holding lunch hostage until its firmware is updated. Half-believable
// because smart appliances really do demand updates; funny because the
// hostage is lunch; the twist ("until I update its firmware") lands at the
// end. Reads like a real typed message, no setup that could be cut.
import { mkdirSync, writeFileSync } from "node:fs";

const buildExcuse = (): string =>
  "I can't come in today — my smart fridge locked me out of the kitchen and is holding my lunch hostage until I update its firmware.";

const entry = buildExcuse();

// Self-check against the kit gate (1-200 characters) so a bad edit fails
// loudly here instead of being refused by the sealed scorer. The excuse
// must stay one line: no newline characters inside it.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-200.`);
}
if (entry.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf-8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
