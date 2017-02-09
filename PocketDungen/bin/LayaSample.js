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

	(function()
	{
		// 不支持WebGL时自动切换至Canvas	
		Laya.init(1920, 1080, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#232628";
		
		_model = model.getInstance();
		_model.socket = socket.getInstance();

		//event listen

		//res load
		var assets = [];
		assets.push(
		{
			url: "res/atlas/loading.json",type: Loader.ATLAS
		});
		Laya.loader.load(assets, Handler.create(this, onAssetsLoaded));


		_model.login_ok.add(onlogok);
		
		
	})();

	function onAssetsLoaded()
	{
		trace(" onAssetsLoaded ")
		//var robotData = Laya.Loader.getRes("res/atlas/assets.json");
		
	//	view = _classUtils.getInstance("res/atlas/assets.json");
		//Laya.stage.addChild(view);
		//Laya.stage.addChild(new TestUI());
		Laya.stage.addChild(new logingUI());
		//this.stage.addChild(robotData);
	}


	function onlogok()
	{
    	trace("get onlogok ")
		Laya.stage.addChild(new TestUI());
  	}
	
	
})();