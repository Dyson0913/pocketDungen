
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();


function Settle()
{
	var self = this
	Settle.super(this);
	
	_model.gameStateUpdate.add(onState);
	_model.settleInfo.add(onsettleInfo);

	(function()
	{
		self.visible = false;
	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 4)
		{
			self.visible = true;
			_model.regFont("res/BitmapFont/tableFont.fnt", "res/BitmapFont/tableFont.png");
			self.playerPoint.font = "res/BitmapFont/tableFont";
			self.bankerPoint.font = "res/BitmapFont/tableFont";
			self.playerWin.visible = false
			self.bankerWin.visible = false
			self.Tie.visible = false;
			self.playerTitle.visible = true;
			self.bankerTitle.visible = true;
		}
		else
		{
			self.visible = false;
			self.playerPoint.text = ""
			self.bankerPoint.text = ""
		}
			
	}

	function onsettleInfo(winstate,settlePoint,paytable)
	{
		if ( winstate == "player" )
		{
			self.playerWin.visible = true
		}

		if ( winstate == "banker" )
		{
			self.bankerWin.visible = true
		}

		if ( winstate == "tie")
		{
			self.Tie.visible = true;
			//self.playerTitle.visible = false;
			//self.bankerTitle.visible = false;
		}		
		self.playerPoint.text = String(settlePoint[0])
		self.bankerPoint.text = String(settlePoint[1])

		_model.playerSound("res/sound/winloss.mp3")
	}

	Settle.prototype.setpoint = function (point)
	{
		self.playerPoint.text = point
	}

	Settle.prototype.countdown_self = function (times)
	{
		self._sec = times;
		Timer.loop(1000,this,this.count)
	}

	Settle.prototype.count = function()
	{
		self.timer.text = self._sec
		self._sec--;
		if( self._sec == -1)
		{
			Timer.clear(this,this.count);
		}
		
	}


}

Laya.class(Settle, "Settle", SettleUI);
