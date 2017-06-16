
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _model;

function TakeIn()
{
	TakeIn.super(this);
	 _model = model.getInstance();
	
	var self = this
	this.takeInBtn.on(Event.CLICK, this, onTakeIn);
	this.closeBtn.on(Event.CLICK, this, onclose);

    (function()
	{
		//建構式
	})();

	
	TakeIn.prototype.onAppear = function()
	{
		//point 
		this.inputtext.prompt = "100 ~" + _model.total_Credit		
	}

	function onTakeIn()
	{
		if (!self.inputtext.text )
		{
			_model.hintmsg("請輸入帶入金額")
			return
		}

		if( self.inputtext > _model.total_Credit ) 
		{
			_model.hintmsg("帶入超過上限")
			return
		}

		_model.eventHandle("takein",[Number(this.inputtext.text)]);

		self.inputtext.text = String("")
   	}

	function onclose()
	{		
		 _model.closeview.dispatch("takeIn");	
	}

}

Laya.class(TakeIn, "TakeIn", TakeInUI);
