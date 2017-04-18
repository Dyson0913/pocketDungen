
var Event = Laya.Event;
var Handler = Laya.Handler;

var _tween = Laya.Tween;
var _ease = Laya.Ease;
var Timer = Laya.timer;

//symbol para
var _viewblock = 3
var _rollerNum = 5
var _symbolNum = 10
var _width = 140
var _heigh = 140


var _movedis = 30
var _speed = 10
var _model = model.getInstance();


function mod(n)
{
	if( n == _symbolNum ) return 1
	return n
}

function Roller()
{
	var self = this
	Roller.super(this);
	var _stop = false;

	(function()
	{
		//建構式
		var idx = Math.floor((Math.random() * 9) + 1)
		var sec = mod(idx+1)
		var thrid = mod(sec+1)
		var four = mod(thrid+1)
		var five = mod(four+1)
		self.idxarr = [idx,sec,thrid,four,five]
		self.rollerArr = [0,1,2,3,4]

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			self["icon_"+ i ].source =Laya.loader.getRes("res/game/"+idx+".jpg");
		}
		
		//trace("self.idxarr "+ self.idxarr)
		//trace("self.roller "+self.rollerArr)
		self.result = [];

	})();

	Roller.prototype.shift = function ()
	{
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		self._stop = false;
		Timer.loop(_speed,this,this.move)
	}

 	Roller.prototype.move = function ()
	{
		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.rollerArr[i]
			self["icon_"+ i ].y +=_movedis;
		}

		//超出下邊界,上提
		if ( self["icon_"+ self.rollerArr[(_rollerNum-1)]].y > (_heigh * (_viewblock)) )
 		{
			 var y = self["icon_"+self.rollerArr[0]].y
   		 	self["icon_"+ self.rollerArr[(_rollerNum-1)]].y = y - _heigh
			
			idx = this.picchange()

			//最後幾個換成結果
			if( self._stop == true)
			{
				Timer.clear(this,this.move);
				this.pullback()
			}
		}

	}

    Roller.prototype.picchange = function()
	{
		//roller idx
		var value1 = self.rollerArr[_rollerNum-1] 
		self.rollerArr.pop()
		self.rollerArr.unshift(value1)

		//pic idx
		var value = self.idxarr[0]
		value =  value -1
		if( value == 1) value = _symbolNum-1
		self.idxarr.pop()
		self.idxarr.unshift(value)
		return value
	}

	Roller.prototype.pullback = function()
	{
		var pulldis =0
		//剛往上提,所以一定是超出_viewblock-1的邊界
		pulldis = (_heigh * (_viewblock-1)) - self["icon_"+ self.rollerArr[(_rollerNum-1)]].y;

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			_tween.to(self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]],{y:self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]].y+pulldis},100,Laya.Ease.backOut)
		}

		//換圖
		var n = self.result.length
		for( i = 0; i < n ; i++)
		{
			var idx = self.result[i]
			
			self["icon_"+ self.rollerArr[(_rollerNum-(i+1))] ].source = Laya.loader.getRes("res/game/"+idx+".jpg");
		}

		_model.rollercomplet.dispatch(0);
	}

	Roller.prototype.stop = function(resultarr)
	{
		  self._stop = true
		  self.result = resultarr;
	}
}

function Roller1()
{
	var self = this
	Roller1.super(this);
	var _stop = false;

	(function()
	{
		//建構式
		var idx = Math.floor((Math.random() * 9) + 1)
		var sec = mod(idx+1)
		var thrid = mod(sec+1)
		var four = mod(thrid+1)
		var five = mod(four+1)
		self.idxarr = [idx,sec,thrid,four,five]
		self.rollerArr = [0,1,2,3,4]

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			self["icon_"+ i ].source =Laya.loader.getRes("res/game/"+idx+".jpg");
		}
		
		//trace("self.idxarr "+ self.idxarr)
		//trace("self.roller "+self.rollerArr)
		self.result = [];

	})();

	Roller1.prototype.shift = function ()
	{
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		self._stop = false;
		Timer.loop(_speed,this,this.move)
	}

 	Roller1.prototype.move = function ()
	{
		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.rollerArr[i]
			self["icon_"+ i ].y +=_movedis;
		}

		//超出下邊界,上提
		if ( self["icon_"+ self.rollerArr[(_rollerNum-1)]].y > (_heigh * (_viewblock)) )
 		{
			 var y = self["icon_"+self.rollerArr[0]].y
   		 	self["icon_"+ self.rollerArr[(_rollerNum-1)]].y = y - _heigh
			
			idx = this.picchange()

			//最後幾個換成結果
			if( self._stop == true)
			{
				Timer.clear(this,this.move);
				this.pullback()
			}
		}

	}

    Roller1.prototype.picchange = function()
	{
		//roller idx
		var value1 = self.rollerArr[_rollerNum-1] 
		self.rollerArr.pop()
		self.rollerArr.unshift(value1)

		//pic idx
		var value = self.idxarr[0]
		value =  value -1
		if( value == 1) value = _symbolNum-1
		self.idxarr.pop()
		self.idxarr.unshift(value)
		return value
	}

	Roller1.prototype.pullback = function()
	{
		var pulldis =0
		//剛往上提,所以一定是超出_viewblock-1的邊界
		pulldis = (_heigh * (_viewblock-1)) - self["icon_"+ self.rollerArr[(_rollerNum-1)]].y;

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			_tween.to(self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]],{y:self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]].y+pulldis},100,Laya.Ease.backOut)
		}

		//換圖
		var n = self.result.length
		for( i = 0; i < n ; i++)
		{
			var idx = self.result[i]
			
			self["icon_"+ self.rollerArr[(_rollerNum-(i+1))] ].source = Laya.loader.getRes("res/game/"+idx+".jpg");
		}

		_model.rollercomplet.dispatch(1);
	}

	Roller1.prototype.stop = function(resultarr)
	{
		  self._stop = true
		  self.result = resultarr;
	}
}

