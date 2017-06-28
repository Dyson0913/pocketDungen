
var Event = Laya.Event;
var Handler = Laya.Handler;
//var _tween = Laya.Tween;

var _model = model.getInstance();

function PhaseHint()
{
	var self = this
	PhaseHint.super(this);
	
	_model.gameStateUpdate.add(onState);
	_model.betResult.add(onBetresult);
	

	(function()
	{
		self.visible = false;		
		self.sysText.text ="";
	})();

	function onState(state)
	{		
		self.visible = true;
		var hintstr = "";
		if( state == "init") hintstr = String("遊戲開始");
		if( state == "wait_bet") 
		{
			var rest_time = _model.getValue("reset_time")
			if( rest_time !=10) return
			
			hintstr = String("請開始下注");
		}
		if( state == "player_card" || state == "banker_card") 
		{
			var poker = _model.getValue("playerpoker")
			var bpoker = _model.getValue("bankerpoker")		
			if( (poker.length + bpoker.length) !=1) 
			{
				//no ani
				self.PhaseText.text = String("開牌中");
				return
			}
			hintstr = String("開牌中");
		}
		
		if( state == "settle") hintstr = String("本局結算");

		set_text(hintstr)				
	}

	function set_text(text)
	{
		self.PhaseText.text = text
		self.PhaseText.alpha = 1;
		_tween.to(self.PhaseText,{y:0,alpha:0},1500,Laya.Ease.quadInOut,new Handler(this,hintover) )
	}

	function hintover()
	{
		self.PhaseText.y = 45;		
	}

	function onBetresult(text)
	{
		self.sysText = true;
		set_text(text)
	}
	
	function set_system(text)
	{
		self.sysText.text = String(text);
		self.sysText.alpha = 1;
		_tween.to(self.sysText,{y:0,alpha:0},1500,Laya.Ease.quadInOut )
	}

	
}

Laya.class(PhaseHint, "PhaseHint", PhaseHintUI);

