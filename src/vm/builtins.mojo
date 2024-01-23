let CR_RESET = "\033[0m"

let CR_BLACK = "\033[30m"
let CR_RED = "\033[31m"
let CR_GREEN = "\033[32m"
let CR_YELLOW = "\033[33m"
let CR_BLUE = "\033[34m"
let CR_MAGENTA = "\033[35m"
let CR_CYAN = "\033[36m"
let CR_WHITE = "\033[37m"

let CR_BRIGHT_BLACK = "\033[301m"
let CR_BRIGHT_RED = "\033[311m"
let CR_BRIGHT_GREEN = "\033[321m"
let CR_BRIGHT_YELLOW = "\033[331m"
let CR_BRIGHT_BLUE = "\033[341m"
let CR_BRIGHT_MAGENTA = "\033[351m"
let CR_BRIGHT_CYAN = "\033[361m"
let CR_BRIGHT_WHITE = "\033[371m"
let CR_BG_BLACK = "\033[40m"
let CR_BG_RED = "\033[41m"
let CR_BG_GREEN = "\033[42m"
let CR_BG_YELLOW = "\033[43m"
let CR_BG_BLUE = "\033[44m"
let CR_BG_MAGENTA = "\033[45m"
let CR_BG_CYAN = "\033[46m"
let CR_BG_WHITE = "\033[47m"
let CR_BG_BRIGHT_BLACK = "\033[401m"
let CR_BG_BRIGHT_RED = "\033[411m"
let CR_BG_BRIGHT_GREEN = "\033[421m"
let CR_BG_BRIGHT_YELLOW = "\033[431m"
let CR_BG_BRIGHT_BLUE = "\033[441m"
let CR_BG_BRIGHT_MAGENTA = "\033[451m"
let CR_BG_BRIGHT_CYAN = "\033[461m"
let CR_BG_BRIGHT_WHITE = "\033[471m"


struct CrotonByteParser:
    var raw_contents: String
    var file_name: String
    var exeutionOptwise: DynamicVector[String]
    fn __init__(inout self, borrowed file_name: String) raises:
        self.file_name = file_name
        let __file = open(file_name, "r")
        self.raw_contents = __file.read()
        self.exeutionOptwise = self.raw_contents.split("\n\n")
        self.executeOptcodes(0)
        
    
    fn executeOptcodes(inout self, index: Int) raises:
        let codes: DynamicVector[String] = self.exeutionOptwise[index].split("\n")
        for indx in range(codes.__len__()):
            var code: DynamicVector[String] = codes[indx].split(":")
            code[0] = code[0].strip()
            code[1] = code[1].strip()
            print(code[0])
            ...
