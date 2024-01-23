from Levenshtein import distance
from math import inf as Infinity
from typing import Callable, Any
from copy import deepcopy
from threading import Thread


styles = {
	'text_colors': {
		'black': '\033[30m',
		'red': '\033[31m',
		'green': '\033[32m',
		'yellow': '\033[33m',
		'blue': '\033[34m',
		'magenta': '\033[35m',
		'cyan': '\033[36m',
		'white': '\033[37m',
		'bright_black': '\033[30;1m',
		'bright_red': '\033[31;1m',
		'bright_green': '\033[32;1m',
		'bright_yellow': '\033[33;1m',
		'bright_blue': '\033[34;1m',
		'bright_magenta': '\033[35;1m',
		'bright_cyan': '\033[36;1m',
		'bright_white': '\033[37;1m',
	},
	'reset': '\033[0m',
	'background_colors': {
		'bg_black': '\033[40m',
		'bg_red': '\033[41m',
		'bg_green': '\033[42m',
		'bg_yellow': '\033[43m',
		'bg_blue': '\033[44m',
		'bg_magenta': '\033[45m',
		'bg_cyan': '\033[46m',
		'bg_white': '\033[47m',
		'bg_bright_black': '\033[40;1m',
		'bg_bright_red': '\033[41;1m',
		'bg_bright_green': '\033[42;1m',
		'bg_bright_yellow': '\033[43;1m',
		'bg_bright_blue': '\033[44;1m',
		'bg_bright_magenta': '\033[45;1m',
		'bg_bright_cyan': '\033[46;1m',
		'bg_bright_white': '\033[47;1m',
	},
}

class Object:
	NA = None
	Null = Infinity

	# cdef str type
	# cdef int en_override
	# cdef declare(object)
	

	def __init__(self) -> None:
		self.type = "Object"
		self.value = None
		self.en_override = 1
		pass

	def CR__ASSIGN(self) -> Any:
		return self 

	def CR__IFALSY(self): 
		return not self.value or self.value == Object.NA or self.value == Object.Null

	def CR__STDOUT(self): return f"CrotonObject={self.value}"
std: dict[str, Object] = {}

class Number(Object):

	def __init__(self, value=Object.NA) -> None:
		super().__init__()
		self.type = 'Number'
		self.value = value

	def CR__IFALSY(self): 
		return not self.value or self.value == Object.NA 
	...

	def CR__STDOUT(self):
		return self.value

class String(Object):


	def __init__(self, value=Object.NA) -> None:
		super().__init__()
		self.type = 'String'
		self.value = value

	def CR__STDOUT(self):
		return self.value

	def CR__IFALSY(self):
		return True if not self.value or len(self.value) <= 0 else False
	...

from copy import deepcopy

class Function(Object):
    def __init__(self, name) -> None:
        super().__init__()
        self.type = "Function"
        self.name = name
        self.value = Object.NA
        self.disclean = False

    def __pyimplementation__(self, func):
        self.__py__ = func

    def clean_snapshot(self, snapshot):
        remkeys = [key for key in std.keys() if key not in snapshot]
        for key in remkeys:
            del std[key]

    def CR__CALL(self, *args, **kwargs):
        snapshot = None;
        if not self.disclean:
            snapshot = deepcopy(std)

        ret = self.__py__(*args, **kwargs)

        if not self.disclean:            
            self.clean_snapshot(snapshot) 
            

        return ret

    def CR__STDOUT(self):
        return 'fn>' + self.name




def throwException(error, caller, **kwargs):
	if ("file" not in kwargs):
		kwargs["file"] = "File"
	print(f"{styles['text_colors']['red']}[CrotonEvaluator << {kwargs['file']}] \n\tFailure at resolver {caller}:\n\t{error}\n\tExited with code -1\n{styles['reset']}".format(**kwargs))
	exit()
	...

def crInternalFailureError(mr_info=""):
	print(f"{styles['text_colors']['red']}[CrotonEvaluator << Interpreter] \n\tInternal Failure{'...' if not mr_info else ': ' + mr_info}\n\tExited with code -1\n{styles['reset']}")


def throwsException(error):
	"""
	    throwsException takes in an error and a function. It passes a "throw" function
	    to the function that has been decorated. The throw is responsible for raising the error
	    that was passes as the parameter of the throwsException decorator.
	"""
	def wrapper(fn):
		ri = lambda **kwargs: throwException(error, fn.__name__, **kwargs)
		def decorator(*args):
			try: 
				return fn(ri, *args)
			except Exception as e:
				crInternalFailureError(f"Py{e!r}")
		decorator.__name__ = fn.__name__
		return decorator
	return wrapper
	...

def throwsErrors(*errors: str):
	def wrapper(fn):
		ri: Callable[[int], dict] = lambda index, **kwargs: throwException(errors[index], fn.__name__, **kwargs)
		def decorator(*args):
			try: 
				return fn(ri, *args)
			except Exception as e:
				crInternalFailureError(f"Py{e!r}")
		decorator.__name__ = fn.__name__
		return decorator
	return wrapper
	...



def find_closest(target, list, mx_dist): 

	closest_dst = mx_dist
	closest_dst_el = ""

	for element in list:
		dist = distance(target,element)
		if dist < closest_dst:
			closest_dst = dist
			closest_dst_el = element

	return closest_dst_el
	...

class UnRestrictedObject(Object):
    ...