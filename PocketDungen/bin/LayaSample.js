(function()
{
	var Stage   = Laya.Stage;
	var Text    = Laya.Text;
	var Browser = Laya.Browser;
	var WebGL   = Laya.WebGL;

	var Handler = Laya.Handler;
	var Loader  = Laya.Loader;
	var _classUtils  = laya.utils.ClassUtils;
	var _model;

	var Stat    = Laya.Stat;

	(function()
	{
		// 不支持WebGL时自动切换至Canvas	
		Laya.init(1280, 720, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#232628";
		
		Stat.show(10,10);

		_model = model.getInstance();
		_model.socket = socket.getInstance();

		//res load
		var assets = [];
		assets.push(
		{
			url: "res/atlas/share.json",type: Loader.ATLAS
		});
		assets.push(
		{
			url: "res/atlas/loading.json",type: Loader.ATLAS
		});
		assets.push(
		{
			url: "res/atlas/lobby.json",type: Loader.ATLAS
		});
		assets.push(
		{
			url: "res/atlas/comp.json",type: Loader.ATLAS
		});
		assets.push(
		{
			url: "res/sound/UI_Spin.mp3",type: Loader.SOUND
		});
		assets.push(
		{
			url: "res/sound/UI_Stop.mp3",type: Loader.SOUND
		});
		assets.push(
		{
			url: "res/sound/UI_Normal_Link.mp3",type: Loader.SOUND
		});
		assets.push(
		{
			url: "res/sound/UI_Bet.mp3",type: Loader.SOUND
		});
		assets.push(
		{
			url: "res/sound/UI_DeBet.mp3",type: Loader.SOUND
		});
		assets.push(
		{
			url: "res/sound/slot_BGM.mp3",type: Loader.SOUND
		});
		assets.push(
		{
			url: "res/sound/FreeGame.mp3",type: Loader.SOUND
		});
		assets.push(
		{
			url: "res/sound/BonusGame.mp3",type: Loader.SOUND
		});
		
		Laya.loader.load(assets, Handler.create(this, onAssetsLoaded));


		_model.login_ok.add(onlogok);
		_model.lobbylist_getok.add(onloadlobby);
		_model.in_game.add(unloadlobby);

		//提示		
    	_model.comfirmHint.add(onhintok)
		
		_model.openview.add(onOpenView)
		_model.closeview.add(oncloseView);
		
	})();

	function onAssetsLoaded()
	{
		trace(" onAssetsLoaded ")
		
		//先加載提示元件
		_model.pushView("hint",new HintUI());	

		_model.pushView("login",new logingUI());
		_model.current_view_name ="login";
		Laya.stage.addChild(_model.getView("login"));

	}


	function onlogok()
	{
		_model.eventHandle("query_lobby_list",[]);
  	}
	
	function onloadlobby()
	{
		Laya.stage.removeChild(_model.getView(_model.current_view_name));
		_model.removeView(_model.current_view_name)

		if( _model.current_view_name == "login") 
		{
			//from login -> lobby
			Loader.clearRes("res/atlas/loading.json")
			onlobby()
		} 
		else
		{
			//from game back to lobby  ,del game res
			if(this.join_game == 0 )
			{
				
				trace(Laya.loader.getRes("res/atlas/game.json"));
				Loader.clearRes("res/atlas/game.json") 
				trace(Laya.loader.getRes("res/atlas/game.json"));
			}
			if(this.join_game == 2 )
			{
				//baccarat
				Loader.clearRes("res/BitmapFont/tableFont.fnt")
				Loader.clearRes("res/BitmapFont/tableFont.png")
				Loader.clearRes("res/atlas/timer.json")
				Loader.clearRes("res/atlas/Coin.json")
				Loader.clearRes("res/atlas/poker.json")
				Loader.clearRes("res/atlas/settle.json")
			}
			
			Laya.loader.load([{url: "res/atlas/lobby.json",type: Loader.ATLAS}], Handler.create(this, onlobby));
		}
	}

	function onlobby()
	{
		
		//清上一個場景
		//Laya.stage.removeChild(_model.getView(_model.current_view_name));
		//Loader.clearRes("res/atlas/loading.json");
		
		if(_model.getView("lobby") == undefined )
		{
			trace("first create lobby")
			_model.pushView("lobby",new lobbyUI());
		} 
		
		_model.current_view_name = "lobby";
		Laya.stage.addChild(_model.getView("lobby"));

		
	}
	
	function unloadlobby()
	{
		Laya.stage.removeChild(_model.getView(_model.current_view_name));
		_model.removeView(_model.current_view_name)
		Loader.clearRes("res/atlas/lobby.json"); 

		//judge which game
		if( _model.join_game == 0 )
		{
			//先加載freegame
			_model.pushView("freeGame",new FreeGame());
			_model.pushView("bonusGame",new BonusGame());

			//hope slot
			Laya.loader.load([{url: "res/atlas/game.json",type: Loader.ATLAS}], Handler.create(this, onIntoGame));
		
		}
		if( _model.join_game == 2 )
		{
			Laya.loader.load([{url: "res/BitmapFont/tableFont.fnt",type: Loader.XML}]);
			Laya.loader.load([{url: "res/BitmapFont/tableFont.png",type: Loader.IMAGE}]);
			
			Laya.loader.load([{url: "res/atlas/settle.json",type: Loader.ATLAS}]);
			Laya.loader.load([{url: "res/atlas/timer.json",type: Loader.ATLAS}]);
			Laya.loader.load([{url: "res/atlas/Coin.json",type: Loader.ATLAS}]);
			Laya.loader.load([{url: "res/atlas/poker.json",type: Loader.ATLAS}], Handler.create(this, onIntobaccrat));
		}

	}

	function onIntoGame()
	{
		//Laya.stage.removeChild(_model.getView(_model.current_view_name));
		//_model.removeView(_model.current_view_name)
		

		if(_model.getView("warcraft") == undefined )
		{
			trace("first create warcraft")
			_model.pushView("warcraft",new warcraftUI());
		}
		
		_model.current_view_name = "warcraft";
		Laya.stage.addChild(_model.getView("warcraft"));

		 //TODO 實際帶入
         _model.cashin.dispatch(1000,2000);
	}

	function onIntobaccrat()
	{
		if(_model.getView("baccarat") == undefined )
		{
			trace("first create baccarat")
			_model.pushView("baccarat",new baccaratUI());
		}
		
		_model.current_view_name = "baccarat";
		Laya.stage.addChild(_model.getView("baccarat"));

		 //TODO 實際帶入
         _model.cashin.dispatch(1000,2000);
	}
	    
	function onhintok()
	{
		trace("ok");
		Laya.stage.removeChild(_model.getView("hint"))

		//判定是什麼回調
		//if(_model.hint_msg == "multilogin! want to kick another login?")
		//{
		//	_model.eventHandle("kickOtherDevice");
		//}
	}


	function onOpenView(viewname)
	{
		var view = _model.getView(viewname)
		Laya.stage.addChild(view);
		view.onAppear();
	}
	
	function oncloseView(viewname)
	{
		Laya.stage.removeChild(_model.getView(viewname))
	}


})();