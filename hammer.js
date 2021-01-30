class Hammer {

    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100,20, options);
        this.width = 100;
        this.height = 20;
        
        World.add(world, this.body);
      }
      display(){
          this.body.position.x= mouseX;
          this.body.position.y= mouseY; 
        var pos =this.body.position;
        var angle = this.body.angle;
        push();                       
        translate(pos.x, pos.y);
        rotate(angle);           
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };
    

