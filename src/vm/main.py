import time

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Measure execution time
start_time = time.time()
fib_result = fibonacci(30)  # Change the argument to the desired Fibonacci number you want to calculate
end_time = time.time()

# Output the result and execution time
print("Fibonacci result:", fib_result)
print("Execution time:", end_time - start_time, "seconds")
