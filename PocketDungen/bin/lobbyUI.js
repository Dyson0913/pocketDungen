
var Event = Laya.Event;

var _model;

function lobbyUI()
{
	lobbyUI.super(this);
	
	_model = model.getInstance();
	
	this.game1.on(Event.CLICK, this, onBtnClick);
	this.game2.on(Event.CLICK, this, onBtnClick2);

	function onBtnClick()
	{
		_model.join_game = 0;
		_model.eventHandle("join_game",[]);
	}

	function onBtnClick2()
	{
		_model.join_game = 2;
		_model.eventHandle("join_game",[]);
	}
	
	


}

Laya.class(lobbyUI, "lobbyUI", lobbyViewUI);