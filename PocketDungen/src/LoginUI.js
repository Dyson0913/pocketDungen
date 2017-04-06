
var Event = Laya.Event;

var _model;

function logingUI()
{
	var self = this
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
		//run time bind call function
		//self["roller_1"].__proto__.shift();
		//self["roller_1"].shift();
		//self["roller_1"].roll();
		//	self["roller_3"].roller.roll();
		// var ro = self["roller_0"];
		// ro.shift();
		
		// var ro2 = self["roller_1"];
		// 	ro2.shift();
		// self["roller_1"].__proto__ = new Roller();
		// self["roller_1"].__proto__.shift();
			
		for( i =0;i< 15 ;i++)
		{
			self["roller_"+i].shift();
		}
		
		
		
	}


}

Laya.class(logingUI, "logingUI", loginViewUI);
