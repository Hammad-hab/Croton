#include "bytecode.cc"
#include<any>
#include<vector>

using namespace std;

int main(int argc, char* argv[]) {
    if (argc < 2)
    {
        cout << "Usage: \n\tcroton <file_name>\n\t<file_name>: the crotonc produced bytecode file with .crocb extension." << endl << endl;
        raiseCrotonError("Bytecode file not provided for execution, program cannot proceed.");
    }
    string file_name = argv[1];
    initStandardLibrary();
    executeCrotonFile(file_name);
    return 0;
}
