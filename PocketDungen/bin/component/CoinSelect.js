
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

function CoinSelect()
{
	var self = this
	CoinSelect.super(this);
	
	

	_model.gameStateUpdate.add(onState);
	
	(function()
	{
		self.coin_0.on(Event.CLICK, self, coin,[0]);
		self.coin_1.on(Event.CLICK, self, coin,[1]);
		self.coin_2.on(Event.CLICK, self, coin,[2]);
		self.coin_3.on(Event.CLICK, self, coin,[3]);
		self.coin_4.on(Event.CLICK, self, coin,[4]);
		self.coin_5.on(Event.CLICK, self, coin,[5]);

		self.coin_po = [[5,-9],[117,28],[236,46],[363,46],[485,26],[605 -9]]


		self.coin_light.visible = false
		_model.pushValue("select_coin_idx",0)

		self._coinRes = ["res/Coin/coin_10.png","res/Coin/coin_50.png","res/Coin/coin_100.png","res/Coin/coin_500.png","res/Coin/coin_1k.png","res/Coin/coin_5k.png"]		
		_model.pushValue("selectRes",self._coinRes)

		self._coinValue = [10,50,100,500,1000,5000]		
		_model.pushValue("coinValue",self._coinValue)

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
			self.coin_light.visible = false
		}
			
	}

	function coin(idx)
	{
		self.coin_light.visible = true
		self.coin_light.x = self.coin_po[idx][0]
		self.coin_light.y = self.coin_po[idx][1]
		

		_model.pushValue("select_coin_idx",idx)
		_model.playerSound("res/sound/normal_btn.mp3")
	}

}

Laya.class(CoinSelect, "CoinSelect", coinSelectUI);
