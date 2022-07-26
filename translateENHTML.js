#!/usr/bin/env node
//定义相对应的关键字
const JSKey = ["out", 
  "cao", 
  "终端", 
  "输出日志", 
  "变量循环", 
  "整数", 
  "浮点", 
  "变量", 
  "长度", 
  "条件循环", 
  "如果", 
  "如果",
  "常量",
  "让",
  "函数",
  "在",
  "为",
  "抛出",
  "大于",
  "加一",
  "文档类型",
  "超文本标记",
  "头",
  "元",
  "编码设置",
  "名字",
  "视图端口",
  "上下文",
  "宽度",
  "设备",
  "初始比例",
  "标题",
  "主体",
  "一号字体",
  "语言",
  "简体中文",
  "脚本",
  "无脚本"
]
const CNKey = ["console.log",
  "console.log(\"What's up\")", 
  "console", 
  "log", 
  "for", 
  "int", 
  "float", 
  "var", 
  "length", 
  "while", 
  "if\\(", 
  "if \\(",
  "const",
  "let",
  "function",
  " in ",
  " \\= ",
  "throw",
  " \\> ",
  "\\+\\+",
  "DOCTYPE",
  "html",
  "head",
  "meta",
  "charset",
  "name",
  "viewport",
  "content",
  "width",
  "device",
  "initial-scale",
  "title",
  "body",
  "h1",
  "lang",
  "zh\\-cn",
  "script",
  "noscript"
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
const basePath = '';
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
  console.log(`✅ 翻译完成!`);
});