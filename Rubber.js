class Rubber{
	constructor(x,y)
	{
	var options = {
		'restitution':0.3,
		'friction':5,
		'density':1
	}
	this.body=Bodies.circle(x,y,10, options)
		this.x=x;
		this.y=y;
		this.r=35
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			
			
			strokeWeight(5);
			stroke("black");
			fill("orange");
			ellipseMode(RADIUS);
			
			ellipse(pos.x,pos.y,35,35);

			pop()
	}

}