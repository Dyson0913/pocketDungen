
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

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);

	_model.cashin.add(oncarrying);
	
	
	(function()
	{
		//建構式
		
		//SoundManager.playMusic("res/sound/slot_BGM.mp3")		
	})();

	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function oncarrying(coin,cash)
	{
		//self.coin_amount.text = coin
		//self.cash_amount.text = cash
	}

}

Laya.class(baccaratUI, "baccaratUI", BaccaratViewUI);