class aquaBlock {
    constructor(x,y,width,height,options) {
      var options = {
          'restitution':0.8,
          //isStatic: true,
          'friction':1.0,
          'density':1.0
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x=x
      this.y=y
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(63,224,208);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  