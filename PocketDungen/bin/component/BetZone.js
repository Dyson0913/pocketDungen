
var Event = Laya.Event;
var Handler = Laya.Handler;

var _model = model.getInstance();

function BetZone()
{
	var self = this
	BetZone.super(this);
	
	_model.gameStateUpdate.add(onState);
	_model.betCancel.add(onCancelbet);
	
	(function()
	{
		self._coinarr = []
		self._betzone = [0,1,2]
		for(i =0;i< self._betzone.length;i++)
		{
			self._coinarr.push([])
		}
		
		_model.pushValue("coinlist",self._coinarr)

		self.visible = false;
	})();

	function onState(state)
	{
		var state =  _model.appearidx(state)
		if( state >= 1)
		{
			if( state >=2)
			{				
				self.betzone_0.off(Event.CLICK, self,onbetzone);
				self.betzone_1.off(Event.CLICK, self,onbetzone);
				self.betzone_2.off(Event.CLICK, self,onbetzone);
				self.betzone_3.off(Event.CLICK, self,onbetzone);
				self.betzone_4.off(Event.CLICK, self,onbetzone);
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
			onCancelbet()
		}
			
	}

	function onbetzone(idx)
	{		
		
		coin_add(idx,_model.getValue("select_coin_idx"))

		_model.betBtnApear.dispatch(true);
	}

	function coin_add(zone_idx,select_coin_idx)
	{
		var res = _model.getValue("selectRes")[select_coin_idx]
		
		var t = Laya.loader.getRes(res);
		var coin = new Sprite
		coin.name = _model.getValue("coinValue")[select_coin_idx]
		coin.graphics.drawTexture(t, 0, 0);
		self["betzone_"+zone_idx].addChild(coin);
		var width = self["betzone_"+zone_idx].width
		var heigh = self["betzone_"+zone_idx].height
		coin.pos(Math.random()*width, Math.random()*heigh);

		var data  = self._coinarr[zone_idx]
		self._coinarr[zone_idx].push(coin)
			//ape.graphics.clear();
			// var texture = Laya.loader.getRes(textureUrl);
			// ape.graphics.drawTexture(texture, 0, 0);

			// // 设置交互区域
			// ape.size(texture.width, texture.height);

		_model.pushValue("coinlist",self._coinarr)
	}

	function coin_clear(idx)
	{
		var n = self._coinarr[idx].length
		var data = self._coinarr[idx];			
		for(k =0 ;k< n;k++)
		{			
			data[k].destroy(true)
		}
		self._coinarr[idx] = []				
	}

	function onCancelbet()
	{				
		for(i =0;i< self._betzone.length;i++)
		{
			coin_clear(i)
		}
	}

	

}

Laya.class(BetZone, "BetZone", betzoneUI);
