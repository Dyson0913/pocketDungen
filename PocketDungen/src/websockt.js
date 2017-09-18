

var _model;

var self;

var socket = function ()
{
    this.instance = undefined;
    self =this
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
    
    _model = model.getInstance();
    var token = _model.login_name +"_"+ _model.login_pw;    

    if(self.ws != undefined)
    {
        //no more create
         var msg = {"client_id": _model.uuid,"module":"auth","cmd":"try_login","token":token};
        self.sendMessage(JSON.stringify(msg));
        return
    }

    //create  socket
    var url = "ws://45.76.97.239:7000/gamesocket/"+token;
    self.ws = new WebSocket(url);
   
    self.ws.onopen = self.connectionOpen.bind(self);
    self.ws.onmessage = self.onMessage.bind(self);
    self.ws.onerror = self.displayError.bind(self);
    self.ws.onclose = self.socketclose.bind(self);
};


socket.prototype.connectionOpen = function ()
{    
    var ret = {};
    
    //var retjson = JSON.stringify(ret);
    //this.ws.send(retjson)
           
};

socket.prototype.onMessage = function (message)
{
    //trace("message = "+message)

    var data = JSON.parse(message.data);
    //trace("message = ",data);
   _model.eventHandle(data["state"],[data]);
   
};

socket.prototype.displayError = function (err)
{
    trace('Websocketerror: ' + err);
};


socket.prototype.sendMessage = function (msg)
{
    if(self.ws != null)
     self.ws.send(msg);
}

socket.prototype.socketclose = function(msg)
{
    trace('Websocket onclose: ' + msg);
};
