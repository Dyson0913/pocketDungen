
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _model;

function HintUI()
{
   
   
	HintUI.super(this);
	 _model = model.getInstance();
	
	 var self = this
	this.cancel.on(Event.CLICK, this, oncancel);
	this.comfirmBtn.on(Event.CLICK, this, oncomfirm);
	_model.hint_pop.add(onupdate);
    (function()
	{
		//建構式
		

	})();

	function onupdate()
	{
		self.context.text = _model.hint_msg;
	}
	

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
