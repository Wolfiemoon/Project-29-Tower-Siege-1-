class blueBlock {
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
    fill(135,206,234);
    rect(pos.x, pos.y, this.width, this.height);
  }
};


























//class Block{
  //  constructor(x, y, width, height, angle, options) {
    //    var options = {
      //      'restitution':0.8,
        //    'friction':1.0,
          //  'density':1.0,
//            isStatic:false                      
        //}
        //this.body = Bodies.rectangle(x, y, width, height, options);
        //this.width = width;
        //this.x=x
        //this.y=y
        //this.height = height;
        //World.add(world, this.body);
      //}
      //display(){
        //var pos =this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        //rectMode(CENTER);
        //fill(135,206,234)
        //rect(pos.x, pos.y, this.width, this.height);
        //pop();
      //}
//}