function Roller2()
{
	var self = this
	Roller2.super(this);
	var _stop = false;

	(function()
	{
		//建構式
		var idx = Math.floor((Math.random() * 9) + 1)
		var sec = mod(idx+1)
		var thrid = mod(sec+1)
		var four = mod(thrid+1)
		var five = mod(four+1)
		self.idxarr = [idx,sec,thrid,four,five]
		self.rollerArr = [0,1,2,3,4]

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			self["icon_"+ i ].source =Laya.loader.getRes("res/game/"+idx+".jpg");
		}
		
		//trace("self.idxarr "+ self.idxarr)
		//trace("self.roller "+self.rollerArr)
		self.result = [];

	})();

	Roller2.prototype.shift = function ()
	{
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		self._stop = false;
		Timer.loop(_speed,this,this.move)
	}

 	Roller2.prototype.move = function ()
	{
		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.rollerArr[i]
			self["icon_"+ i ].y +=_movedis;
		}

		//超出下邊界,上提
		if ( self["icon_"+ self.rollerArr[(_rollerNum-1)]].y > (_heigh * (_viewblock)) )
 		{
			 var y = self["icon_"+self.rollerArr[0]].y
   		 	self["icon_"+ self.rollerArr[(_rollerNum-1)]].y = y - _heigh
			
			idx = this.picchange()

			//最後幾個換成結果
			if( self._stop == true)
			{
				Timer.clear(this,this.move);
				this.pullback()
			}
		}

	}

    Roller2.prototype.picchange = function()
	{
		//roller idx
		var value1 = self.rollerArr[_rollerNum-1] 
		self.rollerArr.pop()
		self.rollerArr.unshift(value1)

		//pic idx
		var value = self.idxarr[0]
		value =  value -1
		if( value == 1) value = _symbolNum-1
		self.idxarr.pop()
		self.idxarr.unshift(value)
		return value
	}

	Roller2.prototype.pullback = function()
	{
		var pulldis =0
		//剛往上提,所以一定是超出_viewblock-1的邊界
		pulldis = (_heigh * (_viewblock-1)) - self["icon_"+ self.rollerArr[(_rollerNum-1)]].y;

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			_tween.to(self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]],{y:self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]].y+pulldis},100,Laya.Ease.backOut)
		}

		//換圖
		var n = self.result.length
		for( i = 0; i < n ; i++)
		{
			var idx = self.result[i]
			
			self["icon_"+ self.rollerArr[(_rollerNum-(i+1))] ].source = Laya.loader.getRes("res/game/"+idx+".jpg");
		}

		_model.rollercomplet.dispatch(2);
	}

	Roller2.prototype.stop = function(resultarr)
	{
		  self._stop = true
		  self.result = resultarr;
	}
}

function Roller3()
{
	var self = this
	Roller3.super(this);
	var _stop = false;

	(function()
	{
		//建構式
		var idx = Math.floor((Math.random() * 9) + 1)
		var sec = mod(idx+1)
		var thrid = mod(sec+1)
		var four = mod(thrid+1)
		var five = mod(four+1)
		self.idxarr = [idx,sec,thrid,four,five]
		self.rollerArr = [0,1,2,3,4]

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			self["icon_"+ i ].source =Laya.loader.getRes("res/game/"+idx+".jpg");
		}
		
		//trace("self.idxarr "+ self.idxarr)
		//trace("self.roller "+self.rollerArr)
		self.result = [];

	})();

	Roller3.prototype.shift = function ()
	{
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		self._stop = false;
		Timer.loop(_speed,this,this.move)
	}

 	Roller3.prototype.move = function ()
	{
		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.rollerArr[i]
			self["icon_"+ i ].y +=_movedis;
		}

		//超出下邊界,上提
		if ( self["icon_"+ self.rollerArr[(_rollerNum-1)]].y > (_heigh * (_viewblock)) )
 		{
			 var y = self["icon_"+self.rollerArr[0]].y
   		 	self["icon_"+ self.rollerArr[(_rollerNum-1)]].y = y - _heigh
			
			idx = this.picchange()

			//最後幾個換成結果
			if( self._stop == true)
			{
				Timer.clear(this,this.move);
				this.pullback()
			}
		}

	}

    Roller3.prototype.picchange = function()
	{
		//roller idx
		var value1 = self.rollerArr[_rollerNum-1] 
		self.rollerArr.pop()
		self.rollerArr.unshift(value1)

		//pic idx
		var value = self.idxarr[0]
		value =  value -1
		if( value == 1) value = _symbolNum-1
		self.idxarr.pop()
		self.idxarr.unshift(value)
		return value
	}

	Roller3.prototype.pullback = function()
	{
		var pulldis =0
		//剛往上提,所以一定是超出_viewblock-1的邊界
		pulldis = (_heigh * (_viewblock-1)) - self["icon_"+ self.rollerArr[(_rollerNum-1)]].y;

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			_tween.to(self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]],{y:self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]].y+pulldis},100,Laya.Ease.backOut)
		}

		//換圖
		var n = self.result.length
		for( i = 0; i < n ; i++)
		{
			var idx = self.result[i]
			
			self["icon_"+ self.rollerArr[(_rollerNum-(i+1))] ].source = Laya.loader.getRes("res/game/"+idx+".jpg");
		}

		_model.rollercomplet.dispatch(3);
	}

	Roller3.prototype.stop = function(resultarr)
	{
		  self._stop = true
		  self.result = resultarr;
	}
}

