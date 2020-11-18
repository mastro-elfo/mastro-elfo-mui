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

Promise.all([
  execCmd("cat ./CHANGELOG.md | grep '^#' | head -n 1 | cut -d 'v' -f 2"),
])
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(([changelog]) => {
    prompt.start();
    prompt.get(
      {
        properties: {
          changelog: {
            description: `Last changelog found is ${changelog}. Ok?`,
            default: "y",
            pattern: /^[yn]/,
          },
        },
      },
      (err, _) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });
