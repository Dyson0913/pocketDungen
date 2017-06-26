
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

var color = ["s","h","d","c"]

function Poker()
{
	var self = this
	Poker.super(this);
	var _idx //n card
	var _val //poker idx in 52
	var _color 
	var _point //poker point
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{
		self.visible = false;
		self["poker"].index = 0;
		self["topPoint"].visible = false
		self["type"].visible = false
		self["stype"].visible = false
		self["head"].visible = false
	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 2 || _model.appearidx(state) == 3 || _model.appearidx(state) == 4)
		{
			var namelist = self.name.split("_")
			self._idx = namelist[1]
			//last one show when need
			if( self._idx  == 2 || self._idx == 5)
			{
				self.visible = false;
				return;
			} 

			self.visible = true;			
		}
		else
		{
			self.visible = false;
			self["poker"].index = 0;
			self["topPoint"].visible = false
			self["type"].visible = false
			self["stype"].visible = false
		    self["head"].visible = false
			
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		//var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)

		//already open
		if( self["poker"].index ==1) return

		var shift = 0		
		var point = str[0] -1
		if ( this.color.indexOf(str[1]) == 0 || this.color.indexOf(str[1]) == 3)  shift = 13

		var value = point + shift

		self._color = this.color.indexOf(str[1]) 
		self._point = point
		self._val = value

		self.flip()
	}

	Poker.prototype.flip = function ()
	{
		self.visible = true;
		_model.playerSound("res/sound/flippoker.mp3")
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		//open
		self["poker"].index = 1;

		self["topPoint"].visible = true
		self["topPoint"].index = self._val

		self["stype"].visible = true
		self["stype"].index = self._color

		if( self._point <=10)
		{
			self["type"].visible = true
			self["type"].index = self._color

			self["head"].visible = false
		}
		else
		{
			self["type"].visible = false
			
			self["head"].visible = true
			self["head"].index = self._point -10
		}

		_tween.to(self["poker"],{scaleX:1},150,Laya.Ease.linearNone,new Handler(this,ani_ok) )
	}

	function ani_ok()
	{

	}
}

function Poker1()
{
	var self = this
	Poker1.super(this);
	var _idx //n card
	var _val //poker idx in 52
	var _color 
	var _point //poker point
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{
		self.visible = false;
		self["poker"].index = 0;
		self["topPoint"].visible = false
		self["type"].visible = false
		self["stype"].visible = false
		self["head"].visible = false
	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 2 || _model.appearidx(state) == 3 || _model.appearidx(state) == 4)
		{
			var namelist = self.name.split("_")
			self._idx = namelist[1]
			//last one show when need
			if( self._idx  == 2 || self._idx == 5)
			{
				self.visible = false;
				return;
			} 

			self.visible = true;			
		}
		else
		{
			self.visible = false;
			self["poker"].index = 0;
			self["topPoint"].visible = false
			self["type"].visible = false
			self["stype"].visible = false
		    self["head"].visible = false
			
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		//var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)

		//already open
		if( self["poker"].index ==1) return

		var shift = 0		
		var point = str[0] -1
		if ( this.color.indexOf(str[1]) == 0 || this.color.indexOf(str[1]) == 3)  shift = 13
				
		var value = point + shift

		self._color = this.color.indexOf(str[1]) 
		self._point = point
		self._val = value

		self.flip()
	}

	Poker1.prototype.flip = function ()
	{
		self.visible = true;
		_model.playerSound("res/sound/flippoker.mp3")
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		//open
		self["poker"].index = 1;

		self["topPoint"].visible = true
		self["topPoint"].index = self._val

		self["stype"].visible = true
		self["stype"].index = self._color

		if( self._point <=10)
		{
			self["type"].visible = true
			self["type"].index = self._color

			self["head"].visible = false
		}
		else
		{
			self["type"].visible = false
			
			self["head"].visible = true
			self["head"].index = self._point -10
		}

		_tween.to(self["poker"],{scaleX:1},150,Laya.Ease.linearNone,new Handler(this,ani_ok) )
	}

	function ani_ok()
	{

	}
}

