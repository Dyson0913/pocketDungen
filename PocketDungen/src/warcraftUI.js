
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;
var BlurFilter = Laya.BlurFilter;
var Item = Item;
// 项渲染器
var Box   = Laya.Box;
var animation = Laya.animation;


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
	
	function Item()
	{
		Item.__super.call(this);
		this.size(140, 140);
		 this.img = new animation();
		 this.addChild(this.img);

		this.setImg = function(src)
		{
			trace("item src"+src);
		}
	}
	Laya.class(Item, "Item", Box);

	(function()
	{
		//建構式
		_model.betamount =1
		_model.winMoney.add(onwin);

		var blurFilter = new BlurFilter();
		blurFilter.strength = 5;
		self.pic.filters = [blurFilter];

		self.list.itemRender = Item;
		self.list.renderHandler = new Handler(this, updateItem);
		self.list.array = [1,2,3,4];
	})();

	function updateItem(cell, index)
	{
		trace(""+cell);
		trace("cell.dataSource ="+cell.dataSource);
		cell.setImg(cell.dataSource);
	}

	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function onspin()
	{
		_model.betamount = this.betScore.text;
		_model.eventHandle("spin",[]);
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
