
var Event = Laya.Event;

var _model;
var my;

function warcraftUI()
{
	warcraftUI.super(this);
	_model = model.getInstance();

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);
	this.spinBtn.on(Event.CLICK, this, onspin);
	this.betAddBtn.on(Event.CLICK, this, onaddScore);
	this.paytableBtn.on(Event.CLICK, this, onpatyTable);

	_model.cashin.add(oncarrying);
	
	(function()
	{
		trace("war init");
		my =this;
		_model.winMoney.add(onwin);
	})();

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

	function oncarrying(mycoin,mycash)
	{
		trace("oncarrying"+this)
		trace("oncarrying"+mycoin + " " +mycash)
		trace("oncarrying"+	my.warcraftUI.myCoin + " " +my.mycash)
		
		;
		// this.cash.Text = cash
	}

	function onwin(winpoint)
	{
		this.Winpoint.text =winpoint;
	}

}
	

Laya.class(warcraftUI, "warcraftUI", warcraftViewUI);
