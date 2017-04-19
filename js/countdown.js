function Countdown()
{
    var today = new Date();
    var targetday = new Date(2017,3,21); //put target date here YY/MM/DD
    //please note that for js January is 0 not 1. 
    var mnth = today.getMonth();
    var number_of_days_left = Math.floor(Math.abs((targetday.getTime() - today.getTime())/(24*60*60*1000)));

    var hr = (24-today.getHours())%24 ;
    var min = (60-today.getMinutes())%60;
    var sec = (60-today.getSeconds())%60;
    this.start_time = ""+number_of_days_left+":"+hr+":"+min+":"+sec+"";
    this.name = "secondss";
}

Countdown.prototype.init = function()
{
    this.reset();
    setInterval(this.name + '.tick()', 1000);
}

Countdown.prototype.reset = function()
{
    time = this.start_time.split(":");
    this.days = parseInt(time[0]);
    this.hours = parseInt(time[1]);
    this.minutes = parseInt(time[2]);
    this.seconds = parseInt(time[3]);
    this.update_target();
}

Countdown.prototype.tick = function()
{
    if(this.seconds==0){
        if(this.minutes>0){
            this.seconds = 59;
            this.minutes = this.minutes - 1;
        }
        else if(this.minutes==0){
            if(this.hours>0){
                this.minutes = 59;
                this.hours = this.hours-1;
                this.seconds = 59;
            }
            else if(this.hours==0){
                if(this.days>0){
                    this.hours = 23;
                    this.days = this.days-1;
                    this.minutes = 59;
                    this.seconds = 59;
                }
            }
        }
    }
    else
        this.seconds = this.seconds - 1;
    this.update_target();
}

Countdown.prototype.update_target = function()
{
    seconds = this.seconds;
    minutes = this.minutes;
    hours = this.hours;
    days = this.days;
    if(seconds<10)
        seconds = "0"+seconds;
    if(minutes<10)
        minutes = "0"+minutes;
    if(hours<10)
        hours = "0"+hours;
    document.getElementById('days').innerHTML = '<h1>'+days+'</h1><p><b>Days</b></p>';
    document.getElementById('hours').innerHTML = '<h1>'+hours+'</h1><p><b>Hours</b></p>';
    document.getElementById('minutes').innerHTML = '<h1>'+minutes+'</h1><p><b>Minutes</b></p>';
    document.getElementById('seconds').innerHTML = '<h1>'+seconds+'</h1><p><b>Seconds</b></p>';
}



