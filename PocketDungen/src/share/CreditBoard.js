
var Stage   = Laya.Stage;
var Event = Laya.Event;

var _model;

function CreditBoard()
{   
	var self = this
	CreditBoard.super(this);
	 _model = model.getInstance();

	 _model.gameStateUpdate.add(onState);
	_model.cashin.add(oncarrying);
	_model.betResult.add(onBetresult);
	_model.settleInfo.add(onsettleInfo);
	

    (function()
	{
		//建構式
		self.total_bet.text =""
		self.total_win.text = ""
		self.round_code.text = ""

	})();

	function onState(state)
	{
		var state =  _model.appearidx(state)
		if( state == 0)
		{			
			self.total_bet.text ="";
			self.total_win.text = "";
			self.round_code.text = String(_model.getValue("round_code"))
		}
		
			
	}


	function oncarrying()
	{
		self.game_credit.text = String(_model.getValue("game_credit"))		
	}

	function onBetresult(text)
	{
		if(text == "押注成功")
		{
			//update total bet
			var coinarr = _model.getValue("comfirm_betlist")

			var betlist = []	
			var totalbet = 0			
			for(i =0;i< coinarr.length; i++)
			{
				var data = coinarr[i];
				var n = data.length								
				for(k =0 ;k< n;k++)
				{	
					var sp = data[k];					
					totalbet += sp.name
				}				
			}	

			self.total_bet.text = String(totalbet)

			//game_credit sub
			var total_credit = _model.getValue("game_credit")
			total_credit -= totalbet
			_model.pushValue("game_credit",total_credit)
			oncarrying()				
		}
		
	}

	function onsettleInfo(winstate,settlePoint,paytable)
	{
		var coinarr = _model.getValue("comfirm_betlist")

			var betlist = []	
			var total_win = 0			
			for(i =0;i< coinarr.length; i++)
			{
				var data = coinarr[i];
				var n = data.length
				var zone_total = 0						
				for(k =0 ;k< n;k++)
				{	
					var sp = data[k];					
					zone_total += sp.name
				}		
								
				zone_total = paytable[i] * zone_total
				total_win += zone_total
			}	

			self.total_win.text = String(total_win)

			//game_credit sub
			var total_credit = _model.getValue("game_credit")
			total_credit += total_win
			_model.pushValue("game_credit",total_credit)
			oncarrying()
					
	}

}

Laya.class(CreditBoard, "CreditBoard", CreditBoardUI);
