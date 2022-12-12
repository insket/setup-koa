import ejs from "ejs";
import fs from "fs";

export default config => {
    const indexTemplate = fs.readFileSync("./template/package.ejs");

    const code = ejs.render(indexTemplate.toString(), {
        middleware: config.middleware,
        packageName: config.packageName,
    });

    console.log(code);
    return code;
};
