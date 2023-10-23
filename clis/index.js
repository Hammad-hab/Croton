#!/usr/local/bin/node
let { argv } = require("process");
const { SpawnFileBasedExecuter } = require("../src/index");
argv = argv.slice(2, argv.length);
const file = argv[0];

  if (file) {
    let showExecutionTime = SpawnFileBasedExecuter(file);
    if (showExecutionTime)
      console.log("Execution Time: ", showExecutionTime.toFixed(3), "ms");
  } else {
    console.log(
      "Error, source file not specified.\nSyntax:\n\tcrotonc [file_name]"
    );
  }
  

// "/Users/hammad/.bun/bin/bun"