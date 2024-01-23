from sys import argv as get_argv
import builtins as bu
fn main() raises:
    # Since Mojo's error handling is broken we're checking if the arguments haven't been provided
    let argv = get_argv()
    if len(argv) <= 1:
        # Exit the program if there are insufficient arguments
        print("\033[31mInsufficent arguments. Bytecode file not provided\033[0m")
        return

    let file = argv[1]
    let parser = bu.CrotonByteParser(file)
    ...