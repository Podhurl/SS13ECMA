function getBalancedAir(inAirOne,inAirTwo)
{
	var newAir = {
		o2:(inAirOne.o2 + inAirTwo.o2) / 2,
		n2:(inAirOne.n2 + inAirTwo.n2) / 2,
		co2:(inAirOne.co2 + inAirTwo.co2) / 2,
		};
		return newAir;

}
var airBlock = {
	tradeAir : function()
	{

		if (this.x-1 >= 0) 
		{
			var newAir = getBalancedAir(this.air,airArray[this.x-1][this.y].air);
			this.setAir(newAir);
			airArray[this.x-1][this.y].setAir(newAir);
		}
		if (this.x+1 < 100) 
		{
			var newAir = getBalancedAir(this.air,airArray[this.x+1][this.y].air);
			this.setAir(newAir);
			airArray[this.x+1][this.y].setAir(newAir);
		}
		if (this.y-1 >= 0) 
		{
			var newAir = getBalancedAir(this.air,airArray[this.x][this.y-1].air);
			this.setAir(newAir);
			airArray[this.x][this.y-1].setAir(newAir);
		}
		if (this.y+1 < 100) 
		{
			var newAir = getBalancedAir(this.air,airArray[this.x][this.y+1].air);
			this.setAir(newAir);
			airArray[this.x][this.y+1].setAir(newAir);
		}
	},
	setAir:function(inAir)
	{
		this.air = inAir;
	}
};
var voidBlock =
{
	tradeAir:function()
	{
		//We don't actually trade air. So this function exists merely to prevent an error!:P
	},
	setAir: function(inAir)
	{
		//We're a vacuum! We're going to consume the air. But do nothing with it. Omnomnom.
		this.air.o2 = 0; //We're going to make sure it stays at zero though. There must never EVER be air in here!
	}
}

var airArray = new Array(100);
for (var i = 0; i < 100; i++)
{
	airArray[i] = new Array(100);
	for (var i2 = 0; i2 < 100; i2++)
	{
		airArray[i][i2] = Object.create(airBlock);
		airArray[i][i2].x= i;
		airArray[i][i2].y = i2;
		airArray[i][i2].blockType = 1;//1 is a simulated block!		
		airArray[i][i2].air = {o2:Math.floor((Math.random() * 255)+1),n2:0,co2:0};
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