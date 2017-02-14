
var Scene={};

//model 最先建立

var model = function ()
{
    this.instance = undefined;
    this.eventDispatch  =  new signals.Signal();
    this.login_ok  =  new signals.Signal();
    this.socket = undefined;
}

model.getInstance = function ()
{
    if (this.instance == undefined)
    {
        this.instance = new model();
    }
    return this.instance;
}

model.prototype.registEvent = function ()
{
    //regest event here
};

model.prototype.start = function ()
{
    this.socket.Connect();
};

model.prototype.eventHandle = function (name,data)
{
   switch(name) 
   {
       case "login_ok":
       this.login_ok.dispatch();
       break;
       case "login":
       this.start();
       break;
   }

};

model.prototype.pushView = function (name,view)
{
    Scene[name] = view;
}

model.prototype.getView = function (name)
{
    return Scene[name];
}