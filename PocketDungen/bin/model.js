
//dictionary
var Scene={};

var current_view_name;
//loging & lobby
var login_name;
var login_pw;
var uuid;
var game_list;
var join_game;
var game_id;

//TODO total_point

//game command
var take_in_gamePoint =2000;

//eash game
var line;  //幾輪幾線的線
var symbol_num; //總symbol 數量
var odds;  //賠率表 symbol_N{N0~NM):[中1格倍率,2格,3格,4格,5格] 
                   //(W= wild card):[0,20,200,500,1000] 
                   //(F= free game):[0,0,5,10,15] (免費轉動次數)
                   //(B=bouns game):[0,0,1,2,3] (bounds game 種類)
//顥示賠率表用,不計算
var winAniSet;

var hint_msg;
var betamount;

//model 最先建立

var model = function ()
{
    this.instance = undefined;
    this.eventDispatch  =  new signals.Signal();
    this.login_ok  =  new signals.Signal();
    this.lobbylist_getok  =  new signals.Signal();
    this.in_game =  new signals.Signal();

    //game share
    this.cashin =  new signals.Signal();
    this.winMoney =  new signals.Signal();

    //game self
    this.spinResult =  new signals.Signal();
    this.rollercomplet =  new signals.Signal();
    this.rollerAnicomplet =  new signals.Signal();

    this.Intofreegame =  new signals.Signal();
    this.IntoBonusgame =  new signals.Signal();

    this.hint =  new signals.Signal();     
    this.comfirmHint =  new signals.Signal();

    //viewclose
    this.closeview =  new signals.Signal();

    this.socket = undefined;
    this.odds = [];
    this.winAniSet = [];
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
     trace("CMD = "+name)
   switch(name) 
   {
       case "login":
        this.start();
       break;
       case "login_fail":
        this.hint_msg = data[0].reason
        this.uuid = data[0].uuid;
        this.hint.dispatch();
       break;
        case "kickOtherDevice":
         //要踢人,token 也要傳,驗證用
         var token = this.login_name +"_"+ this.login_pw;
         var msg = {"client_id": this.uuid,"module":"auth","cmd":"kickOtherDevice","token":token};
        break;
       case "login_ok":
        this.uuid = data[0].uuid;
       
        this.login_ok.dispatch();
       break;
       case "query_lobby_list":
        var msg = {"uuid": this.uuid,"module":"lobby","cmd":"request_gamelist"};
        this.socket.sendMessage(JSON.stringify(msg));
       break;
       case "lobby_waitting":
        trace("lobby info=",data[0].gamelist)
        game_list = data[0].gamelist
         this.lobbylist_getok.dispatch();
        //var msg = {  "uuid": uuid,"module":"lobby","cmd":"request_gamelist"};
        //this.socket.sendMessage(msg);
       break;
        case "leave_game":
         var msg = {"uuid": this.uuid,"module":game_list[this.join_game],"room":"1","cmd":"leave_game","game_id":this.game_id};
         this.socket.sendMessage(JSON.stringify(msg));
       break;
       case "join_game":
        //trace("list ="+game_list)
        //trace("join ="+this.join_game)
       //  trace("join ="+game_list[this.join_game]);
       var msg = {"uuid": this.uuid,"module":game_list[this.join_game],"room":"1","cmd":"request_join"};
        this.socket.sendMessage(JSON.stringify(msg));
       break;
       case "game_join_fail":
        trace("reason = "+data[0].error_code)
       break;
        case "game_join_ok":
        this.game_id = data[0].game_id;
        this.take_in_gamePoint = data[0].UserPoint
         this.line = data[0].Line
        this.symbol_num = data[0].Symbol_Num
        var dat = data[0].odds
         this.odds.push(dat.N0)
         this.odds.push(dat.N1)
         this.odds.push(dat.N2)
         this.odds.push(dat.N3)
         this.odds.push(dat.N4)
         this.odds.push(dat.N5)
         this.odds.push(dat.N6)
         this.odds.push(dat.N7)
         this.odds.push(dat.W)
         this.odds.push(dat.S)
       
         this.in_game.dispatch();

        
       break;
       
       
        case "idle_kick":
             //pop hint ,click and go back
            // var msg = {"uuid": uuid,"module":game_list[this.join_game],"room":"1","cmd":"leave_game","game_id":this.game_id};
            // trace("idel_kick",msg);
            //this.socket.sendMessage(JSON.stringify(msg));
        break;

       //game action
        case "spin":
        trace("betamount = "+this.betamount);
         var msg = {"uuid": this.uuid,"module":game_list[this.join_game],"cmd":"gamespin","Line":25,"Bet":this.betamount};
         this.socket.sendMessage(JSON.stringify(msg));
        break;
        case "spin_result":
         var result = data[0].gameResult
         trace("result.state "+ result.state);
         trace("result.grid "+ result.grid);
         trace("result.winLine "+ result.winLine);
          trace("result.bonusWin "+ result.bonusWin);
          trace("result.freeMode "+ result.freeMode);
           trace("result.freeCount "+ result.freeCount);
           trace("result.freeTotalCount "+ result.freeTotalCount);
           trace("result.freeTotalPoint "+ result.freeTotalPoint);
           trace("result.userPoint "+ result.userPoint);
           trace("result.nowJackPot "+ result.nowJackPot);
           trace("result.winJackPotPoint "+ result.winJackPotPoint);

           this.spinResult.dispatch(); 
        break;
   }

};

model.prototype.pushView = function (name,view)
{
    Scene[name] = view;
}

model.prototype.removeView = function (name)
{
    if(name in Scene)  delete  Scene[name]
}

model.prototype.getView = function (name)
{
    return Scene[name];
}