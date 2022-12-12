import ejs from "ejs";
import fs from "fs";

export default config => {
    const indexTemplate = fs.readFileSync("./template/index.ejs");

    const code = ejs.render(indexTemplate.toString(), {
        middleware: config.middleware,
    });

    console.log(code);
    return code;
};
