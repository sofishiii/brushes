export default class Point{
    constructor(args={}){
        this.position = createVector(args.x || 0, args.y || 0);
       this.size = args.size || 30;
       this.opacity = args.opacity || 1;
       this.fill = args.fill || 'rbga(255, 45, 100, 1)';
       this.stroke= args.stroke || 0;
       this.friction = args.friction || 0.5;
      
    }

draw(){
this.update();
  fill(this.fill);
  if(this.stroke){
    stroke(this.stroke);
} else {
        noStroke();
    }
  ellipse(this.position.x, this.position.y, this.size, this.size);
}

update(){
  this.position.x+= (mouseX- this.position.x) * this.friction;
  this.position.y+= (mouseY- this.position.y)* this.friction;
}
}