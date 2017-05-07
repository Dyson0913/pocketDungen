
var Event = Laya.Event;
var Handler = Laya.Handler;

var _sec;

var _model = model.getInstance();


function CountTimer()
{
	var self = this
	CountTimer.super(this);
	
	(function()
	{
		//regFont("tableFont.fnt", "res\BitmapFont\tableFont.png");

	})();

	function regFont(fontFileName,path)
	{
            var newFont = new BitmapFont();
            var fnt = Light.loader.getRes(fontFileName);
            var fntTxt = Light.loader.getRes(path);
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
