
var Event = Laya.Event;

function TestUI()
{
	TestUI.super(this);
	
	this.btn_ok.on(Event.CLICK, this, onBtnClick);
	this.btn_cancel.on(Event.CLICK, this, onBtnClick2);

	function onBtnClick()
	{
		trace("1111");
		this.showText.text = "111";
	}

	function onBtnClick2()
	{
		trace("2222");
		this.showText.text = "222";
	}


}

Laya.class(TestUI, "TestUI", TestPageUI);
