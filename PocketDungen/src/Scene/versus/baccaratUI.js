
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
	
	(function()
	{
		//建構式
		
		//SoundManager.playMusic("res/sound/slot_BGM.mp3")		
	})();

	
	

}

Laya.class(baccaratUI, "baccaratUI", BaccaratViewUI);