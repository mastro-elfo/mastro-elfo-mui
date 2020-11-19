// Pre deploy check list
// * check last changelog
// =============================================================================

const util = require("util");
const exec = util.promisify(require("child_process").exec);
const prompt = require("prompt");

// Get package version
const { version } = require("../package.json");

// Get first changelog
function execCmd(cmd) {
  return exec(cmd).then(({ stdout }) => stdout.trim());
}

function getSchema([changelog]) {
  return [
    {
      name: "changelog",
      description: `Last changelog found is ${changelog}. Ok? [yn]`,
      pattern: /^[yn]/,
      default: "y",
    },
  ];
}

Promise.all([
  execCmd("cat ./CHANGELOG.md | grep '^#' | head -n 1 | cut -d 'v' -f 2"),
])
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then((data) => {
    const schema = getSchema(data);

    prompt.start();
    prompt.get(schema, (err, results) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      // Filter answers
      const checklist = Object.keys(results).filter((a) => results[a] !== "y");
      if (checklist.length > 0) {
        console.warn(`Fix Checklist: ${checklist.join(", ")}`);
        process.exit(1);
      }
      console.log("Checklist complete");
    });
  });
