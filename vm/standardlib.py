from typing import Any
from errors import throwError
from math import inf as Infinite

def defun(value:str, name:str):
    if '"' in name:
        name = name.replace('"', "")
    std[name] = value
    

class CrotonFunctionWrapper:
    
    @classmethod
    def from_function(klass, function, max_args):
        instance = klass(function.__name__, max_args)
        instance.setImplementation(function)
        return instance
    
    def __init__(self, name, n_args) -> None:
        self.name = name
        self.max_args = n_args
        self.__implementation = None
        pass
    

    def setImplementation(self, pyfunc):
        self.__implementation = pyfunc
        
    def __call__(self, *args: Any, **kwds: Any) -> Any:
        if (len(args) > self.max_args):
            throwError("CrotonFunctionWrapper", "Warning: TOO many arguments have been provided. This can cause unexpected behavior.\n\tForcefully exiting Program.")
            exit(-1)
            ...
        return self.__implementation(*args, **kwds)

class CrotonSTDict(dict):
    def __getitem__(self, __key: Any) -> Any:
        try:
            res = super().__getitem__(__key)  
            return res
        except:
            throwError("CrotonFunctionWrapper", f"Failed to find any variable identifier with the alias {__key}.\n\tForcefully exiting Program.")
            exit(-1)
            

std = {
    "println": CrotonFunctionWrapper.from_function(print, 2),
    "define": CrotonFunctionWrapper.from_function(defun, 2),
    "add": CrotonFunctionWrapper.from_function(sum, Infinite)
}