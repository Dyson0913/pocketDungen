
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

var _val

function Poker()
{
	var self = this
	Poker.super(this);
	
	_model.gameStateUpdate.add(onState);

	(function()
	{
		
		

	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 2 || _model.appearidx(state) == 3)
		{
			self.visible = true;
		}
		else
		{
			self.visible = false;
		}
			
	}

	Poker.prototype.flip = function (pokerVal)
	{
		
		self._val = pokerVal
		//data set ? show
		
		_tween.to(self["poker"],{scaleX:0},150,Laya.Ease.linearNone,new Handler(this,scaleX) )
		//Timer.loop(1000,this,this.count)
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
