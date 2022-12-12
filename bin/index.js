#!/user/bin/env node

import fs from "fs";
import { execa } from "execa";
import { question } from "./question/index.js";
import createIndexTemplate from "./createIndexTemplate.js";
import createPackageTemplate from "./createPackageTemplate.js";

const inputConfig = {
    packageName: question.packageName,
    port: question.port,
    middleware: {
        static: question.middleware.indexOf("static") !== -1,
        router: question.middleware.indexOf("router") !== -1,
    },
};

// 创建文件夹
fs.mkdirSync(getRootPath());

// 创建index.js
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(inputConfig));

// 创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(inputConfig));

// 安装依赖
execa("npm i", {
    cwd: getRootPath(),
    stdio: [2, 2, 2],
});

function getRootPath() {
    return `./${question.packageName}`;
}
