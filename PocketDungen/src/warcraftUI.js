
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;
var BlurFilter = Laya.BlurFilter;
		//blurFilter.strength = 2; //APK not support
		//var blurFilter = new BlurFilter();
var rollerNum =15;



function warcraftUI()
{
	var self = this
	warcraftUI.super(this);
	_model = model.getInstance();

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);
	this.spinBtn.on(Event.CLICK, this, onspin);
	this.stopBtn.on(Event.CLICK, this, onStop);
	this.betAddBtn.on(Event.CLICK, this, onaddScore);
	this.paytableBtn.on(Event.CLICK, this, onpatyTable);

	_model.cashin.add(oncarrying);
	_model.spinResult.add(onresult);
	_model.rollercomplet.add(oncomplet);

	
	(function()
	{
		//建構式
		_model.betamount =1
		_model.winMoney.add(onwin);
		self.stopBtn.visible = false;

	})();

	
	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function onspin()
	{
		self.spinBtn.visible = false;
		self.stopBtn.visible = true;
		_model.betamount = self.betScore.text;

		self.winAni.interval = 100;
		self.winAni.play()
		//socket spin
		//_model.eventHandle("spin",[]);

		for( i =0;i< rollerNum ;i++)
		{
			self["roller_"+i].shift();
		}	
		
	}
	
	function onStop()
	{
		var idx = Math.floor((Math.random() * 9) + 1)
		self["roller_"+0].stop(idx);
		self.winAni.stop()
	}

	function oncomplet(n)
	{
		//all stop
		if( n !=14)
		{
			var idx = Math.floor((Math.random() * 9) + 1)
			self["roller_"+(n+1)].stop(idx);
		}

		//order stop
		// if( n !=14)
		// {
		// 	Timer.frameOnce(10,self,self.nextstop,[n])
		// }
		
		//roller all stop
		if( n ==14)
		{
			self.spinBtn.visible = true;
			self.stopBtn.visible = false;
		}
	}

	
	warcraftUI.prototype.nextstop = function(n)
	{
		var idx = Math.floor((Math.random() * 9) + 1)
		self["roller_"+(n+1)].stop(idx);
		
	}

	function onaddScore()
	{
		this.betScore.text = parseInt(this.betScore.text)+1;
		
	}

	function onpatyTable()
	{

	}

	function oncarrying(coin,cash)
	{
		self.coin_amount.text = coin
		self.cash_amount.text = cash
	}

	function onresult()
	{
		trace("on result");
		
	}


	function onwin(winpoint)
	{
		this.Winpoint.text =winpoint;
	}

}
	

Laya.class(warcraftUI, "warcraftUI", warcraftViewUI);
