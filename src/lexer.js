const { Exception } = require("./exceptionUtility");
function tokenize(string = "") {
  // if (";" in string) {
  //    string = string.replaceAll(";", "\n")
  // }
  const tk = [];
  string = string += "\n";
  let cursor = 0;
  while (cursor < string.length) {
    const character = string[cursor];
    if (!character.trim()) {
      cursor += 1;
      continue;
    }

    if (character === "#") {
      let inde = cursor;
      let character = string[(cursor += 1)];
      let content = "";
      while (character != "#" && character != "\n") {
        if (cursor >= 10000) {
          return new Exception(
            inde,
            `Comment is either too long or unterminated`
          ).throw();
        }
        character = string[cursor];
        content += character;
        cursor += 1;
      }
      continue;
    }
    if (character === "<") {
      let character = string[(cursor += 1)];
      let content = "";
      while (character != ">") {
        character = string[cursor];
        if (character === ">") {
          cursor += 1;
          break;
        }
        content += character;
        cursor += 1;
      }
      const preprocessor = content.split(" ");
      const obj = {
        type: "Preprocesser",
        name: preprocessor[0],
        target: preprocessor[1],
        operation: preprocessor[2],
      };
      tk.push(obj)
      continue;
    }
    if (character.match(/[0-9]|[0-9.0-9]|[\-0-9.0-9]/)) {
      let character = string[cursor];
      let content = "";

      while (
        character &&
        character.trim() &&
        character.match(/[0-9]|[0-9.0-9]|[\-0-9.0-9]/)
      ) {
        character = string[cursor];
        if (character.match(/[0-9]|[0-9.0-9]|[\-0-9.0-9]/)) {
          content += character;
        } else {
          break;
        }
        cursor += 1;
      }

      if (content.match(/[0-9.0-9]/)) {
        content = parseFloat(content);
      } else if (content.match(/[0-9]/)) {
        content = parseInt(content);
      }

      tk.push({
        type: "Numeric",
        value: content,
        position: cursor,
      });
      continue;
    }

    if (
      character === ":" ||
      character === "," ||
      character === "|" ||
      character === "=" ||
      character === "{" ||
      character === "}" ||
      character === ">" ||
      character === "<" ||
      character === "~" || character in ["*", "+", "/", "-"]
    ) {
      tk.push({
        type: "Symbol",
        value: character.trim(),
        position: cursor,
      });
      cursor += 1;
      continue;
    }

    if (character === "(" || character === ")") {
      tk.push({
        type: "Parenthesis",
        value: character.trim(),
        position: cursor,
        isOpening: character === "(",
      });
      cursor += 1;
      continue;
    }

    if (character === "'" || character === '"') {
      let character = string[(cursor += 1)];
      let content = String.raw``;
      while (character != '"') {
        character = string[cursor];
        content += character;
        cursor += 1;
      }
      
      tk.push({
        type: "String",
        value: content.slice(0, content.length - 1),
        position: cursor,
      });
      continue;
    }



    if (character.match(/[A-Za-z]|[A-Z\-a-z0-9]|[A-z_a-z0-9]/)) {
      // Letter
      let character = string[cursor];
      let content = "";

      while (
        character &&
        character.match(/[A-Za-z]|[A-Z\-a-z0-9]|[A-z_a-z0-9]/) &&
        character.trim()
      ) {
        character = string[cursor];
        if (character.match(/[A-Za-z]|[A-Z\-a-z0-9]|[A-z_a-z0-9]/)) {
          content += character;
        } else {
          break;
        }
        cursor += 1;
      }

      tk.push({
        type: "Name",
        value: content,
        position: cursor,
      });
      continue;
    }

    return new Exception(
      cursor,
      `Undefined token ${character} at ${cursor}:${character.length}`
    ).throw();
  }
  return tk;
}

module.exports = {
  tokenize,
};
