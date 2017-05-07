
var Event = Laya.Event;
var Handler = Laya.Handler;

var _sec;

var _model = model.getInstance();

var BitmapFont = laya.display.BitmapFont;
var Text       = Laya.Text;


function CountTimer()
{
	var self = this
	CountTimer.super(this);
	
	_model.gameStateUpdate.add(onState);

	(function()
	{
		
		

	})();

	function onState(state)
	{
		if( _model.appearidx(state) == 1)
		{
			self.visible = true;
			regFont("res/BitmapFont/tableFont.fnt", "res/BitmapFont/tableFont.png");
			self.timer.font = "res/BitmapFont/tableFont";
		}
		else
		{
			self.visible = false;
		}
			
	}

	function regFont(fontFileName,path)
	{
            var newFont = new BitmapFont()
            var fnt = Laya.loader.getRes(fontFileName);
            var fntTxt = Laya.loader.getRes(path);
            newFont.parseFont(fnt, fntTxt);

            var pat = /.fnt/;
            fontFileName = fontFileName.replace(pat,"");

            Text.registerBitmapFont(fontFileName, newFont);           
     }

	CountTimer.prototype.countdown = function (times)
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
