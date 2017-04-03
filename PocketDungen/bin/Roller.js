
var Event = Laya.Event;
var _tween = Laya.Tween;
var _ease = Laya.Ease;
var Handler = Laya.Handler;
var Timer = Laya.timer;
var _model;

var _width = 140
var _heigh = 140
var _movedis = 10
var _speed = 10

var _times = 8

function Roller()
{
	var self = this
	Roller.super(this);
	
	_model = model.getInstance();

Roller.prototype.shift = function ()
{
	this.times = 0;
//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
	Timer.loop(_speed,this,move)
}
   
    function move()
	{
		self.pre.y +=_movedis;
		self.current.y +=_movedis;
		self.next.y +=_movedis;

		//超出下邊界,上提
		if( self.next.y >141)
		{
			self.next.y = self.pre.y - _heigh;
			this.times++;
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			this.times++;
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			this.times++;
		}

		if( this.times ==8)
		{
			Timer.clear(this,move);
		}
	}


}



Laya.class(Roller, "Roller", rollerUI);
