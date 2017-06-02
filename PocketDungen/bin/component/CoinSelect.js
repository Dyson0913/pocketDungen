
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

var _coinRes;

function CoinSelect()
{
	var self = this
	CoinSelect.super(this);
	
	this.coin_0.on(Event.CLICK, this, coin,[0]);
	this.coin_1.on(Event.CLICK, this, coin,[1]);
	this.coin_2.on(Event.CLICK, this, coin,[2]);
	this.coin_3.on(Event.CLICK, this, coin,[3]);
	this.coin_4.on(Event.CLICK, this, coin,[4]);
	this.coin_5.on(Event.CLICK, this, coin,[5]);

	_model.gameStateUpdate.add(onState);
	
	(function()
	{
		this._coinRes = ["res/Coin/coin_10_s.png","res/Coin/coin_50_s.png","res/Coin/coin_100_s.png","res/Coin/coin_500_s.png","res/Coin/coin_1k_s.png","res/Coin/coin_5k_s.png"]		
		_model.pushValue("selectRes",_coinRes[0])
		self.visible = false;
	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 1)
		{
			self.visible = true;
		}
		else
		{
			self.visible = false;
		}
			
	}

	function coin(idx)
	{
		_model.pushValue("selectRes",this._coinRes[idx])		
	}

}

Laya.class(CoinSelect, "CoinSelect", coinSelectUI);
