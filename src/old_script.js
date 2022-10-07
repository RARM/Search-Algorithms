/**
 * This script was created before thinking of using WebAssembly instead.
 * Some "program.cpp" file structure is based on this.
 * 
 * This file is kept as a reference. It will be removed later on. 
 */

class Graph {
    /**
     * 
     * @param {HTMLElement} id - 
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.graph_data = new Graph_Rep();
    }

    /**
     * Creates the 
     */
    generate() {
        // code here...
    }
}

class Graph_Rep {
    constructor() {
        this.clear();
    }

    clear() {
        this.vertices = new Array();
        this.edges = new Array();
    }
}

/**
 * 
 */
function setup() {
    let toolbar = document.getElementById('toolbar');
    let canvas = document.getElementById('graph-area');
    let footer = document.getElementsByTagName('footer')[0];
    
    // Setting the canvas size.
    canvas.height = window.innerHeight - toolbar.offsetHeight - footer.offsetHeight;
    canvas.width = window.innerWidth;
    
    // Setting canvas CSS size.
    canvas.style.height = canvas.height + 'px';

    // Setting up data.
    let graph = new Graph(canvas);
    
    // Setting up listeners.

}

/**
 * 
 */
function generate_graph() {
    
}

// Initial execution.
setup();