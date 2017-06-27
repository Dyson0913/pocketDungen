
var Event = Laya.Event;
var Handler = Laya.Handler;

var Sprite  = Laya.Sprite;
var _model = model.getInstance();

function roadBoard()
{
	var self = this
	roadBoard.super(this);	
	
	_model.gameStateUpdate.add(onState);

	(function()
	{
		//建構式		
		self.visible = false;
		_model.pushValue("history",[[7,"b"],[3,"p","bp"],[0,"t","pp"],[5,"b"]])
	})();

	function onState(state)
	{
		var state =  _model.appearidx(state)
		if( state == 1)
		{
			self.visible = true
			var history = _model.getValue("history")
			udpate_history(history)
		}
		else{
			self.visible = false;
		}
		
	}
	
	function udpate_history(history)
	{
		//[point,type,pair_type]
		var data_len = history.length
		for(ball =0;ball<6;ball++)
		{
			
			if (ball >= data_len)
			{
				//reset
				self["history_"+ball].visible = false
			}
			else
			{
				//reset
				self["history_"+ball].visible = true
				self["history_"+ball]["bPair"].visible = false
				self["history_"+ball]["pPair"].visible = false

				var data = history[ball]
				for(k =0;k<data.length;k++)
				{
					if( data[k] =="bp" ) 
					{
						self["history_"+ball]["bPair"].visible = true
						continue
					}
					else if( data[k] =="pp" )
					{
						self["history_"+ball]["pPair"].visible = true
						continue
					} 

					if (data[k] == "b")
					{
						self["history_"+ball]["history"].index = 0
						continue
					}	
					if (data[k] == "p")
					{
						self["history_"+ball]["history"].index = 1
						continue
					}	
					if (data[k] == "t")	
					{
						self["history_"+ball]["history"].index = 2
						continue
					}

					self["history_"+ball]["point"].text = data[k]
				}			
			}			
		}
		
	}
}

Laya.class(roadBoard, "roadBoard", roadBoardUI);