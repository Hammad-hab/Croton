#define MAX_HEAP_LENGTH 100;
#define SUPRESS_WARNINGS false;
#include <vector>
#include <format>
#include "datatypes.cc"
#include "string_helpers.cc"
using namespace std;

map<string, CrotonBaseObject*> var_heap;
CrotonBaseObject* arg_heap[100];
CrotonObjectVector ret_heap;
FunctionMap std_fn_lib;
CrotonFunctionReference function_space;

CrotonBaseObject* get(string caller, int index) 
{
    if (arg_heap[index] != nullptr && arg_heap[index] != NULL) {
        return arg_heap[index];
    } else {
        raiseCrotonError("Insufficient arguments for function " + caller + ". Error was raised when trying to access argument at stack-index " + to_string(index));
        return NULL;
    };
}

void println() {
    CrotonBaseObject* n0 = get("println", 0);
    if (n0 != nullptr) {
        if (!n0->getType().empty()) {
            cout << n0->cr__repr() << endl;
        } else {
            raiseCrotonError("Function println recived a null/empty pointer");
        }
    }
};


void add() {
    CrotonBaseObject* n0 = get("add", 0);
    CrotonBaseObject* n1 = get("add", 1);
    CrotonNumber* numadded = new CrotonNumber(n0->getValueF() + n1->getValueF());
    ret_heap.push_back(numadded);
}

void subtract() {
    CrotonBaseObject* n0 = get("subtract", 0);
    CrotonBaseObject* n1 = get("subtract", 1);
    CrotonNumber* numadded = new CrotonNumber(n0->getValueF() - n1->getValueF());
    ret_heap.push_back(numadded);
}

void multiply() {
    CrotonBaseObject* n0 = get("mul", 0);
    CrotonBaseObject* n1 = get("mul", 1);
    CrotonNumber* numadded = new CrotonNumber(n0->getValueF() * n1->getValueF());
    ret_heap.push_back(numadded);
}

void divide() {
    CrotonBaseObject* n0 = get("div", 0);
    CrotonBaseObject* n1 = get("div", 1);
    CrotonNumber* numadded = new CrotonNumber(n0->getValueF() / n1->getValueF());
    ret_heap.push_back(numadded);
}

void concat() {
    CrotonBaseObject* n0 = get("concat", 0);
    CrotonBaseObject* n1 = get("concat", 1);
    CrotonString* concated = new CrotonString(n0->getValueS() + n1->getValueS());
    delete n0;
    delete n1;
    ret_heap.push_back(concated);
}

void powr() {
    CrotonBaseObject* n0 = get("pow", 0);
    CrotonBaseObject* n1 = get("pow", 1);
    CrotonNumber* numpow = new CrotonNumber(pow(n0->getValueF(), n1->getValueF()));
    ret_heap.push_back(numpow);
}

void sqrtr() {
    CrotonBaseObject* n0 = get("sqrt", 0);
    CrotonNumber* numsqrt = new CrotonNumber(sqrt(n0->getValueF()));
    ret_heap.push_back(numsqrt);
}

void nthroot() {
    CrotonBaseObject* n0 = get("nthroot", 0);
    CrotonBaseObject* n1 = get("nthroot", 1);
    CrotonNumber* numsqrt = new CrotonNumber(pow(n0->getValueF(), 1.0/n1->getValueF()));
    ret_heap.push_back(numsqrt);
}

void define() {
    CrotonBaseObject* name = get("define_var", 0);
    CrotonBaseObject* value = get("define_var", 1);

    if (name != nullptr && value != nullptr && name != NULL && value != NULL) {
        string key = name->getValueS();
        var_heap[key] = value;
    } else {
        raiseCrotonError("Failed to define variable. Name is nullptr.");
    }
}

void initStandardLibrary() {
    std_fn_lib["println"] = println;
    std_fn_lib["add"] = add;
    std_fn_lib["mul"] = multiply;
    std_fn_lib["div"] = divide;
    std_fn_lib["div"] = divide;
    std_fn_lib["define"] = define;
    std_fn_lib["concat"] = concat;
    std_fn_lib["sqrt"] = sqrtr;
    std_fn_lib["nthroot"] = nthroot;
    std_fn_lib["pow"] = powr;
}

