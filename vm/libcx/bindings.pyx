# distutils: language=c++
# distutils: extra_compile_args = -std=c++17 -Wal
from libcpp.string cimport string
from libcpp.any cimport any, any_cast

cdef extern from "main.cc":
    void LOAD_ARG(string arg_value)
    void LOAD_ARG(int arg_value)
    void LOAD_ARG(float arg_value)
    void CLEAR_ARG_HEAP(int id)
    void CLEAR_RET_HEAP(int id)
    void LOAD_RET(string arg_value)
    void LOAD_RET(int arg_value)
    void LOAD_RET(float arg_value)
    int getArgHeapInt(int index)
    float getArgHeapFloat(int index)
    string getArgHeapString(int index)
    int getRetHeapInt(int index)
    float getRetHeapFloat(int index)
    string getRetHeapString(int index)
    string readCrotonFile(string file)

def load_arg(string argument_value):
    LOAD_ARG(argument_value)

def load_arg(int argument_value):
    LOAD_ARG(argument_value)

def load_arg(float argument_value):
    LOAD_ARG(argument_value)

def load_ret(string argument_value):
    LOAD_RET(argument_value)

def load_ret(int argument_value):
    LOAD_RET(argument_value)

def load_ret(float argument_value):
    LOAD_RET(argument_value)

def getArgHeap(int index, str dt):
    if dt == "string":
        return getArgHeapString(index)
    elif dt == "int":
        return getArgHeapInt(index)
    elif dt == "float":
        return getArgHeapFloat(index)

def getRetHeap(int index, str dt):
    if dt == "string":
        return getRetHeapString(index)
    elif dt == "int":
        return getRetHeapInt(index)
    elif dt == "float":
        return getRetHeapFloat(index)
    
def clear_arg_heap(int id):
    CLEAR_ARG_HEAP(id)

def clear_ret_heap(int id):
    CLEAR_RET_HEAP(id)

def readFile(string name):
    return readCrotonFile(name)
