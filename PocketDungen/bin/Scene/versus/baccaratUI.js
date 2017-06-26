
var Event = Laya.Event;
var Handler = Laya.Handler;

var Sprite  = Laya.Sprite;
var _model;

var SoundManager = Laya.SoundManager;

function baccaratUI()
{
	var self = this
	baccaratUI.super(this);
	_model = model.getInstance();
	
	_model.gameStateUpdate.add(onState);

	(function()
	{
		//建構式		
	})();

	function onState(state)
	{
		var state =  _model.appearidx(state)
		if( state == 0)
		{
			_model.playerSound("res/sound/roundStart.mp3")
		}
		
	}
	

}

Laya.class(baccaratUI, "baccaratUI", BaccaratViewUI);