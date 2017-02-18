
var Scene={};

var login_name;
var login_pw;
var uuid;
//model 最先建立

var model = function ()
{
    this.instance = undefined;
    this.eventDispatch  =  new signals.Signal();
    this.login_ok  =  new signals.Signal();
    this.lobbylist_getok  =  new signals.Signal();
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

model.prototype.start = function ()
{
    this.socket.Connect();
};

model.prototype.eventHandle = function (name,data)
{
   switch(name) 
   {
       case "login":
        this.start();
       break;
       case "login_ok":
        uuid = data[0].uuid;
        //trace("uuid = "+uuid)
        this.login_ok.dispatch();
       break;
       case "query_lobby_list":
        var msg = {"uuid": uuid,"module":"lobby","cmd":"request_gamelist"};
        this.socket.sendMessage(JSON.stringify(msg));
       break;
       case "lobby_waitting":
        trace("lobby info=",data[0].gamelist)
        //var msg = {  "uuid": uuid,"module":"lobby","cmd":"request_gamelist"};
        //this.socket.sendMessage(msg);
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