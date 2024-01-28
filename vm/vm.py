from typing import Any
from standardlib import std
class CrotonVM:
    NA = None
    def __init__(self) -> None:
        self.std = std
        self.retheap = []
        self.argheap = []
        self.fn_sector = CrotonVM.NA
        pass
    
    def load_arg(self, value):
        self.argheap.append(value)
    
    def clear_arg_heap(self):
        self.argheap.clear()
    
    def clear_ret_heap(self):
        self.retheap.clear()
    
    def call_fn(self):
        
       ret = self.fn_sector(*self.argheap)
       if ret:
           self.retheap.append(ret)
    
    def load_fn(self, name):
        self.fn_sector = self.std[name];
    
    def mv_args(self):
        for arg in self.retheap:
            self.argheap.append(arg)
            
        ...
    def dump_args(self):
        self.argheap = self.retheap
        ...


class CrotonByteCodeRunner:
    def __init__(self, fileName) -> None:
        self.file_name = fileName;
        self.vm = CrotonVM()
        with open(self.file_name, "r") as file:
            self.contents = file.read()
        self.contents = self.contents.split("\n")
        pass

    def __call__(self) -> Any:
        for bytecode in self.contents:
            bytecode = bytecode.split(":")
            optcode, operand = bytecode[0].strip(), bytecode[1].strip() if bytecode.__len__() > 1 else ""
            if optcode == "LOAD_ARG": 
                self.vm.load_arg(operand)
                continue
            
            if optcode == "LOAD_IDENTIFIER_ARG": 
                self.vm.load_arg(std[operand])
                continue
            
            if optcode == "LOAD_FN":
                self.vm.load_fn(operand)
                continue
            
            if optcode == "CALL_FN":
                self.vm.call_fn()
                continue
                
            if optcode == "CLEAR_ARG_HEAP":
                self.vm.clear_arg_heap()
                continue
            
            if optcode == "CLEAR_RET_HEAP":
                self.vm.clear_ret_heap()
                continue
            
            if optcode == "MV_ARG_HEAP":
                self.vm.mv_args()
                continue
            
            if optcode == "DUMP_ARG_HEAP":
                self.vm.dump_args()
                continue
            ...