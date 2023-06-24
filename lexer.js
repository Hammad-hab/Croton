function tokenize(string="") {
    const tk = []
    let cursor = 0

    while (cursor < (string.length - 1)) {
        const character = string[cursor].trim()
        if (!character.trim()) { 
            cursor += 1
            continue
        }
        if (character === "'" || character === '"') {
            let character = string[cursor += 1]
            let content = ""
            while (character != '"') {
                character = string[cursor]
                content += character
                cursor += 1
            }
            cursor += 1
            tk.push({
                type: "String",
                value: content.slice(0, content.length - 1).trim(),
                position: cursor
             })
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
                value: content.trim(),
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
                type: "Name",
                value: content.trim(),
                position : cursor
            })
            continue
        }    

        if (character === ":") {
            cursor += 1
            continue
        }
        
        
        // throw`Undefined token ${character} at ${cursor}:${character.length}`
    }
    return tk
}

module.exports = {
    tokenize
}