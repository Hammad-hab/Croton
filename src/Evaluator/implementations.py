from typesd import Object, Function, throwsException, Number, String # type: ignore
from sys import stdout
import ctypes as c
from typing import Callable

def implementFunction(function) -> Function:
    """
    implementFunction takes in a pythonFunction and constructs a valid
    Croton Function Object which can be executed by the Evaluator
    """
    impl = Function(function.__name__) # Define a function whose name is the same as the python function to which it is bound
    impl.__pyimplementation__(function) # Calling the __pyimplementation__ function to specify the python implementation
    return impl # returning the Function Object
    ...

@throwsException("Object does not implement CR__STDOUT method. println function does not know what to do with it.")
def println(throw, *objs:Object):
    try:
        for obj in objs:
            
            obj = str(obj.CR__STDOUT())
            
            stdout.write(obj)
        stdout.write("\n")
        stdout.flush()
    except Exception as e:
        # raise
        throw()

def add(s1:Number, s2:Number):
    return Number(s1.value + s2.value) # type: ignore

def subtract(s1:Number, s2:Number):
    return Number(s1.value - s2.value) # type: ignore

def mul(s1:Number, s2:Number):
    return Number(s1.value * s2.value) # type: ignore

def div(s1:Number, s2:Number):
    return Number(s1.value / s2.value) # type: ignore


@throwsException("String cannot be unescaped as it is {vproblem}")
def usafe(throw: Callable, string:String) -> None | String:
    if string.value == Object.NA or string.value == Object.Null: 
        throw(vproblem="NA" if string.value == Object.NA else "Null")
    elif string.value and len(string.value) == 0:
        throw(vproblem="of length 0")
        
    value : str  = string.value # type: ignore 
    string.value =value.encode("utf-8").decode('unicode_escape')
    return string


def cfn_import(file, target):
    shared_library = c.CDLL(file.value)  # Replace with the actual path to your shared library
    shared_library.crExports.restype = c.POINTER(c.c_char_p)
    targetfn = getattr(shared_library, target.value)
    fn = Function(target.value)
    fn.__pyimplementation__(lambda *x : targetfn(*[y.value for y in x]))
    return fn
    ...
    

impl: dict[str, Function] = {
    "println":implementFunction(println),
    "printr": implementFunction(print),
    "add": implementFunction(add),
    "subtract": implementFunction(subtract),
    "mul": implementFunction(mul),
    "div": implementFunction(div),
    "usafe": implementFunction(usafe),
    "cfn_import": implementFunction(cfn_import)
}

def autoConstructSTDFromImplementations(std: dict[str, Object]):
    for key, value in impl.items():
        std[key] = value
        

