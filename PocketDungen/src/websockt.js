
var socket = function ()
{
    this.instance = undefined;
    
}

socket.getInstance = function ()
{
    if (this.instance == undefined)
    {
        this.instance = new socket();
        
    }
    return this.instance;
}


socket.prototype.Connect = function ()
{
    //var token = "e4da3b7fbbce2345d7772b0674a318d5";
    //var token = "a4a042cf4fd6bfb47701cbc8a1653ada";
    var token = "11111";
    //var url = "ws://52.197.7.184:8001/gamesocket/token/"+token;
    // var url = "wss://www.didusoftgaming.com:8001/gamesocket/token/"+token;

   
    var url = "ws:/45.76.97.239:58299/gamesocket/"+token;
    this.ws = new WebSocket(url);
   

    this.ws.onmessage = this.onMessage.bind(this);
    this.ws.onerror = this.displayError.bind(this);
    this.ws.onopen = this.connectionOpen.bind(this);
    this.ws.onclose = this.socketclose.bind(this);
};


socket.prototype.connectionOpen = function ()
{
    trace('connected\n');
    trace(this.ws);
     var ret = {};
            ret['id'] = 1111;
            ret['game_id'] = 111;
            ret['timestamp'] = 1111;
            ret['game_type'] = -1;
            ret['message_type'] = -1;
            var retjson = JSON.stringify(ret);
            this.ws.send(retjson)
           
           trace(retjson);
};

socket.prototype.onMessage = function (message)
{
    trace("message = "+message)
    //   myText.text = myText.text + message.data;
    var data = JSON.parse(message.data);
    trace("data = "+data)
    // if(data.hasOwnProperty(WebSocketNameTag.MessageType))
    //     if(data[WebSocketNameTag.GameType] == "Lobby" && (data[WebSocketNameTag.MessageType] == MessageNameTag.MsgKeepLive))
    //         return;
    // this.callback.call(this.callbackContext, data);

};

socket.prototype.displayError = function (err)
{
    trace('Websocketerror: ' + err);
};


socket.prototype.sendMessage = function (msg)
{
    if(this.ws != null)
     this.ws.send(msg);
}

socket.prototype.socketclose = function(msg)
{
    trace('Websocket onclose: ' + msg);
}