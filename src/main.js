import Point from './point1.js';


const TOTAL_POINTS = 10;
let points = [];

window.setup = (event) => {
  for (let i = 1; i < TOTAL_POINTS; i++) {
    points.push(new Point({
      
      fill: 'rgba (100, 150, 200, 3)',
      
      size: 100 - i *10, 
      
      
      friction: i * 0.1


    }));
  
  }
   
    createCanvas(windowWidth, windowHeight);
}
window.draw = (event) => {
    background(0, 10);
    for (let i = 0; i < points.length; i++) {
        points[i].draw();
       
    }
    
}
window.resized = (event) => {
    resizeCanvas(windowWidth, windowHeight);
    background('black');
}