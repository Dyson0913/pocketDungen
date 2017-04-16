
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model;
var BlurFilter = Laya.BlurFilter;
		//blurFilter.strength = 2; //APK not support
		//var blurFilter = new BlurFilter();
var rollerNum =5;

var _tween = Laya.Tween;
var _ease = Laya.Ease;
var Handler = Laya.Handler;
var SoundManager = Laya.SoundManager;

var ui_spin

function warcraftUI()
{
	var self = this
	warcraftUI.super(this);
	_model = model.getInstance();

	this.back_to_lobby.on(Event.CLICK, this, onBtnClick);
	this.spinBtn.on(Event.CLICK, this, onspin);
	this.stopBtn.on(Event.CLICK, this, onStop);
	this.betAddBtn.on(Event.CLICK, this, onaddScore);
	this.paytableBtn.on(Event.CLICK, this, onpatyTable);

	_model.cashin.add(oncarrying);
	_model.spinResult.add(onresult);
	_model.rollercomplet.add(oncomplet);

	
	(function()
	{
		//建構式
		_model.betamount =1
		_model.winMoney.add(onwin);
		self.stopBtn.visible = false;
		
		for(i =0;i< rollerNum;i++)
		{
			self["ani_"+i].visible = false;
		}

		//test data
		_model.winAniSet.push(["0@1","3@0","7@0"])
		_model.winAniSet.push(["1@1","4@1","7@1"])
		_model.winAniSet.push(["2@1","5@1","6@1","10@1","13@1"])

		
	})();

	
	function onBtnClick()
	{
		_model.eventHandle("leave_game",[]);
	}

	function onspin()
	{
		self.spinBtn.visible = false;
		self.stopBtn.visible = true;
		_model.betamount = self.betScore.text;
		
		//socket spin
		//_model.eventHandle("spin",[]);
		
		SoundManager.playSound("res/sound/UI_Spin.mp3")

		for( i =0;i< rollerNum ;i++)
		{
			self["roller_"+i].shift();
			//self["roller_"+i].move();
		}	
		
	}
	
	function onStop()
	{
		var idx = Math.floor((Math.random() * 9) + 1)
		var sec = mod(idx+1)
		var thrid = mod(sec+1)
		var result = [idx,sec,thrid]
		
		self["roller_"+0].stop(result.reverse());

		SoundManager.playSound("res/sound/UI_Stop.mp3")
		
	}

	function mod(n)
	{
		if( n == _symbolNum ) return 1
		return n
	}

	function oncomplet(n)
	{
		//all stop
		// if( n != (rollerNum-1))
		// {
		// 	var idx = Math.floor((Math.random() * 9) + 1)
		// 	self["roller_"+(n+1)].stop(idx);
		// }

		//order stop
		if( n != (rollerNum-1) )
		{
			Timer.frameOnce(10,self,self.nextstop,[n])
		}
		
		//roller all stop
		if( n ==(rollerNum-1))
		{
			self.spinBtn.visible = true;
			self.stopBtn.visible = false;

			//play winani if have
			playAni()
			
		}
	}

	function playAni()
	{
		if( _model.winAniSet.length ==0) return;

		var winset = _model.winAniSet[0]

		// self["ani_"+1].visible = false;
		// self["ani_"+1]["winAni_"+1].visible = false;
		// self["ani_"+1]["winAni_"+1].stop();


		var n = winset.length
		for(i =0;i<n;i++)
		{
			var data = winset[i];
			var arr = data.split("@")
			var idx = arr[0]
			var type = arr[1]
			self["ani_"+idx].visible = true;
			self["ani_"+idx]["winAni_"+type].visible = true;
		    self["ani_"+idx]["winAni_"+type].interval = 200;
		    self["ani_"+idx]["winAni_"+type].play()
		}
		
		SoundManager.playSound("res/sound/UI_Normal_Link.mp3")
		
		//ready to next winset
		_tween.to(self,{},2000,Laya.Ease.linearNone,new Handler(this,stopAni) )
	}

	function stopAni()
	{
		if( _model.winAniSet.length ==0) return;

		var winset = _model.winAniSet[0]
		var n = winset.length
		for(i =0;i<n;i++)
		{
			var data = winset[i];
			var arr = data.split("@")
			var idx = arr[0]
			var type = arr[1]
			self["ani_"+idx].visible = false;
			self["ani_"+idx]["winAni_"+type].visible = false;
			self["ani_"+idx]["winAni_"+type].stop();
		}

		_model.winAniSet.shift()

		playAni()
	}
	
	warcraftUI.prototype.nextstop = function(n)
	{
		SoundManager.playSound("res/sound/UI_Stop.mp3")

		var idx = Math.floor((Math.random() * 9) + 1)
		var sec = mod(idx+1)
		var thrid = mod(sec+1)
		var result = [idx,sec,thrid]
		self["roller_"+(n+1)].stop(result.reverse());
		
	}

	function onaddScore()
	{
		this.betScore.text = parseInt(this.betScore.text)+1;
		
	}

	function onpatyTable()
	{

	}

	function oncarrying(coin,cash)
	{
		self.coin_amount.text = coin
		self.cash_amount.text = cash
	}

	function onresult()
	{
		trace("on result");
		
	}


	function onwin(winpoint)
	{
		this.Winpoint.text =winpoint;
	}

}
	

Laya.class(warcraftUI, "warcraftUI", warcraftViewUI);
