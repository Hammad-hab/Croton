cd ~/Downloads
mkdir CrotonTemp
cd CrotonTemp
curl -LJO https://github.com/Hammad-hab/Croton/archive/refs/heads/main.zip
unzip Croton-main.zip
curl -fsSL https://bun.sh/install | bash
cd Croton-main
bun link