void LOAD_ARG(CrotonString* value, ArgumentPosition position) {
    arg_heap[position] = value;
};

void LOAD_ARG(CrotonNumber* value, ArgumentPosition position) {
    arg_heap[position] = value;
};

void LOAD_IDENTIFIER_ARG(string name, ArgumentPosition position) {
    if (var_heap.count(name) && var_heap[name] != nullptr) {
        arg_heap[position] = var_heap[name];
    } else {
        raiseCrotonError("Argument Loading aborted because of a reference to a non-existent instance in the variable stack (Undefined variable \"" + name + "\")");
    }
}

void CLEAR_ARG_HEAP() {
    if (arg_heap[0] == nullptr || arg_heap[0] == NULL) {
        raiseCrotonWarning("Program Bytecode attempted to clear argument stac despite its being empty. VM is overlooking this instruction to prevent redundant clearing");
    } else {
        int i = 0;
        for (auto obj : arg_heap) {
            arg_heap[i] = nullptr;
            i += 1;
        };
    }
}

void DUMP_VAR(string name) {
    delete var_heap[name];
}

void CLEAR_RET_HEAP() {
    if (ret_heap.empty()) {
        #ifndef SUPRESS_WARNINGS
            raiseCrotonWarning("Program Bytecode attempted to clear return stack despite its being empty.");
        #endif
    } else {
        ret_heap.clear();
    }
}

void MV_ARGS_POS(ArgumentPosition ret_heap_position, ArgumentPosition arg_heap_position) {
    arg_heap[arg_heap_position] = ret_heap[ret_heap_position];
};

void LOAD_FN(string name) {
    auto it = std_fn_lib.find(name);
    if (it != std_fn_lib.end()) {
        function_space = it->second;
    } else {
        raiseCrotonError("Reference to undefined function " + name + " could not be resolved");
    }
}

void CALL_FN() {
    try {
        function_space();
    } catch (...) {
        raiseCrotonError("Function execution failed due to a memory bug, please report this error if it was raised by the VM's internals.");
    }
}

void executeCrotonBytecode(string optcode_operand) {
    vector<string> bytecode = split(optcode_operand, ':');
    string optcode = bytecode[0];
    string operand = bytecode[1];
    if (optcode == "LOAD_ARG") {
        vector<string> args = split(operand, ',');
        if (contains(args[0], "\"")) {
            CrotonString* str = new CrotonString(removePrefixAndSuffix(args[0], "\"", "\""));
            LOAD_ARG(str, stoi(args[1]));
        } else {
            CrotonNumber* num = new CrotonNumber(stof(args[0]));
            LOAD_ARG(num, stoi(args[1]));
        }
    }
    if (optcode == "LOAD_IDENTIFIER_ARG") {
        vector<string> args = split(operand, ',');
        string name = args[0];
        LOAD_IDENTIFIER_ARG(name, stoi(args[1]));
    }

    if (optcode == "LOAD_FN") LOAD_FN(operand);
    if (optcode == "CALL_FN") CALL_FN();
    if (optcode == "CLEAR_ARG_HEAP") CLEAR_ARG_HEAP();
    if (optcode == "CLEAR_RET_HEAP") CLEAR_RET_HEAP();
    if (optcode == "DUMP_VAR") DUMP_VAR(operand);
    if (optcode == "MV_ARGS_POS") {
        vector<string> args = split(operand, ',');
        ArgumentPosition ret_heap_position = stoi(args[0]);
        ArgumentPosition arg_heap_position = stoi(args[1]);
        MV_ARGS_POS(ret_heap_position, arg_heap_position);
    }
}

string readFile(const std::string& filename) {
    // Open the file in binary mode
    std::ifstream inputFile(filename, std::ios::binary);

    // Check if the file is open
    if (!inputFile.is_open()) {
        std::cerr << "Error opening the file: " << filename << std::endl;
        return "";
    }

    // Read the contents of the file into a string
    std::string fileContents((std::istreambuf_iterator<char>(inputFile)),
                             std::istreambuf_iterator<char>());

    // Close the file
    inputFile.close();

    return fileContents;
}

void executeCrotonFile(string fl_name) {
    file_name = fl_name;
    vector<string> contents = split(readFile(fl_name), '\n');
    for (string bt : contents) {
        if (bt == "") continue;
        executeCrotonBytecode(bt);
    }
}