module.exports = function VariableDeclarationParse(token, tokens_array, index, parse) {
  const generic = tokens_array.indexOf(token)
    const NTOKEN = tokens_array[generic + 1]
    let length = 0
    if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "=") {
        const name = token.value;
        let targets = tokens_array.slice(generic + 2, tokens_array.length);
        const assignee = parse(targets);
        if (assignee[0].type === "Function") length += assignee[0].length;
        length += 3

        return {
          type: "VariableDeclaration",
          name,
          assignee: assignee[0],
          length
        }
      }
      return false
}