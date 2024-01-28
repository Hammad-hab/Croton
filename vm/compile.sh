cythonize bindings.pyx --inplace
rm -rf ./build
rm -rf ./bindings.so
mv ./bindings.cpython-311-darwin.so ./bindings.so
rm -rf bindings.cpp