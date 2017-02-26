
var Event = Laya.Event;

var _model;

function lobbyUI()
{
	lobbyUI.super(this);
	
	_model = model.getInstance();
	
	this.game1.on(Event.CLICK, this, onBtnClick);
	

	function onBtnClick()
	{
		_model.join_game = 0;
		_model.eventHandle("join_game",[]);
	}

	


}

Laya.class(lobbyUI, "lobbyUI", lobbyViewUI);