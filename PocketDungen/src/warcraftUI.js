
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;
var BlurFilter = Laya.BlurFilter;

var rollerNum =15;



function warcraftUI()
{
	var self = this
	warcraftUI.super(this);
	_model = model.getInstance();

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);
	this.spinBtn.on(Event.CLICK, this, onspin);
	this.betAddBtn.on(Event.CLICK, this, onaddScore);
	this.paytableBtn.on(Event.CLICK, this, onpatyTable);

	_model.cashin.add(oncarrying);
	var blurFilter = new BlurFilter();
	(function()
	{
		//建構式
		_model.betamount =1
		_model.winMoney.add(onwin);

		
		blurFilter.strength = 2;

		//self.list.getChildByName('scrollBar').rollRatio = 0.5;
		for( i =0;i< rollerNum ;i++)
		{
			self["roller_"+i].list.renderHandler = new Handler(this, updateItem);
			self["roller_"+i].list.array = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0];
		}
	

	})();

	function updateItem(cell, idx)
	{
		var mya = cell.getChildByName('myani');
		mya.index = idx % 9;
	}

	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function onspin()
	{
		_model.betamount = this.betScore.text;
		_model.eventHandle("spin",[]);

		for( i =0;i< rollerNum ;i++)
		{
			//APK 不支持filter
			//self["roller_"+i].list.renderHandler = new Handler(this, fuzzyItem);
			//self["roller_"+i].list.array = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0];
			self["roller_"+i].list.tweenTo(9,2000,new Handler(this,comp,[i]));
			
		}
		
	}

	function fuzzyItem(cell, idx)
	{
		var mya = cell.getChildByName('myani');
		mya.filters = [blurFilter];
	}

	function comp(idx )
	{  
		self["roller_"+idx].list.scrollTo(0);
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

	function onwin(winpoint)
	{
		this.Winpoint.text =winpoint;
	}

}
	

Laya.class(warcraftUI, "warcraftUI", warcraftViewUI);
