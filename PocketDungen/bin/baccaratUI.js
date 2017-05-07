
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;
var rollerNum =5;

var _tween = Laya.Tween;
var _ease = Laya.Ease;
var Handler = Laya.Handler;
var SoundManager = Laya.SoundManager;

function baccaratUI()
{
	var self = this
	baccaratUI.super(this);
	_model = model.getInstance();

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);
	this.betzone_0.on(Event.CLICK, this, onbetzone,[0]);
	this.betzone_1.on(Event.CLICK, this, onbetzone,[1]);
	this.betzone_2.on(Event.CLICK, this, onbetzone,[2]);
	this.betzone_3.on(Event.CLICK, this, onbetzone,[3]);
	this.betzone_4.on(Event.CLICK, this, onbetzone,[4]);
	
	this.coin_0.on(Event.CLICK, this, coin,[0]);
	this.coin_1.on(Event.CLICK, this, coin,[1]);
	this.coin_2.on(Event.CLICK, this, coin,[2]);
	this.coin_3.on(Event.CLICK, this, coin,[3]);
	this.coin_4.on(Event.CLICK, this, coin,[4]);
	this.coin_5.on(Event.CLICK, this, coin,[5]);

	this.cancelBtn.on(Event.CLICK, this, betorcancel,[0]);
	this.comfirmBtn.on(Event.CLICK, this, betorcancel,[1]);

	_model.cashin.add(oncarrying);
	
	(function()
	{
		//建構式
		btn_appear(false)
		poker_appear(false)
		//SoundManager.playMusic("res/sound/slot_BGM.mp3")		
	})();

	
	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function onbetzone(idx)
	{
		trace("betzone0 ",idx);

		if( idx ==0)
		{
			poker_show(0,10)
		}
		if( idx ==1)
		{
			poker_show(1,12)
		}
		if( idx ==2)
		{
			poker_show(2,15)
		}
		if( idx ==3)
		{
			poker_show(3,11)
		}
		if( idx ==4)
		{
			poker_show(4,9)
		}
		if( idx ==5)
		{
			poker_show(5,17)
		}
		btn_appear(true)
	}

	function coin(idx)
	{
		trace("coin0",idx);
	}

	function betorcancel(idx)
	{
		if( idx == 0)
		{
			
		}
		else if ( idx == 1)
		{

		}

		btn_appear(false)
	}

	function btn_appear(visible)
	{
		self.cancelBtn.visible = visible
		self.comfirmBtn.visible = visible
	}

	function poker_appear(visible)
	{
		self.poker_0.visible = visible
		self.poker_1.visible = visible
		self.poker_2.visible = visible
		self.poker_3.visible = visible
		self.poker_4.visible = visible
		self.poker_5.visible = visible
	}

	function poker_show(idx,pokerVal)
	{
		self["poker_"+idx].visible = true
		self["poker_"+idx].index = pokerVal
		
	}

	function oncarrying(coin,cash)
	{
		//self.coin_amount.text = coin
		//self.cash_amount.text = cash
	}

}

Laya.class(baccaratUI, "baccaratUI", BaccaratViewUI);