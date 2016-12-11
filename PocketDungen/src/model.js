
//model 最先建立

var model = function ()
{
    this.instance = undefined;
    this.eventDispatch  =  new signals.Signal();
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