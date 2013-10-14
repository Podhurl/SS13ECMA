var airBlock = {
	tradeAir : function()
	{
		if ((this.x-1 >= 0) && (airArray[this.x - 1][this.y].o2 != this.o2))
		{
			var airTotal = airArray[this.x -1][this.y].o2 + this.o2; //Basically to fall to equilibrium, they trade air.
			airArray[this.x - 1][this.y].o2 = airTotal/2;
			this.o2 = airTotal / 2;
		}
		if ((this.y-1 >= 0) && (airArray[this.x][this.y-1].o2 != this.o2))
		{
			var airTotal = airArray[this.x][this.y -1].o2 + this.o2; //Basically to fall to equilibrium, they trade air.
			airArray[this.x][this.y -1].o2 = airTotal/2;
			this.o2 = airTotal / 2;
		}
		if ((this.x+1 < 100) && (airArray[this.x+1][this.y].o2 != this.o2))
		{
			var airTotal = airArray[this.x +1][this.y].o2 + this.o2; //Basically to fall to equilibrium, they trade air.
			airArray[this.x +1][this.y].o2 = airTotal/2;
			this.o2 = airTotal / 2;
		}
		if ((this.y + 1 < 100) && (airArray[this.x][this.y +1].o2 != this.o2))
		{
			var airTotal = airArray[this.x][this.y+1].o2 + this.o2; //Basically to fall to equilibrium, they trade air.
			airArray[this.x][this.y +1].o2 = airTotal/2;
			this.o2 = airTotal / 2;
		}
	}
};

var airArray = new Array(100);
for (var i = 0; i < 100; i++)
{
	airArray[i] = new Array(100);
	for (var i2 = 0; i2 < 100; i2++)
	{
		airArray[i][i2] = Object.create(airBlock);
		airArray[i][i2].x= i;
		airArray[i][i2].y = i2;
		airArray[i][i2].o2 = Math.floor((Math.random() * 10) + 1);
	}
}


setInterval(function(){
	for (var i = 0; i < 100; i++)
	{
		for (var i2 = 0; i2 < 100; i2++)
		{
			airArray[i][i2].tradeAir();
		}
	}
	console.log("Air loop done.");
},20);