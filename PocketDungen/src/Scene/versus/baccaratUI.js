
var Event = Laya.Event;
var Handler = Laya.Handler;

var Sprite  = Laya.Sprite;
var _model;
var _coinarr;

var _betzone;


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
	
	

	this.cancelBtn.on(Event.CLICK, this, betorcancel,[0]);
	this.comfirmBtn.on(Event.CLICK, this, betorcancel,[1]);

	_model.cashin.add(oncarrying);
	
	
	(function()
	{
		//建構式
		btn_appear(false)
		_betzone = [0,1,2]
		_coinarr = []
		for(i =0;i< _betzone.length;i++)
		{
			_coinarr.push([])
		}
		
		//SoundManager.playMusic("res/sound/slot_BGM.mp3")		
	})();

	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function onbetzone(idx)
	{
		if( idx ==0)
		{
			
		}
		if( idx ==1)
		{
		}
		if( idx ==2)
		{
			
		}
		if( idx ==3)
		{
			
		}
		if( idx ==4)
		{
			
		}
		if( idx ==5)
		{
		}

		
		coin_add(_selectRes,idx)

		btn_appear(true)
	}

	

	function betorcancel(idx)
	{
		if( idx == 0)
		{
			//cancel
			for(i =0;i< _betzone.length;i++)
			{
				coin_clear(_betzone[i])
			}
			
			//TODO pack
		}
		else if ( idx == 1)
		{
			//comfirm
			//TODO pack
		}

		btn_appear(false)
	}

	function btn_appear(visible)
	{
		self.cancelBtn.visible = visible
		self.comfirmBtn.visible = visible
	}

	function coin_add(res,idx)
	{
		var t = Laya.loader.getRes(res);
		var coin = new Sprite
		coin.graphics.drawTexture(t, 0, 0);
		self["betzone_"+idx].addChild(coin);
		var width = self["betzone_"+idx].width
		var heigh = self["betzone_"+idx].height
		coin.pos(Math.random()*width, Math.random()*heigh);

		var data  = _coinarr[idx]
		_coinarr[idx].push(coin)
			//ape.graphics.clear();
			// var texture = Laya.loader.getRes(textureUrl);
			// ape.graphics.drawTexture(texture, 0, 0);

			// // 设置交互区域
			// ape.size(texture.width, texture.height);
	}

	function coin_clear(idx)
	{
		for(i =0;i< _coinarr.length; i++)
		{
			var n = _coinarr[i].length
			var data = _coinarr[i];
			for(k =0 ;k< n;k++)
			{
				data[k].destroy(true)
			}
		}
		
	}

	function oncarrying(coin,cash)
	{
		//self.coin_amount.text = coin
		//self.cash_amount.text = cash
	}

}

Laya.class(baccaratUI, "baccaratUI", BaccaratViewUI);