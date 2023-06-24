const {tokenize} = require("./lexer")
function parser(tk_array) {
    for (const token of tk_array) {
        if (token.value === "Begin") {
            let rArray = tk_array.slice(
                tk_array.indexOf(token) + 1,
                tk_array.length
            )
                console.log(rArray)
        //     let Between = []
        //     for (const token of rArray) {
        //         if (token.value === "End") break
        //         Between.push(token)
        //     }
        //     // return Between
        }
        // console.log(token)
    }
}
const tokens = tokenize(`Begin Program1: 
"Hello"
End`)
console.log(tokens)

const parsed = parser(tokens)