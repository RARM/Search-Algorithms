#include <iostream>
// #include <emscripten.h>
#include <emscripten/val.h>

// class Graph {

// }

void set_canvas_size() {
    // Get elements from the document.
    emscripten::val toolbar = emscripten::val::global("document").call<emscripten::val>("getElementById", std::string("toolbar"));
    emscripten::val canvas = emscripten::val::global("document").call<emscripten::val>("getElementById", std::string("graph-area"));
    emscripten::val footer = emscripten::val::global("document").call<emscripten::val>("getElementsByTagName", std::string("footer"))[0];

    // Set the canvas size.
    int canvas_height = emscripten::val::global("window")["innerHeight"].as<int>()
                      - toolbar["offsetHeight"].as<int>()
                      - footer["offsetHeight"].as<int>();
    int window_width = emscripten::val::global("window")["innerWidth"].as<int>();

    canvas.set("height", emscripten::val(canvas_height));
    canvas.set("width", emscripten::val(window_width));

    // Changing CSS styles.
    canvas["style"].as<emscripten::val>().set("height", emscripten::val(std::to_string(canvas_height) + "px"));
    canvas["style"].as<emscripten::val>().set("width", std::to_string(window_width) + "px");
}

int main(void) {
    // Setup routines.
    set_canvas_size();
    
    return 0;
}