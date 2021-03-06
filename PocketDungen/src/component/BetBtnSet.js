
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;

var _coinarr;
var _coinRes;

function BetBtnSet()
{
	var self = this
	BetBtnSet.super(this);
	
	this.cancelBtn.on(Event.CLICK, this, betorcancel,[0]);
	this.comfirmBtn.on(Event.CLICK, this, betorcancel,[1]);

	_model = model.getInstance();
	_model.gameStateUpdate.add(onState);
	_model.betBtnApear.add(onAppear);
	_model.betTimeout.add(onbet);
	

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
			_model.playerSound("res/sound/cancel_btn.mp3")
			
		}
		else if ( idx == 1)
		{
			//comfirm		
			onbet()
			_model.playerSound("res/sound/normal_btn.mp3")
		}

		onAppear(false)	
	}
	
	function onAppear(show)
	{
		self.visible = show
	}
	
	function onbet()
	{
		var coinarr = _model.getValue("unfirm_coin")

		var betlist = []				
		for(i =0;i< coinarr.length; i++)
		{
			var data = coinarr[i];
			var n = data.length				
			var totalbet = 0
			for(k =0 ;k< n;k++)
			{	
				var sp = data[k];					
				totalbet += sp.name
			}
			
			if (totalbet ==0) continue

			//trace("i = "+i+ " bet = "+totalbet)			
			betinfo = {"type":i,"amount":totalbet}
			betlist.push(betinfo)
		}					

		if( betlist.length !=0)
		{
			
			_model.eventHandle("bet",[betlist]);
		}						
			
	}
}

Laya.class(BetBtnSet, "BetBtnSet", BetBtnSetUI);
