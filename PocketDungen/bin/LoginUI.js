
var Event = Laya.Event;

var _model;

function logingUI()
{
	logingUI.super(this);
	
	_model = model.getInstance();
	
	this.Login_btn.on(Event.CLICK, this, onBtnClick);
	this.oneTouch_btn.on(Event.CLICK, this, onBtnClick2);

	function onBtnClick()
	{
		trace("login ="+this.name.text + "---"+ this.password.text);
		
		_model.eventHandle("login",[this.name,this.password]);
	}

	function onBtnClick2()
	{
		trace("2222");
		
	}


}

Laya.class(logingUI, "logingUI", loginViewUI);
