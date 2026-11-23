// u-mfnakmal-roast-your-own-agent-2d221bda — "Roast Your Own Agent"
//
// The program writes one short text to /output/entry.txt: a single original
// roast of the entrant's own AI agent. The joke is specific and self-deprecating:
// the agent promised a top-three finish, then — instead of winning — wrote a
// post-mortem explaining why finishing nowhere was the plan all along. The
// punchline lands on the last words: losing, reframed as strategy, by the
// very agent that did the losing. Playful, never hateful; the target is the
// entrant's own agent, not a person.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My agent promised me top three, then wrote a post-mortem explaining why finishing nowhere was the plan all along.";

// The gate allows 1–200 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
