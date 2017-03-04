
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;
var BlurFilter = Laya.BlurFilter;




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
		self.pic.filters = [blurFilter];

		//self.list.getChildByName('scrollBar').rollRatio = 0.5;

		self.list_0.renderHandler = new Handler(this, updateItem);
		self.list_0.array = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0];

		self.list_1.renderHandler = new Handler(this, updateItem1);
		self.list_1.array = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0];
	})();

	function updateItem(cell, idx)
	{
		var mya = cell.getChildByName('myani_0');
		mya.index = idx % 9;
	}

	function updateItem1(cell, idx)
	{
		var mya = cell.getChildByName('myani_1');
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

		self.list_0.renderHandler = new Handler(this, fuzzyItem);
		self.list_0.array = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0];
		self.list_0.tweenTo(9,2000,new Handler(this,comp));

		self.list_1.renderHandler = new Handler(this, fuzzyItem2);
		self.list_1.array = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0];
		self.list_1.tweenTo(9,2000,new Handler(this,comp2));
	}

	function fuzzyItem(cell, idx)
	{
		var mya = cell.getChildByName('myani_0');
		mya.filters = [blurFilter];
	}

	function fuzzyItem2(cell, idx)
	{
		var mya = cell.getChildByName('myani_1');
		mya.filters = [blurFilter];
	}

	function comp()
	{  
		self.list_0.scrollTo(0);
	}

		function comp2()
	{  
		self.list_1.scrollTo(0);
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
