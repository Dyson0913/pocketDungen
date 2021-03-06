
//font
var BitmapFont = laya.display.BitmapFont;
var Text       = Laya.Text;
var SoundManager = Laya.SoundManager;

//dictionary
var Scene={}; //Scene
var font={};
var dicVaule={};

var current_view_name;
//loging & lobby
var login_name;
var login_pw;
var uuid;
var game_list;
var join_game;
var join_group;
var game_id;
var total_Credit;

//joined game state
var gameState;

//game command
var take_in_gamePoint;

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

    this.login_ok  =  new signals.Signal();
    this.lobbylist_getok  =  new signals.Signal();
    this.in_game =  new signals.Signal();

    //lobby
    this.creditUpdate =  new signals.Signal();

    //game share
    this.cashin =  new signals.Signal();    
    this.gameStateUpdate = new signals.Signal();
    this.countDown = new signals.Signal();
    this.betCancel = new signals.Signal();
    this.betok = new signals.Signal();    
    this.betResult = new signals.Signal();
    this.betBtnApear = new signals.Signal();
    this.betTimeout = new signals.Signal();
    this.pokerShow = new signals.Signal();
    this.settleInfo = new signals.Signal();

    //game self
    this.spinResult =  new signals.Signal();
    this.rollercomplet =  new signals.Signal();
    this.rollerAnicomplet =  new signals.Signal();
    
         
    this.comfirmHint =  new signals.Signal();

    //viewclose
    this.openview =  new signals.Signal();
    this.closeview =  new signals.Signal();

    this.socket = undefined;
    this.odds = [];
    this.winAniSet = [];

    this.gameState = ["init","wait_bet","player_card","banker_card","settle"];
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
    //trace("CMD = ",name,data)
    var jsondata = data[0]
   switch(name) 
   {
       case "login":
        this.start();
       break;
       case "login_fail":
        this.uuid = data[0].uuid; 
        this.hintmsg(data[0].reason)
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
        this.send_pack(msg)
       break;
       case "lobby_waitting":
        this.game_list = data[0].gamelist
         this.lobbylist_getok.dispatch();
       break;

       case "query_user_credit":
        var msg = {"uuid": this.uuid,"module":"credit","cmd":"query_credit"};
        this.send_pack(msg)
        break;
        case "userCredit_update":
        this.total_Credit = data[0].total_Credit
        _model.pushValue("total_credit",data[0].total_Credit)
        _model.creditUpdate.dispatch()        
       break;

       case "takein":
         this.take_in_gamePoint = jsondata
         
         _model.pushValue("game_credit",jsondata)        


         var join_id = this.game_list[this.join_game]["game"]+"_"+_model.join_group
        var msg = {"uuid": this.uuid,"module":"credit","cmd":"take_in","takein_credit":jsondata,"game":join_id};
        this.send_pack(msg)

        break;
        case "takein_result":
         if( data[0].result == "ok")
         {
             _model.eventHandle("join_game",[]);
             _model.closeview.dispatch("takeIn");             
         }
         else
         {
             this.hintmsg(data[0].reason)
         }
         
        
        break;

         case "join_game":
             var msg = {"uuid": this.uuid,"module":this.game_list[this.join_game]["game"],"room":this.join_group,"cmd":"request_join"};
            this.send_pack(msg)
        break;

        case "leave_game":
         var msg = {"uuid": this.uuid,"module":this.game_list[this.join_game]["game"],"room":this.join_group,"cmd":"leave_game","game_id":this.game_id};
         this.send_pack(msg)
       break;
      
       
       case "game_join_fail":
        this.hintmsg(data[0].error_code)
       break;
        case "game_join_ok":

        if(this.join_game == 0 )
        {
            //hope slot
            this.game_id = data[0].game_id;
           
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
        }

        if(this.join_game == 2 )
        {
            //baccarat
            this.game_id = data[0].game_id;
            _model.pushValue("round_code","")
            
        }
       
         this.in_game.dispatch(); 
        
       break;
        case "init":
            _model.pushValue("round_code",jsondata.sn)
            _model.gameStateUpdate.dispatch(name);
        break;
        case "wait_bet":
            _model.pushValue("round_code",jsondata.sn)
            _model.pushValue("reset_time",jsondata.rest_time)

            _model.gameStateUpdate.dispatch(name);
            _model.countDown.dispatch(jsondata.rest_time);
            
            //TODO 
            if( jsondata.rest_time == 1) _model.betTimeout.dispatch()
        break;
        case "player_card":
        case "banker_card":
            _model.pushValue("round_code",jsondata.sn)

            _model.pushValue("playerpoker",jsondata.playerpoker)
            _model.pushValue("bankerpoker",jsondata.bankerpoker)

            _model.gameStateUpdate.dispatch(name);
            _model.pokerflush()
            
        break;
        case "settle":
            _model.pushValue("round_code",jsondata.sn)
            
            _model.pushValue("sttleState",jsondata.winstate)
            _model.pushValue("sttlepoint",jsondata.settlePoint)
            _model.pushValue("sttlepaytable",jsondata.settle)

            _model.gameStateUpdate.dispatch(name);
            _model.settleInfo.dispatch(jsondata.winstate,jsondata.settlePoint, jsondata.settle)
            
            _model.pushValue("playerpoker",jsondata.playerpoker)
            _model.pushValue("bankerpoker",jsondata.bankerpoker)            
            _model.pokerflush()
        break;
        
        case "bet":
            //this.game_id = join_group
             var msg = {"uuid": this.uuid,"module":"bet","cmd":"bet","game_id":this.game_id,"bet_info":jsondata};             
            this.send_pack(msg)
        break;

        case "bet_ok":                
            _model.betok.dispatch();
            _model.betResult.dispatch("押注成功");
        break;

        case "bet_fail":            
            _model.betCancel.dispatch();
            _model.betResult.dispatch("押注失敗");
            
        break;
       
        case "idle_kick":
             //pop hint ,click and go back
            // var msg = {"uuid": uuid,"module":game_list[this.join_game],"room":"1","cmd":"leave_game","game_id":this.game_id};
            // trace("idel_kick",msg);
            //this.socket.sendMessage(JSON.stringify(msg));
        break;

       //game action
        case "spin":
         var msg = {"uuid": this.uuid,"module":game_list[this.join_game],"cmd":"gamespin","Line":25,"Bet":this.betamount};
         this.send_pack(msg)
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

model.prototype.pokerflush = function()
{
    var playerpoker = _model.getValue("playerpoker")
    var bankerpoker = _model.getValue("bankerpoker")

    //0,1,2
    for(i =0;i< playerpoker.length;i++)
    {
       _model.pokerShow.dispatch(i,playerpoker[i]);
    }

    //3,4,5
    for(i =0;i< bankerpoker.length;i++)
    {
       _model.pokerShow.dispatch(i+3,bankerpoker[i]);
    }            
}


model.prototype.send_pack = function(msg)
{
     this.socket.sendMessage(JSON.stringify(msg));
}

//call hintmsg
model.prototype.hintmsg = function(msg)
{
    this.hint_msg = msg
    this.openview.dispatch("hint"); 
}

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

model.prototype.appearidx = function (state)
{
   return this.gameState.indexOf(state)
}

model.prototype.pushValue = function(key,value)
{
    dicVaule[key] = value    
}

model.prototype.getValue = function(key)
{    
    return dicVaule[key]
}

model.prototype.playerSound= function(resname)
{
    SoundManager.playSound(resname)
}

model.prototype.playerMusic= function(resname)
{
    SoundManager.playMusic(resname)
}

model.prototype.regFont = function(fontFileName,path)
{
    var test_filename = fontFileName;
    var pat = /.fnt/;
    var test_fontFileName = test_filename.replace(pat,"");
    
    //font exsit
    if (font[test_fontFileName] != null) return

    var newFont = new BitmapFont()
    var fnt = Laya.loader.getRes(fontFileName);
    var fntTxt = Laya.loader.getRes(path);
    newFont.parseFont(fnt, fntTxt);

    var pat = /.fnt/;
    fontFileName = fontFileName.replace(pat,"");

    Text.registerBitmapFont(fontFileName, newFont);
    font[fontFileName] = newFont
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
model.prototype.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
model.prototype.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}