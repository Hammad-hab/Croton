#!/usr/bin/env bash
echo "Installing Croton"
curl -L -o crotonc https://github.com/Hammad-hab/Croton/raw/main/build/crotonc
chmod +x ./crotonc
echo "Successfully installed Croton..."
sudo mv ./croton /usr/local/bin/