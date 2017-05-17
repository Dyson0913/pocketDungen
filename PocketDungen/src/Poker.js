
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

var color = ["c","d","h","s"]

function Poker()
{
	var self = this
	Poker.super(this);
	var _idx
	var _val
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{

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
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)
		self.flip(value)
	}

	Poker.prototype.flip = function (pokerVal)
	{
		self.visible = true;
		self._val = pokerVal
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		self["poker"].index = self._val
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
	var _idx
	var _val
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{

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
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)
		self.flip(value)
	}

	Poker1.prototype.flip = function (pokerVal)
	{
		self.visible = true;
		self._val = pokerVal
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		self["poker"].index = self._val
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
	var _idx
	var _val
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{

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
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)
		self.flip(value)
	}

	Poker2.prototype.flip = function (pokerVal)
	{
		self.visible = true;
		self._val = pokerVal
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		self["poker"].index = self._val
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
	var _idx
	var _val
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{

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
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)
		self.flip(value)
	}

	Poker3.prototype.flip = function (pokerVal)
	{
		self.visible = true;
		self._val = pokerVal
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		self["poker"].index = self._val
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
	var _idx
	var _val
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{

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
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)
		self.flip(value)
	}

	Poker4.prototype.flip = function (pokerVal)
	{
		self.visible = true;
		self._val = pokerVal
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		self["poker"].index = self._val
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
	var _idx
	var _val
	_model.gameStateUpdate.add(onState);
	_model.pokerShow.add(onPoker);

	(function()
	{

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
		}
			
	}

	function onPoker(idx,poker_str)
	{
		if (self._idx != idx ) return
		var str = poker_str.split("_")
		//1_c convert to number (c,d,h,s)
		var value = (this.color.indexOf(str[1])+1) + 4*(str[0] -1)
		self.flip(value)
	}

	Poker5.prototype.flip = function (pokerVal)
	{
		self.visible = true;
		self._val = pokerVal
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
	}

	function scaleX()
	{
		self["poker"].index = self._val
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
