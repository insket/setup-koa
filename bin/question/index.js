import inquirer from "inquirer";

export const question = await inquirer.prompt([
    {
        type: "input",
        name: "packageName",
        message: "please set you packageName",
        validate(val) {
            if (val) return true;
            return "packageName is required";
        },
    },
    {
        type: "input",
        name: "port",
        default: () => 8080,
        message: "please set you port",
    },
    {
        type: "checkbox",
        name: "middleware",
        choices: [
            {
                name: "koa-static",
            },
            {
                name: "koa-router",
            },
        ],
    },
]);
console.log(question);
