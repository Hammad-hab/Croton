#define MAX_HEAP_LENGTH 100;
#define SUPRESS_WARNINGS false;
#include <vector>
#include <format>
#include "datatypes.cc"
#include "string_helpers.cc"
#include "stdlib.cc"
#include "array_helpers.cc"

using namespace std;




void initStandardLibrary() {
    std_fn_lib["println"] = println;
    std_fn_lib["add"] = add;
    std_fn_lib["mul"] = multiply;
    std_fn_lib["div"] = divide;
    std_fn_lib["div"] = divide;
    std_fn_lib["define"] = define;
    std_fn_lib["sqrt"] = sqrtr;
    std_fn_lib["nthroot"] = nthroot;
    std_fn_lib["pow"] = powr;
    std_fn_lib["typeof"] = typef;
    std_fn_lib["concat"] = concat;
    std_fn_lib["deleteObjectUSafe"] = deleteObjectUSafe;
    std_fn_lib["gt"] = gt;
    std_fn_lib["lt"] = lt;
    std_fn_lib["gte"] = gte;
    std_fn_lib["lte"] = lte;
    std_fn_lib["inputln"] = inputln;
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
        raiseCrotonWarning("Program Bytecode attempted to clear argument stack despite its being empty. VM is overlooking this instruction to prevent redundant clearing");
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
    if (it != std_fn_lib.end() && std_fn_lib[name] != nullptr && std_fn_lib.count(name) > 0) {
        function_space = std_fn_lib[name];
        if (function_space == nullptr || function_space == NULL) {
            raiseCrotonError("Reference to undefined function " + name + " could not be resolved");
        }
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

void executeCrotonMul(string raw_contents) {
    vector<string> contents = split(raw_contents, '\n');
    for (int i = 0; i < contents.size(); i++)
    {
        string bt = contents[i];
        vector<string> bytecode = split(bt, ':');
        string optcode = bytecode[0];
        string operand = bytecode[1];

        if (bt == "") continue;
        if (optcode == "IF_GOTO") {
            vector<string> args = split(operand, ',');
            int jump_to = stoi(args[0]);
            CrotonBaseObject* vccheck = arg_heap[0];
            if (vccheck->cr__isfalsy()) {

               i = jump_to;
               continue;
            } else {
              continue;
            }
        }

        if (optcode == "DF_FN") {
          int index = indexOf(contents, "ED_FN:"+operand);
        
          string fn_contents = join_array(slice_vec(contents, i + 1, index), '\n');
          static CrotonFunction* fn = new CrotonFunction(operand);
          fn->setSource(fn_contents);
          var_heap[operand] = fn;
          std_fn_lib[operand] = []() {fn->cr_call();};
          i = index ;
          continue;
        }

        if (optcode == "GOTO") {
            vector<string> args = split(operand, ',');
            int jump_to = stoi(args[0]);

            i = jump_to;
            continue;
        }
        executeCrotonBytecode(bt);
    }
}

void executeCrotonFile(string fl_name) {
    file_name = fl_name;
    string raw_contents = readFile(fl_name);
    executeCrotonMul(raw_contents);
}


void CrotonFunction::cr_call() {
    int index = 0;
    for (CrotonBaseObject* arg : arg_heap) {
        var_heap["Arg"+to_string(index)] = arg;
        index += 1;
    }

    executeCrotonMul(rsource);
}

