if [ ! -d "./bin" ]; then
    mkdir bin
fi

node build.js $1
echo "▶️ 运行结果:"
node ./bin/$1.js