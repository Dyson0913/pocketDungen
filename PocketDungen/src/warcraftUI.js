
var Event = Laya.Event;

var _model;

function warcraftUI()
{
	warcraftUI.super(this);
	_model = model.getInstance();

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);

	function onBtnClick()
	{
		//
		_model.eventHandle("leave_game",[]);
	}
}

Laya.class(warcraftUI, "warcraftUI", warcraftViewUI);
