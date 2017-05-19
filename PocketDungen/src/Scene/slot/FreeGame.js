
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _tween = Laya.Tween;
var _ease = Laya.Ease;

var SoundManager = Laya.SoundManager;

var _model = model.getInstance();

function FreeGame()
{   
	var self = this
	FreeGame.super(this);
	
    (function()
	{
		//建構式
		

	})();

	FreeGame.prototype.onAppear = function()
	{
		SoundManager.playSound("res/sound/FreeGame.mp3",1,new Handler(this,complet))
	}
	
	function complet()
	{
         _model.closeview.dispatch("freeGame");		 
	}


}

Laya.class(FreeGame, "FreeGame", FreeGameUI);
