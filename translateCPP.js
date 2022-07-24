#! /usr/bin/env node
//定义相对应的关键字
const CNKey = [
    "包括",
    "使用",
    "命名空间",
    "整数",
    "主函数",
    "控制台输出",
    "换行",
    "变量循环",
    "如果",
    "若",
    "否则",
    "浮点",
    "小数",
    "标准库",
    "返回",
    "获取输入"
]
const JSKey = [
    "include",
    "using",
    "namespace",
    "int",
    "main",
    "std::cout",
    "std::endl",
    "for",
    "if",
    "else if",
    "else",
    "float",
    "double",
    "iostream",
    "return",
    "std::cin"
]

//解释的关键字
const CNWordMap = {};
const wordcaoMap = {};

//将关键字转换成JS代码
for (let i = 0; i < JSKey.length; i++) {
  CNWordMap[CNKey[i]] = JSKey[i];
  wordcaoMap[JSKey[i]] = CNKey[i];
}

//将转换后的代码写入一个js里
const fs = require('fs');
const basePath = './src';
const binPath = './bin'
const filepath = `${process.argv[2]}`;
//读取和写入文件
let fileData = fs.readFileSync(filepath, 'utf-8');
//替换关键字
for (const CNcode in CNWordMap) {
  fileData = fileData.replace(new RegExp(CNcode, 'g'), CNWordMap[CNcode]);
}
//输出编译后的JS文件
fs.writeFile(`${process.argv[3]}`, fileData, { 'flag': 'w' }, err => {
  if (err) {
    throw err;
  }
  console.log(`✅ CPP翻译完成!`);
});