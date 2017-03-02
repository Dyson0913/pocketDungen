// 这段代码需要在setupDemo之前执行。
(function()
{
	// 项渲染器
	var Box   = Laya.Box;
	var Image = Laya.Image;

	var WID = 373,
		HEI = 85;

	function Item()
	{
		Item.__super.call(this);
		this.size(WID, HEI);
		this.img = new Image();
		this.addChild(this.img);

		this.setImg = function(src)
		{
			this.img.skin = src;
		}
	}
	Laya.class(Item, "Item", Box);