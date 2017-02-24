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

	var _loging;
	var _test;

	(function()
	{
		// 不支持WebGL时自动切换至Canvas	
		Laya.init(1280, 720, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#232628";
		
		_model = model.getInstance();
		_model.socket = socket.getInstance();

		//event listen
		trace("111");

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
			url: "res/atlas/game.json",type: Loader.ATLAS
		});
		
		Laya.loader.load(assets, Handler.create(this, onAssetsLoaded));


		_model.login_ok.add(onlogok);
		_model.lobbylist_getok.add(onlobby);
		_model.in_game.add(onIntoGame);
		
	})();

	function onAssetsLoaded()
	{
		trace(" onAssetsLoaded ")
		//var robotData = Laya.Loader.getRes("res/atlas/assets.json");
		
	//	view = _classUtils.getInstance("res/atlas/assets.json");
		//Laya.stage.addChild(view);
		//Laya.stage.addChild(new TestUI());
		_model.pushView("login",new logingUI());
		Laya.stage.addChild(_model.getView("login"));
		//this.stage.addChild(robotData);
	}


	function onlogok()
	{
    	trace("logok ,get lobby list")
		_model.eventHandle("query_lobby_list",[]);
  	}
	
	function onlobby()
	{

		Laya.stage.removeChild(_model.getView("login"));
		//Laya.stage.destroy(_loging);
		_model.pushView("lobby",new lobbyUI());
		Laya.stage.addChild(_model.getView("lobby"));
	}
	
	function onIntoGame()
	{
		Laya.stage.removeChild(_model.getView("lobby"));
		_model.pushView("warcraft",new warcraftUI());
		Laya.stage.addChild(_model.getView("warcraft"));
	}
	

})();