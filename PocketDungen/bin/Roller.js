
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
var _model = model.getInstance();

// var Roller1 = function()
function Roller()
{
	var self = this
	Roller.super(this);

	var _mid =1;
	var _times = 8

	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]

	})();

	Roller.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}



 	Roller.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller.prototype.complet = function()
	{
		trace("Roller mid= " +self._mid);
	
	}
}

function Roller1()
{
	var self = this
	Roller1.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller1.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller1.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller1.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller1.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller1.prototype.complet = function()
	{
		
	}
}

function Roller2()
{
	var self = this
	Roller2.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller2.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller2.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller2.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller2.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller2.prototype.complet = function()
	{
		
	}
}

function Roller3()
{
	var self = this
	Roller3.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller3.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller3.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller3.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller3.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller3.prototype.complet = function()
	{
		
	}
}

function Roller4()
{
	var self = this
	Roller4.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller4.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller4.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller4.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller4.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller4.prototype.complet = function()
	{
		
	}
}

function Roller5()
{
	var self = this
	Roller5.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller5.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller5.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller5.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller5.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller5.prototype.complet = function()
	{
		
	}
}

function Roller6()
{
	var self = this
	Roller6.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller6.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller6.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller6.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller6.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller6.prototype.complet = function()
	{
		
	}
}

function Roller7()
{
	var self = this
	Roller7.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller7.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller7.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller7.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller7.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller7.prototype.complet = function()
	{
		
	}
}

function Roller8()
{
	var self = this
	Roller8.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller8.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller8.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller8.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller8.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller8.prototype.complet = function()
	{
		
	}
}

function Roller9()
{
	var self = this
	Roller9.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller9.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller9.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller9.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller9.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller9.prototype.complet = function()
	{
		
	}
}

function Roller10()
{
	var self = this
	Roller10.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller10.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller10.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller10.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller10.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller10.prototype.complet = function()
	{
		
	}
}

function Roller11()
{
	var self = this
	Roller11.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller11.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller11.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller11.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller11.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller11.prototype.complet = function()
	{
		
	}
}

function Roller12()
{
	var self = this
	Roller12.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller12.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller12.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller12.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller12.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller12.prototype.complet = function()
	{
		
	}
}

function Roller13()
{
	var self = this
	Roller13.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

	Roller13.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller13.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( this.times ==8)
		{
			Timer.clear(this,this.move);
			this.pullback()
		}
	}

    Roller13.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller13.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller13.prototype.complet = function()
	{
		
	}
}

function Roller14()
{
	var self = this
	Roller14.super(this);
	var _mid =1;
	var _times = 8;
	

	(function()
	{
		//建構式
		self.idxarr = [2,1,9]
	})();

Roller14.prototype.shift = function ()
	{
		this.times = 0;
	//	_tween.to(self.pre,{y:200},1000,Laya.Ease.backOut,new Handler(this,complet) )
		Timer.loop(_speed,this,this.move)
	}

 	Roller14.prototype.move = function ()
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

			idx = this.picchange()
			self.next.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.current.y >141)
		{
			self.current.y = self.next.y - _heigh;
			self._mid =2;
			this.times++;
			idx = this.picchange()
			self.current.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		if( self.pre.y >141)
		{
			self.pre.y = self.current.y - _heigh;
			self._mid =1;
			this.times++;
			idx = this.picchange()
			self.pre.source =  Laya.loader.getRes("res/loading/"+idx+".jpg");
		}

		// if( this.times ==8)
		// {
		// 	Timer.clear(this,this.move);
		// 	this.pullback()
		// }
	}

    Roller14.prototype.picchange = function()
	{
		var value = self.idxarr[2]
		value = ( value -1 ) 
		if( value ==0 ) value =9 
		self.idxarr.push(value)
		self.idxarr.shift()
		//trace(idxarr)
		return value
	}

	Roller14.prototype.pullback = function()
	{
		//find -140 0 140
		var pulldis =0
		if( self._mid ==0)  pulldis = self.current.y;
		if( self._mid ==1)  pulldis = self.next.y;
		if( self._mid ==2)  pulldis = self.pre.y;
		trace("mid = " +self._mid);
		trace("pullids = " +pulldis);
		_tween.to(self.current,{y:self.current.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.pre,{y:self.pre.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
		_tween.to(self.next,{y:self.next.y-pulldis},500,Laya.Ease.backOut,new Handler(this,this.complet) )
	}

	Roller14.prototype.complet = function()
	{
		
	}

	Roller14.prototype.stop = function(mid)
	{
			Timer.clear(this,this.move);
			this.pullback()
			
			if( self._mid ==0)  self.current.source =  Laya.loader.getRes("res/loading/"+mid+".jpg");
			if( self._mid ==1)  self.next.source =  Laya.loader.getRes("res/loading/"+mid+".jpg");
			if( self._mid ==2)  self.pre.source =  Laya.loader.getRes("res/loading/"+mid+".jpg");

			_model.rollercomplet.dispatch(14);
	}
	
}

function Foo()
{
	(function()
	{
		//建構式
		//self.idxarr = [2,1,9]
	})();
	Foo.prototype.shift = function ()
	{
	}
}

function Roller15()
{
	var self = this
	Roller15.super(this);
	var _mid =1;
	var _times = 8
	_model = model.getInstance();

	(function()
	{
		//建構式

		self.idxarr = [2,1,9]
	})();
}

Roller15.prototype = Foo.prototype



 //Roller15.prototype = Roller14.__proto__


Laya.class(Roller1, "Roller1", rollerUI);
Laya.class(Roller2, "Roller2", rollerUI);
Laya.class(Roller3, "Roller3", rollerUI);
Laya.class(Roller4, "Roller4", rollerUI);
Laya.class(Roller5, "Roller5", rollerUI);
Laya.class(Roller6, "Roller6", rollerUI);
Laya.class(Roller7, "Roller7", rollerUI);
Laya.class(Roller8, "Roller8", rollerUI);
Laya.class(Roller9, "Roller9", rollerUI);
Laya.class(Roller10, "Roller10", rollerUI);
Laya.class(Roller11, "Roller11", rollerUI);
Laya.class(Roller12, "Roller12", rollerUI);
Laya.class(Roller13, "Roller13", rollerUI);
Laya.class(Roller14, "Roller14", rollerUI);
Laya.class(Roller15, "Roller15", rollerUI);
Laya.class(Roller, "Roller", rollerUI);
