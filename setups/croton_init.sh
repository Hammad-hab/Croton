#!/usr/bin/env bash
su
cd ./src/
zip -r ./__build/lib.zip ./lib
cd ../
git add .
git commit -m "Altered Stdlib"
git push -f origin main
rm -rf /usr/local/croton_
sudo python3 setups/setup_libs.py