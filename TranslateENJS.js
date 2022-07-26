#! /usr/bin/env node
//定义相对应的关键字
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
    "if",
    "const",
    "let",
    "function",
    " in ",
    " \\= ",
    "throw",
    " \\> ",
    "\\+\\+",
    "else",
    "global",
    "typeof",
    "try",
    "catch",
    "return",
    "\\&\\&",
    "\\!",
    "switch",
    "case",
    "\\|\\|",
    "import",
    "from",
    "html",
    "head",
    "meta",
    "charset",
    "name",
    "viewport",
    "content",
    "width",
    "device-width",
    "initial-scale",
    "title",
    "body",
    "h1",
    "lang",
    "zh\\-cn",
    "click",
    "export"
]
const JSKey = ["调试输出",
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
    "常量",
    "让",
    "函数",
    " 在 ",
    "为",
    "抛出",
    "大于",
    "加一",
    "否则",
    "全局",
    "类型是",
    "尝试",
    "捕获到",
    "返回",
    "与",
    "不",
    "主分支",
    "子分支",
    "或",
    "导入",
    "从",
    "超文本标记",
    "头",
    "元",
    "编码设置",
    "名字",
    "视图端口",
    "上下文",
    "宽度",
    "设备宽",
    "初始比例",
    "标题",
    "主体",
    "一号字体",
    "语言",
    "简体中文",
    "点击",
    "输出出口"
]

const fs = require('fs');

for (let i = 4; i < process.argv.length; i++) {
    if (process.argv[i] == "vue") {
        let VueFile = fs.readFileSync("./lib/vue.json");
        let VueJSON = JSON.parse(VueFile);
        for (let KeyWord in VueJSON.ENKeyWord) {
            CNKey.push(VueJSON.ENKeyWord[KeyWord]);
        }
        for (let KeyWord in VueJSON.CNKeyWord) {
            JSKey.push(VueJSON.CNKeyWord[KeyWord]);
        }
    }
    if (process.argv[i] == "vfc") {
        let VFCFile = fs.readFileSync("./lib/VFC.json");
        let VFCJSON = JSON.parse(VFCFile);
        for (let KeyWord in VFCJSON.ENKeyWord) {
            CNKey.push(VFCJSON.ENKeyWord[KeyWord]);
        }
        for (let KeyWord in VFCJSON.CNKeyWord) {
            JSKey.push(VFCJSON.CNKeyWord[KeyWord]);
        }
    }
}
//解释的关键字
const CNWordMap = {};
const wordcaoMap = {};

//将关键字转换成JS代码
for (let i = 0; i < JSKey.length; i++) {
    CNWordMap[CNKey[i]] = JSKey[i];
    wordcaoMap[JSKey[i]] = CNKey[i];
}

//将转换后的代码写入一个js里

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
    console.log(`✅ 翻译完成!`);
});