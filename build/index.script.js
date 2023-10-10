#!/Users/hammad/.bun/bin/bun
let { argv } = require("process");
const { SpawnFileBasedExecuter } = require("./index.build");
argv = argv.slice(2, argv.length);
const t0 = performance.now();
const file = argv[0];

  if (file) {
    SpawnFileBasedExecuter(file);
    const t1 = performance.now();
    console.log("Execution Time: ", (t1 - t0).toFixed(3), "ms");
  } else {
    console.log(
      "Error, source file not specified.\nSyntax:\n\tcrotonc [file_name]"
    );
  }
  
