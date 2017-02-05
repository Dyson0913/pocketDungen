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
		
		Laya.init(800, 600, WebGL);
		trace("layasimple")
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#232628";

		//setup();
		
		_model = model.getInstance();
		_model.socket = socket.getInstance();

		//event listen
		_model.login_ok.add(onStarted);

		_model.start();
		
		
	})();

	function onStarted()
	{
    	trace("get onStarted ")
		
		var assets = [];
		assets.push(
		{
			url: "res/atlas/loading.json",
			type: Loader.ATLAS
		});
		Laya.loader.load(assets, Handler.create(this, onAssetsLoaded));
  	}

	function onAssetsLoaded()
	{
		trace(" onAssetsLoaded ")
		//var robotData = Laya.Loader.getRes("res/atlas/assets.json");
		
	//	view = _classUtils.getInstance("res/atlas/assets.json");
		//Laya.stage.addChild(view);
		Laya.stage.addChild(new TestUI());
		//this.stage.addChild(robotData);
	}

	function setup()
	{
		// 该文本自动适应尺寸
		var autoSizeText = createSampleText();
		autoSizeText.overflow = Text.VISIBLE;
		autoSizeText.y = 50;

		// 该文本被限制了宽度
		var widthLimitText = createSampleText();
		widthLimitText.width = 100;
		widthLimitText.y = 180;

		//该文本被限制了高度 
		var heightLimitText = createSampleText();
		heightLimitText.height = 20;
		heightLimitText.y = 320;
	}

	function createSampleText()
	{
		var text = new Text();
		text.overflow = Text.HIDDEN;

		text.color = "#FFFFFF";
		text.font = "Impact";
		text.fontSize = 20;
		text.borderColor = "#FFFF00";
		text.x = 80;

		Laya.stage.addChild(text);
		text.text = "A POWERFUL HTML5 ENGINE ON FLASH TECHNICAL\n" + "A POWERFUL HTML5 ENGINE ON FLASH TECHNICAL\n" + "A POWERFUL HTML5 ENGINE ON FLASH TECHNICAL";

		return text;
	}
})();