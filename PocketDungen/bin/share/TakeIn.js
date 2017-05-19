
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
		self.inputtext.prompt = "100 ~" + _model.total_Credit
	}

	function onTakeIn()
	{
		trace("inin")
         // _model.comfirmHint.dispatch();
   }

	function onclose()
	{		
		 _model.closeview.dispatch("takeIn");	
	}

}

Laya.class(TakeIn, "TakeIn", TakeInUI);
