
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _tween = Laya.Tween;
var _ease = Laya.Ease;

var _model;

function BonusGame()
{   
	var self = this
	BonusGame.super(this);
	
    (function()
	{
		//建構式
		_model = model.getInstance();

	})();

	BonusGame.prototype.onAppear = function()
	{
		SoundManager.playSound("res/sound/BonusGame.mp3",1,new Handler(this,complet))
	}
	
	function complet()
	{
		 _model.closeview.dispatch("bonusGame");	 
	}


}

Laya.class(BonusGame, "BonusGame", BonusGameUI);
