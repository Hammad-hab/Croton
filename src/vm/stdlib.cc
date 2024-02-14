#define MAX_HEAP_LENGTH 100;
#define SUPRESS_WARNINGS false;
#include <vector>
#include <format>
#include "datatypes.cc"
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

void inputln() {
    string value = "";
    CrotonBaseObject* prompt = get("inputln", 0);
    cout << prompt->getValueS();
    cin >> value;
    CrotonString* croton_V = new CrotonString(value);
    ret_heap.push_back(croton_V);
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


void typef() {
    CrotonBaseObject* object = get("typeof", 0);
    CrotonString* type = new CrotonString(object->getType());
    ret_heap.push_back(type);
}


void concat() {
    CrotonBaseObject* string0 = get("concat", 0);
    CrotonBaseObject* string1 = get("concat",1);
    CrotonString* concaten = new CrotonString(string0->getValueS() + string1->getValueS());
    ret_heap.push_back(concaten);
}

void deleteObjectUSafe() {
    CrotonBaseObject* object = get("deleteObjectUSafe", 0);
    delete object;
    object = nullptr;
}

void gt() {
    CrotonBaseObject* object = get("gt", 0);
    CrotonBaseObject* object_cmp = get("gt", 1);

    if (object->getType() != "Number" ) {
        raiseCrotonError("Unexpected argument type \"" + object->getType() + "\" to statically defined standard library function gt");
    } else if (object_cmp->getType() != "Number") {
        raiseCrotonError("Unexpected argument type \"" + object_cmp->getType() + "\" to statically defined standard library function gt");
    }

    CrotonBoolean* value = new CrotonBoolean(object->getValueF() > object_cmp->getValueF());
    ret_heap.push_back(value);
}

void lt() {
    CrotonBaseObject* object = get("lt", 0);
    CrotonBaseObject* object_cmp = get("lt", 1);

    if (object->getType() != "Number" ) {
        raiseCrotonError("Unexpected argument type \"" + object->getType() + "\" to statically defined standard library function lt");
    } else if (object_cmp->getType() != "Number") {
        raiseCrotonError("Unexpected argument type \"" + object_cmp->getType() + "\" to statically defined standard library function lt");
    }
    CrotonBoolean* value = new CrotonBoolean(object->getValueF() < object_cmp->getValueF());
    ret_heap.push_back(value);
}

void gte() {
    CrotonBaseObject* object = get("gt", 0);
    CrotonBaseObject* object_cmp = get("gt", 1);

    if (object->getType() != "Number" ) {
        raiseCrotonError("Unexpected argument type \"" + object->getType() + "\" to statically defined standard library function gt");
    } else if (object_cmp->getType() != "Number") {
        raiseCrotonError("Unexpected argument type \"" + object_cmp->getType() + "\" to statically defined standard library function gt");
    }

    CrotonBoolean* value = new CrotonBoolean(object->getValueF() >= object_cmp->getValueF());
    ret_heap.push_back(value);
}

void lte() {
    CrotonBaseObject* object = get("gt", 0);
    CrotonBaseObject* object_cmp = get("gt", 1);

    if (object->getType() != "Number" ) {
        raiseCrotonError("Unexpected argument type \"" + object->getType() + "\" to statically defined standard library function gt");
    } else if (object_cmp->getType() != "Number") {
        raiseCrotonError("Unexpected argument type \"" + object_cmp->getType() + "\" to statically defined standard library function gt");
    }

    CrotonBoolean* value = new CrotonBoolean(object->getValueF() <= object_cmp->getValueF());
    ret_heap.push_back(value);
}

void eq() {
    CrotonBaseObject* object = get("gt", 0);
    CrotonBaseObject* object_cmp = get("gt", 1);
    if (object->getType() == "String") {
        CrotonBoolean* value = new CrotonBoolean(object->getValueF() == object_cmp->getValueF());
        ret_heap.push_back(value);  
    }
}