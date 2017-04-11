
var Event = Laya.Event;

var _model;

function logingUI()
{
	var self = this
	logingUI.super(this);
	
	_model = model.getInstance();
	
	this.Login_btn.on(Event.CLICK, this, onBtnClick);
	this.oneTouch_btn.on(Event.CLICK, this, onBtnClick2);
	_model.rollercomplet.add(oncomplet)

	function onBtnClick()
	{
		// namehash = this.name.text;
		// pwhash = md5(this.password.text);

		// _model.login_name = namehash;
		// _model.login_pw =pwhash;
		// _model.eventHandle("login",[]);

		self["roller_"+0].stop(1);
	}

	function onBtnClick2()
	{		
		// self["roller_1"].__proto__.shift();
		
		for( i =0;i< 15 ;i++)
		{
			self["roller_"+i].shift();
		}		
	}

	function oncomplet(n)
	{
		trace("ok "+n)
		if( n !=14)
		{
			self["roller_"+(n+1)].stop();
		}
	}


}

Laya.class(logingUI, "logingUI", loginViewUI);
