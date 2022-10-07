// build.js -- build script

const { exec } = require("child_process");
const { Console } = require("console");
// const package = require("./../package.json");

const em_command = "em++ -o ./out/script.js ./src/program.cpp --bind";

// console.log("The path for the C++ file: " + package.config.cpp_path);

// is emscripten installed?
exec("em++ --version", (error, stdout, stderr) => {
    if (error) {
        console.log("Emscripten not installed or activated.");
    }

    else {
        exec(em_command, compilation_output);
    }
});

function compilation_output(error, stdout, stderr) {
    if (error) {
        console.log("There was an error during compilation.");
    }

    if (stderr) {
        console.log(stderr);
    }

    console.log(stdout);
}