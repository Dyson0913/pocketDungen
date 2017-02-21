
var Scene={};

var login_name;
var login_pw;
var uuid;
var game_list;
var join_game;
var game_id;
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
     trace("CMD = "+name)
   switch(name) 
   {
       case "login":
        this.start();
       break;
       case "login_ok":
        uuid = data[0].uuid;
       
        this.login_ok.dispatch();
       break;
       case "query_lobby_list":
        var msg = {"uuid": uuid,"module":"lobby","cmd":"request_gamelist"};
        this.socket.sendMessage(JSON.stringify(msg));
       break;
       case "lobby_waitting":
        trace("lobby info=",data[0].gamelist)
        game_list = data[0].gamelist
         this.lobbylist_getok.dispatch();
        //var msg = {  "uuid": uuid,"module":"lobby","cmd":"request_gamelist"};
        //this.socket.sendMessage(msg);
       break;
       case "join_game":
        //trace("list ="+game_list)
        //trace("join ="+this.join_game)
       //  trace("join ="+game_list[this.join_game]);
       var msg = {"uuid": uuid,"module":game_list[this.join_game],"room":"1","cmd":"request_join"};
        this.socket.sendMessage(JSON.stringify(msg));
       break;
       case "game_join_fail":
       trace("reason = "+data[0].error_code)
       break;
        case "game_join_ok":
        this.game_id = data[0].game_id;
      // trace("reason = "+data[0].error_code)
       break;
        case "leave_game":
         var msg = {"uuid": uuid,"module":game_list[this.join_game],"room":"1","cmd":"leave_game","game_id":this.game_id};
         this.socket.sendMessage(JSON.stringify(msg));
       break;
       
        case "idle_kick":
      
             var msg = {"uuid": uuid,"module":game_list[this.join_game],"room":"1","cmd":"leave_game","game_id":this.game_id};
               trace("idel_kick",msg);
         this.socket.sendMessage(JSON.stringify(msg));
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