function Roller4()
{
	var self = this
	Roller4.super(this);
	var _stop = false;

	(function()
	{
		//建構式
		var idx = Math.floor((Math.random() * 9) + 1)
		var sec = mod(idx+1)
		var thrid = mod(sec+1)
		var four = mod(thrid+1)
		var five = mod(four+1)
		self.idxarr = [idx,sec,thrid,four,five]
		self.rollerArr = [0,1,2,3,4]

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			self["icon_"+ i ].source =Laya.loader.getRes("res/game/"+idx+".jpg");
		}
		
		//trace("self.idxarr "+ self.idxarr)
		//trace("self.roller "+self.rollerArr)
		self.result = [];

	})();

	Roller4.prototype.shift = function ()
	{
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		self._stop = false;
		Timer.loop(_speed,this,this.move)
	}

 	Roller4.prototype.move = function ()
	{
		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.rollerArr[i]
			self["icon_"+ i ].y +=_movedis;
		}

		//超出下邊界,上提
		if ( self["icon_"+ self.rollerArr[(_rollerNum-1)]].y > (_heigh * (_viewblock)) )
 		{
			 var y = self["icon_"+self.rollerArr[0]].y
   		 	self["icon_"+ self.rollerArr[(_rollerNum-1)]].y = y - _heigh
			
			idx = this.picchange()

			//最後幾個換成結果
			if( self._stop == true)
			{
				Timer.clear(this,this.move);
				this.pullback()
			}
		}

	}

    Roller4.prototype.picchange = function()
	{
		//roller idx
		var value1 = self.rollerArr[_rollerNum-1] 
		self.rollerArr.pop()
		self.rollerArr.unshift(value1)

		//pic idx
		var value = self.idxarr[0]
		value =  value -1
		if( value == 1) value = _symbolNum-1
		self.idxarr.pop()
		self.idxarr.unshift(value)
		return value
	}

	Roller4.prototype.pullback = function()
	{
		var pulldis =0
		//剛往上提,所以一定是超出_viewblock-1的邊界
		pulldis = (_heigh * (_viewblock-1)) - self["icon_"+ self.rollerArr[(_rollerNum-1)]].y;

		for( i = 0; i < _rollerNum ; i++)
		{
			var idx = self.idxarr[i]
			_tween.to(self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]],{y:self["icon_"+ self.rollerArr[(_rollerNum-(i+1))]].y+pulldis},100,Laya.Ease.backOut)
		}

		//換圖
		var n = self.result.length
		for( i = 0; i < n ; i++)
		{
			var idx = self.result[i]
			
			self["icon_"+ self.rollerArr[(_rollerNum-(i+1))] ].source = Laya.loader.getRes("res/game/"+idx+".jpg");
		}

		_model.rollercomplet.dispatch(4);
	}

	Roller4.prototype.stop = function(resultarr)
	{
		  self._stop = true
		  self.result = resultarr;
	}
}



// function Roller15()
// {
// 	var self = this
// 	Roller1.call(this)
// 	var _mid =1;
// 	var _times = 8
// 	_model = model.getInstance();

// 	(function()
// 	{
// 		//建構式
// 		//self.prototype = new Foo();
// 		self.idxarr = [2,1,9]
// 	})();
// }

// Roller15.prototype = new  Roller1()
Laya.class(Roller1, "Roller1", rollerUI);

// (function(_super){
  
//   function Roller15()
//   {
// 	  Roller15.__super.call(this)
//   }

//   	(function()
//  	{
//  		//建構式
//  		//self.prototype = new Foo();
//  		self.idxarr = [2,1,9]
//  	})();

// Laya.class(Roller15, "Roller15", _super);
// })(Roller1);




Laya.class(Roller2, "Roller2", rollerUI);
Laya.class(Roller3, "Roller3", rollerUI);
Laya.class(Roller4, "Roller4", rollerUI);


Laya.class(Roller, "Roller", rollerUI);
