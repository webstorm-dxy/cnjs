if [ ! -d "./bin" ]; then
    mkdir bin
fi

node build.js $1
echo "已保存到 ./bin 中"