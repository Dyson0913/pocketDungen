
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
		namehash = this.name.text;
		pwhash = md5(this.password.text);

		_model.login_name = namehash;
		_model.login_pw =pwhash;
		_model.eventHandle("login",[]);
	}

	function onBtnClick2()
	{
		trace("2222");
		
	}


}

Laya.class(logingUI, "logingUI", loginViewUI);
