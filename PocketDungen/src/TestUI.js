
var Event = Laya.Event;

var _model;

function TestUI()
{
	TestUI.super(this);
	
	this.btn_ok.on(Event.CLICK, this, onBtnClick);
	this.btn_cancel.on(Event.CLICK, this, onBtnClick2);
	_model = model.getInstance();

	function onBtnClick()
	{
		trace("1111");
		this.showText.text = "111";
	}

	function onBtnClick2()
	{
		trace("2222");
		this.showText.text = "222";

		Laya.stage.removeChild(_model.getView("test"));
		Laya.stage.addChild(_model.getView("login"));

	}


}

Laya.class(TestUI, "TestUI", TestPageUI);
