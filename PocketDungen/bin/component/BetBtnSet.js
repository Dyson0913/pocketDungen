
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

var _coinarr;
var _coinRes;

function BetBtnSet()
{
	var self = this
	BetBtnSet.super(this);
	
	this.cancelBtn.on(Event.CLICK, this, betorcancel,[0]);
	this.comfirmBtn.on(Event.CLICK, this, betorcancel,[1]);

	_model.gameStateUpdate.add(onState);
	_model.betBtnApear.add(onAppear);
	
	(function()
	{
		self.visible = false;
	})();

	function onState(state)
	{
		var state =  _model.appearidx(state)
		if( state == 2)
		{
			self.visible = false;
		}
		
	}

	function betorcancel(idx)
	{
		if( idx == 0)
		{
			//send notify
			_model.betCancel.dispatch();
			//TODO pack
		}
		else if ( idx == 1)
		{
			//comfirm
			//TODO pack
		}

		onAppear(false)	
	}
	
	function onAppear(show)
	{
		self.visible = show
	}
	
}

Laya.class(BetBtnSet, "BetBtnSet", BetBtnSetUI);
