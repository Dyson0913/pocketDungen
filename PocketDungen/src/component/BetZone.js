
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

function BetZone()
{
	var self = this
	BetZone.super(this);
	
	_model.gameStateUpdate.add(onState);
	_model.betCancel.add(oncancelbet);	
	_model.betok.add(onbetok);
	_model.betTimeout.add(onstopbet);
	_model.settleInfo.add(onsettleInfo);	
	
	(function()
	{
		self._coinarr = []
		self._unfirm_coin =[]
		self._betzone = [0,1,2,3,4]
		for(i =0;i< self._betzone.length;i++)
		{
			self._coinarr.push([])
			self._unfirm_coin.push([])
			self["zoneEffect_"+i].visible = false
		}
		
		_model.pushValue("comfirm_betlist",self._coinarr)
		_model.pushValue("unfirm_coin",self._unfirm_coin)

		self.visible = false;

		
	})();

	function onState(state)
	{
		var state =  _model.appearidx(state)
		if( state >= 1)
		{
			if( state >=2)
			{				
				onstopbet()
			}
			else if (state == 1)
			{
				self.betzone_0.on(Event.CLICK, self, onbetzone,[0]);
				self.betzone_1.on(Event.CLICK, self, onbetzone,[1]);
				self.betzone_2.on(Event.CLICK, self, onbetzone,[2]);
				self.betzone_3.on(Event.CLICK, self, onbetzone,[3]);
				self.betzone_4.on(Event.CLICK, self, onbetzone,[4]);

				self.visible = true;
			}
		}
		else
		{
			self.visible = false;
			roundClear()
			zone_reset()
		}
			
	}

	function onstopbet()
	{
		self.betzone_0.off(Event.CLICK, self,onbetzone);
		self.betzone_1.off(Event.CLICK, self,onbetzone);
		self.betzone_2.off(Event.CLICK, self,onbetzone);
		self.betzone_3.off(Event.CLICK, self,onbetzone);
		self.betzone_4.off(Event.CLICK, self,onbetzone);
	}

	function onbetzone(idx)
	{		
		self["zoneEffect_"+idx].visible = true

		coin_add(idx,_model.getValue("select_coin_idx"))
		_model.betBtnApear.dispatch(true);

		_model.playerSound("res/sound/coinPlace.mp3")
		_tween.to(self,{},100,Laya.Ease.linearNone,new Handler(this,zone_reset) )
	}

	function zone_reset()
	{		
		for(i =0;i< self._betzone.length;i++)
		{
			self["zoneEffect_"+i].visible = false
		}
	}
	
	function onsettleInfo(winstate,settlePoint,p)
	{        
       var paytable =_model.getValue("sttlepaytable")

		for(i =0;i< self._betzone.length;i++)
		{
			if( paytable[i] !=0 ) self["zoneEffect_"+i].visible = true
		}
	}

	function coin_add(zone_idx,select_coin_idx)
	{
		var res = _model.getValue("selectRes")[select_coin_idx]
		
		var t = Laya.loader.getRes(res);
		var coin = new Sprite		
		coin.name = _model.getValue("coinValue")[select_coin_idx]
		coin.graphics.drawTexture(t, 0, 0);
		coin.scaleX = 0.5
		coin.scaleY = 0.5
		self["coinzone_"+zone_idx].addChild(coin);		
		var width = self["coinzone_"+zone_idx].width - (t.width *0.5)
		var heigh = self["coinzone_"+zone_idx].height - (t.height *0.5)		
		var x = _model.getRandomArbitrary(0,width)
		var y = _model.getRandomArbitrary(0,heigh)

		coin.pos(x,y);		

		var data  = self._unfirm_coin[zone_idx]
		self._unfirm_coin[zone_idx].push(coin)
			//ape.graphics.clear();
			// var texture = Laya.loader.getRes(textureUrl);
			// ape.graphics.drawTexture(texture, 0, 0);

			// // 设置交互区域
			// ape.size(texture.width, texture.height);

		_model.pushValue("unfirm_coin",self._unfirm_coin)
	}

	function oncancelbet()
	{
		 for(i =0;i< self._betzone.length;i++)
		{
			coin_clear(i,self._unfirm_coin)
		}

		_model.pushValue("unfirm_coin",self._unfirm_coin)
	} 


	function roundClear()
	{
		for(i =0;i< self._betzone.length;i++)
		{
			coin_clear(i,self._coinarr)
		}

		_model.pushValue("comfirm_betlist",self._coinarr)
	}
	
	function coin_clear(idx,dataArr)
	{
		var n = dataArr[idx].length
		var data = dataArr[idx];			
		for(k =0 ;k< n;k++)
		{			
			data[k].destroy(true)
		}
		dataArr[idx] = []				
	}

	function onbetok()
	{
		 //uncomfirm_bet move to bet
		 for(i =0;i< self._betzone.length;i++)
		{
			uncomfirm_to_comfirm(i)
		} 

		//just clear data,not image
		for(i =0;i< self._betzone.length;i++)
		{			
			self._unfirm_coin[i] = []					
		}

		_model.pushValue("unfirm_coin",self._unfirm_coin)
	}

	function uncomfirm_to_comfirm(idx)
	{		
		var data = self._unfirm_coin[idx];
		
		var copydata = data.slice(0);		
		if( copydata.length ==0 ) return
		
		for(k =0;k< copydata.length;k++)
		{			
		 	self._coinarr[idx].push(copydata[k])
		} 

		_model.pushValue("comfirm_betlist",self._coinarr)
	}

}

Laya.class(BetZone, "BetZone", betzoneUI);