function Poker2()
{
	var self = this
	Poker2.super(this);
	var _idx //n card
	var _val //poker idx in 52
	var _color 
	var _point //poker point
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{
		self.visible = false;
		self["poker"].index = 0;
		self["topPoint"].visible = false
		self["type"].visible = false
		self["stype"].visible = false
		self["head"].visible = false
	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 2 || _model.appearidx(state) == 3 || _model.appearidx(state) == 4)
		{
			var namelist = self.name.split("_")
			self._idx = namelist[1]
			//last one show when need
			if( self._idx  == 2 || self._idx == 5)
			{
				if( self._val !=undefined ) return
				self.visible = false;
				return;
			} 

			self.visible = true;			
		}
		else
		{
			self.visible = false;
			self["poker"].index = 0;
			self["topPoint"].visible = false
			self["type"].visible = false
			self["stype"].visible = false
		    self["head"].visible = false			
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		//var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)

		//already open
		if( self["poker"].index ==1) return

		var shift = 0		
		var point = str[0] -1
		if ( this.color.indexOf(str[1]) == 0 || this.color.indexOf(str[1]) == 3)  shift = 13
				
		var value = point + shift

		self._color = this.color.indexOf(str[1]) 
		self._point = point
		self._val = value

		self.flip()
	}

	Poker2.prototype.flip = function ()
	{
		self.visible = true;
		_model.playerSound("res/sound/flippoker.mp3")
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		//open
		self["poker"].index = 1;

		self["topPoint"].visible = true
		self["topPoint"].index = self._val

		self["stype"].visible = true
		self["stype"].index = self._color

		if( self._point <=10)
		{
			self["type"].visible = true
			self["type"].index = self._color

			self["head"].visible = false
		}
		else
		{
			self["type"].visible = false
			
			self["head"].visible = true
			self["head"].index = self._point -10
		}

		_tween.to(self["poker"],{scaleX:1},150,Laya.Ease.linearNone,new Handler(this,ani_ok) )
	}

	function ani_ok()
	{

	}
}

function Poker3()
{
	var self = this
	Poker3.super(this);
	var _idx //n card
	var _val //poker idx in 52
	var _color 
	var _point //poker point
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{
		self.visible = false;
		self["poker"].index = 0;
		self["topPoint"].visible = false
		self["type"].visible = false
		self["stype"].visible = false
		self["head"].visible = false
	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 2 || _model.appearidx(state) == 3 || _model.appearidx(state) == 4)
		{
			var namelist = self.name.split("_")
			self._idx = namelist[1]
			//last one show when need
			if( self._idx  == 2 || self._idx == 5)
			{
				self.visible = false;
				return;
			} 

			self.visible = true;
		}
		else
		{
			self.visible = false;
			self["poker"].index = 0;
			self["topPoint"].visible = false
			self["type"].visible = false
			self["stype"].visible = false
		    self["head"].visible = false	
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		//var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)

		//already open
		if( self["poker"].index ==1) return

		var shift = 0		
		var point = str[0] -1
		if ( this.color.indexOf(str[1]) == 0 || this.color.indexOf(str[1]) == 3)  shift = 13
				
		var value = point + shift

		self._color = this.color.indexOf(str[1]) 
		self._point = point
		self._val = value

		self.flip()
	}

	Poker3.prototype.flip = function ()
	{
		self.visible = true;
		_model.playerSound("res/sound/flippoker.mp3")
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		//open
		self["poker"].index = 1;

		self["topPoint"].visible = true
		self["topPoint"].index = self._val

		self["stype"].visible = true
		self["stype"].index = self._color

		if( self._point <=10)
		{
			self["type"].visible = true
			self["type"].index = self._color

			self["head"].visible = false
		}
		else
		{
			self["type"].visible = false
			
			self["head"].visible = true
			self["head"].index = self._point -10
		}

		_tween.to(self["poker"],{scaleX:1},150,Laya.Ease.linearNone,new Handler(this,ani_ok) )
	}

	function ani_ok()
	{

	}
}

