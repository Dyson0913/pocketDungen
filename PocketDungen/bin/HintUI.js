
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _model;

function HintUI()
{
    var self = this
   
	HintUI.super(this);
	 _model = model.getInstance();
	
	
	this.cancel.on(Event.CLICK, this, oncancel);
	this.comfirmBtn.on(Event.CLICK, this, oncomfirm);

    (function()
	{
		//建構式
		self.context.text = _model.hint_msg;

	})();

	function oncomfirm()
	{
		
          _model.comfirmHint.dispatch();
   }

	function oncancel()
	{
	
         _model.closeHint.dispatch();
	
	}


}

Laya.class(HintUI, "HintUI", HintViewUI);
