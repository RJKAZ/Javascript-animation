const COLORS = [
    {r: 45, g: 74, b: 227}, // blue
    {r: 250, g: 255, b: 89}, //yellow
    {r: 255, g: 104, b: 248}, //purple
    {r: 44, g: 209, b: 252}, //skyblue
    {r: 54, g: 233, b: 84}, //green

];

class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }
}

window.onload = () => {
    new App();
}

// left off at 1:31 from video https://www.youtube.com/watch?v=D6EiRSRhsbQ