function Poker4()
{
	var self = this
	Poker4.super(this);
	var _idx //n card
	var _val //poker idx in 52
	var _color 
	var _point //poker point
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{
		self.visible = false;
		self["poker"].index = 0;
		self["topPoint"].visible = false
		self["type"].visible = false
		self["stype"].visible = false
		self["head"].visible = false

	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 2 || _model.appearidx(state) == 3 || _model.appearidx(state) == 4)
		{
			var namelist = self.name.split("_")
			self._idx = namelist[1]
			//last one show when need
			if( self._idx  == 2 || self._idx == 5)
			{
				self.visible = false;
				return;
			} 

			self.visible = true;
		}
		else
		{
			self.visible = false;
			self["poker"].index = 0;
			self["topPoint"].visible = false
			self["type"].visible = false
			self["stype"].visible = false
		    self["head"].visible = false	
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		//var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)

		//already open
		if( self["poker"].index ==1) return

		var shift = 0		
		var point = str[0] -1
		if ( this.color.indexOf(str[1]) == 0 || this.color.indexOf(str[1]) == 3)  shift = 13
				
		var value = point + shift

		self._color = this.color.indexOf(str[1]) 
		self._point = point
		self._val = value

		self.flip()
	}

	Poker4.prototype.flip = function ()
	{
		self.visible = true;
		_model.playerSound("res/sound/flippoker.mp3")
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		//open
		self["poker"].index = 1;

		self["topPoint"].visible = true
		self["topPoint"].index = self._val

		self["stype"].visible = true
		self["stype"].index = self._color

		if( self._point <=10)
		{
			self["type"].visible = true
			self["type"].index = self._color

			self["head"].visible = false
		}
		else
		{
			self["type"].visible = false
			
			self["head"].visible = true
			self["head"].index = self._point -10
		}

		_tween.to(self["poker"],{scaleX:1},150,Laya.Ease.linearNone,new Handler(this,ani_ok) )
	}

	function ani_ok()
	{

	}
}

function Poker5()
{
	var self = this
	Poker5.super(this);
	var _idx //n card
	var _val //poker idx in 52
	var _color 
	var _point //poker point
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{
		self.visible = false;
	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 2 || _model.appearidx(state) == 3 || _model.appearidx(state) == 4)
		{
			var namelist = self.name.split("_")
			self._idx = namelist[1]
			//last one show when need
			if( self._idx  == 2 || self._idx == 5)
			{
				if( self._val !=undefined ) return
				self.visible = false;
				return;
			} 

			self.visible = true;			
		}
		else
		{
			self.visible = false;
			self["poker"].index = 0;
			self["topPoint"].visible = false
			self["type"].visible = false
			self["stype"].visible = false
		    self["head"].visible = false
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		//var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)

		var shift = 0		
		var point = str[0] -1
		if ( this.color.indexOf(str[1]) == 0 || this.color.indexOf(str[1]) == 3)  shift = 13
				
		var value = point + shift

		self._color = this.color.indexOf(str[1]) 
		self._point = point
		self._val = value

		self.flip()
	}

	Poker5.prototype.flip = function ()
	{
		self.visible = true;
		_model.playerSound("res/sound/flippoker.mp3")
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		//open
		self["poker"].index = 1;

		self["topPoint"].visible = true
		self["topPoint"].index = self._val

		self["stype"].visible = true
		self["stype"].index = self._color

		if( self._point <=10)
		{
			self["type"].visible = true
			self["type"].index = self._color

			self["head"].visible = false
		}
		else
		{
			self["type"].visible = false
			
			self["head"].visible = true
			self["head"].index = self._point -10
		}

		_tween.to(self["poker"],{scaleX:1},150,Laya.Ease.linearNone,new Handler(this,ani_ok) )
	}

	function ani_ok()
	{

	}
}

Laya.class(Poker, "Poker", PokerUI);
Laya.class(Poker1, "Poker1", PokerUI);
Laya.class(Poker2, "Poker2", PokerUI);
Laya.class(Poker3, "Poker3", PokerUI);
Laya.class(Poker4, "Poker4", PokerUI);
Laya.class(Poker5, "Poker5", PokerUI);
