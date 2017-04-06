
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
var _mid =1;
var idxarr = [2,1,9]

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
			self._mid =0;
			this.times++;

			idx = picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,move);
			pullback()
		}
	}

	function picchange()
	{
		var value = idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		idxarr.push(value)
		idxarr.shift()
		trace(idxarr)
		return value
	}

	

	function pullback()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,complet) )

	}

	function complet()
	{
	
		trace("mid = ");
	}

}



Laya.class(Roller, "Roller", rollerUI);
