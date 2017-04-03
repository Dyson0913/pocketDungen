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
		
		//Stat.show(10,10);

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
		// assets.push(
		// {
		// 	url: "res/atlas/game.json",type: Loader.ATLAS
		// });
		
		

		Laya.loader.load(assets, Handler.create(this, onAssetsLoaded));


		_model.login_ok.add(onlogok);
		_model.lobbylist_getok.add(onloadlobby);
		_model.in_game.add(unloadlobby);

		//提示
		_model.hint.add(onhint)
		_model.closeHint.add(onhintok)
    	_model.comfirmHint.add(onhintcancel)

		

	})();

	function onAssetsLoaded()
	{
		trace(" onAssetsLoaded ")

		//先加載提示元件
		_model.pushView("hint",new HintUI());

		_model.pushView("login",new logingUI());
		_model.current_view_name ="login";
		Laya.stage.addChild(_model.getView("login"));

		//this.stage.addChild(robotData);
	}


	function onlogok()
	{
    	trace("logok ,get lobby list")
		_model.eventHandle("query_lobby_list",[]);
  	}
	
	function onloadlobby()
	{
		Laya.stage.removeChild(_model.getView(_model.current_view_name));
		_model.removeView(_model.current_view_name)
		if( _model.current_view_name =="login") 
		{
			trace(Laya.loader.getRes("res/atlas/loading.json"));
			Loader.clearRes("res/atlas/loading.json")
			trace(Laya.loader.getRes("res/atlas/loading.json"));
			onlobby()
		} 
		else
		{
			//del game res
			trace(Laya.loader.getRes("res/atlas/game.json"));
			Loader.clearRes("res/atlas/game.json") 
			trace(Laya.loader.getRes("res/atlas/game.json"));
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
		trace(Laya.loader.getRes("res/atlas/lobby.json"));
		Loader.clearRes("res/atlas/lobby.json"); 
		trace(Laya.loader.getRes("res/atlas/lobby.json"));
		Laya.loader.load([{url: "res/atlas/game.json",type: Loader.ATLAS}], Handler.create(this, onIntoGame));
		//onIntoGame()
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
	
	function onhint()
	{
		//hint windown		
		 _model.hint_pop.dispatch();
		 
		Laya.stage.addChild(_model.getView("hint"));
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
	
	function onhintcancel()
	{
		trace("fale");
		Laya.stage.removeChild(_model.getView("hint"))
	}

})();