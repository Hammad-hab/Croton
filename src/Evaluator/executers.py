from std import std
from typesd import throwsException, find_closest, throwsErrors, Object, Function, UnRestrictedObject # type: ignore
from typing import Callable

# @throwsException("{msg}")
@throwsErrors("Unresolvable Reference to a function {name}. Did you instead mean {alternative}?", "{name} does not implement CR__CALL (it is not a function)")
def executeFunction(throw, object, *args, **kwargs):
    name = object["name"]
    if name in std:
        if "CR__CALL" not in dir(std[name]):
            throw(1, name=name)
        else:
            
            return std[name].CR__CALL # type: ignore
    else:
        throw(0, name=name, alternative=find_closest(name, list(std.keys()), 5))
    ...
    

@throwsException("Unresolvable Identifier {identifier_name}. Did you instead mean {alternative}?")
def resolveIdentifier(throw, object, *args, **kwargs):
    name = object["name"]
    if name in std:
        return std[name]
    else:
        throw(identifier_name=name, alternative=find_closest(name, list(std.keys()), 5))
    ...

def resolveFunctionDeclaration(object:dict, evaluateFunction:Callable,  *args, **kwargs):
    name = object['name']
    
    def fn(*args): 
        for arg in args:
            nameArg = f"Arg{args.index(arg)}"
            if isinstance(arg, Object):
                arg.en_override= False
                std[nameArg] = arg
        return evaluateFunction(object["contents"], True)
    
    func_binding = Function(name)
    fn.__name__ = name
    func_binding.__pyimplementation__(fn)
    std[name] = func_binding
    
    return func_binding
    ...

@throwsErrors(
    "Cannot assign to {name} as it an alias (override is not allowed!)\n\tTo Enable override, try declaring the {name} with the assignment operator",
    "Cannot assign an alias to a variable without modification!"
)
def resolveVariableDeclaration(throw, object,  *args, **kwargs):
    name = object["name"]
    # std[name] = object["assignee"]
    if not name in std:
        if not object["value"].en_override: 
            throw(1)
        std[name] = object["value"].CR__ASSIGN()
    elif name in std and std[name].en_override:
        std[name] = object['value'].CR__ASSIGN()
    else:
        throw(0, name=name)
    ...
    
def resolveAccessors(json: dict):
    Accessors: list = json["accessors"]
    BaseAccessor = resolveIdentifier(Accessors.pop(0))
    if isinstance(BaseAccessor, UnRestrictedObject):
        accessors_names = [accessor["name"] for accessor in Accessors]
    
    ...

def BbaseAccessor(BaseAccessor, Accessors):
    BaseAccessor = BaseAccessor
    if isinstance(BaseAccessor, UnRestrictedObject):
        accessors_names = [accessor["name"] for accessor in Accessors]
        return getattr(BaseAccessor, accessors_names[0])
    ...
    
def resolveIfCondition(json):
    if json["condition"].IS_TRUTHY():
         
        ...
    ...