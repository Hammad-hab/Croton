function tokenize(string="") {
    const tk = []
    let cursor = 0

    while (cursor < (string.length - 1)) {
        const character = string[cursor]
        if (!character.trim()) { 
            cursor += 1
            continue
        }

        if (character.match(/[0-9]/)) {
            let character = string[cursor]
            let content = ""

            while (character && character.trim() && character.match(/[0-9.0-9]/) ) {
                character = string[cursor]
                if (character && character.match(/[0-9.0-9]/))
                 {
                    content += character
                 }
                cursor += 1

             }

             if (content.match(/[0-9.0-9]/)) {
                content = parseFloat(content)
             } else if (content.match(/[0-9.0-9]/)) {
                content = parseInt(content)
             }

             tk.push({
                type: "Number",
                value: content,
                position: cursor
             })
             continue
        }

        if (character.match(/[A-Za-z]/)) {
            // Letter
            let character = string[cursor]
            let content = ""

            while (character && character.match(/[A-Za-z]/) && character.trim()) {
                character = string[cursor]
                if (character)
                 {
                    content += character
                 }
                cursor += 1

             }
    
            tk.push({
                type: "Letter",
                value: content,
                position : cursor
            })
            continue
        }

      
        
    }
    return tk
}

console.log(
tokenize(`
Begin Program1
1241.1333


End`))