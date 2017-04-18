
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _tween = Laya.Tween;
var _ease = Laya.Ease;

var _model = model.getInstance();

function FreeGame()
{   
	var self = this
	FreeGame.super(this);
	
    (function()
	{
		//建構式
		

	})();

	function Intofreegame()
	{
		//self.context.text = _model.hint_msg;

		_tween.to(self,{},2000,Laya.Ease.backOut,new Handler(this,complet) )
	}	

	function complet()
	{
		trace("free game ok")
         //_model.closeHint.dispatch();
	
	}


}

Laya.class(FreeGame, "FreeGame", FreeGameUI);
