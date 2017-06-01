
var Event = Laya.Event;
var Handler = Laya.Handler;

var _sec;

var _model = model.getInstance();



function CountTimer()
{
	var self = this
	CountTimer.super(this);
	
	_model.gameStateUpdate.add(onState);
	_model.countDown.add(oncountDown);

	(function()
	{
		self.visible = false;

	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 1)
		{
			self.visible = true;
			_model.regFont("res/BitmapFont/tableFont.fnt", "res/BitmapFont/tableFont.png");
			self.timer.font = "res/BitmapFont/tableFont";
		}
		else
		{
			self.visible = false;
		}
			
	}

	function oncountDown(times)
	{
		self.countdown(times)
	}

	CountTimer.prototype.countdown = function (times)
	{
		self.timer.text = times
	}

	CountTimer.prototype.countdown_self = function (times)
	{
		self._sec = times;
		Timer.loop(1000,this,this.count)
	}

	CountTimer.prototype.count = function()
	{
		self.timer.text = self._sec
		self._sec--;
		if( self._sec == -1)
		{
			Timer.clear(this,this.count);
		}
		
	}


}

Laya.class(CountTimer, "CountTimer", CountTimerUI);
