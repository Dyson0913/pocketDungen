
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
		this._coinarr = []
		this._betzone = [0,1,2]
		for(i =0;i< this._betzone.length;i++)
		{
			this._coinarr.push([])
		}
		
		_model.pushValue("coinlist",this._coinarr)

		self.visible = false;
	})();

	function onState(state)
	{
		var state =  _model.appearidx(state)
		if( state >= 1)
		{
			self.visible = true;

			if( state >=2)
			{				
				self.betzone_0.off(Event.CLICK, self);
				self.betzone_1.off(Event.CLICK, self);
				self.betzone_2.off(Event.CLICK, self);
				self.betzone_3.off(Event.CLICK, self);
				self.betzone_4.off(Event.CLICK, self);
			}
			else if (state == 1)
			{
				self.betzone_0.on(Event.CLICK, self, onbetzone,[0]);
				self.betzone_1.on(Event.CLICK, self, onbetzone,[1]);
				self.betzone_2.on(Event.CLICK, self, onbetzone,[2]);
				self.betzone_3.on(Event.CLICK, self, onbetzone,[3]);
				self.betzone_4.on(Event.CLICK, self, onbetzone,[4]);
			}
		}
		else
		{
			self.visible = false;
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

		var data  = this._coinarr[zone_idx]
		this._coinarr[zone_idx].push(coin)
			//ape.graphics.clear();
			// var texture = Laya.loader.getRes(textureUrl);
			// ape.graphics.drawTexture(texture, 0, 0);

			// // 设置交互区域
			// ape.size(texture.width, texture.height);

		_model.pushValue("coinlist",this._coinarr)
	}

	function coin_clear(idx)
	{
		for(i =0;i< _coinarr.length; i++)
		{
			var n = this._coinarr[i].length
			var data = this._coinarr[i];
			for(k =0 ;k< n;k++)
			{
				data[k].destroy(true)
			}
		}		
	}

	function onCancelbet()
	{
		//cancel
		trace("cancel")
		for(i =0;i< this._betzone.length;i++)
		{
			coin_clear(this._betzone[i])
		}
	}

	

}

Laya.class(BetZone, "BetZone", betzoneUI);
