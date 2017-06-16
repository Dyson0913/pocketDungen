
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _model;

function Menu()
{
   var self = this
	Menu.super(this);
	_model = model.getInstance();
		 
	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);	
    (function()
	{
		//建構式
		

	})();

	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}
}

Laya.class(Menu, "Menu", MenuUI);
