
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
		hash = md5(this.password.text);
		trace("model  ="+hash);
		return;
		_model.login_name = this.name.text;
		_model.login_pw = this.password.text;
		trace("model  ="+_model.login_name + "---"+ _model.login_pw);
		_model.eventHandle("login",[]);
	}

	function onBtnClick2()
	{
		trace("2222");
		
	}


}

Laya.class(logingUI, "logingUI", loginViewUI);
