/*
    gswebCoundDown.js - https://juanjimeneztj.com
    Licensed under the MIT license - http://opensource.org/licenses/MIT

    Copyright (c) 2019 Juan jimenez
    CountDown created by Juan Jiménez.

    Initially this counter is counter in reverse only days,hours,minutes and seconds.
    Repository  : https://gitlab.com/juanjimeneztj/gswebcountdown.git
    Version     : 4.0.0
*/

(function( $ ){
  "use strict";

  $.fn.gswebCountDown = function( options ) {

    // Defaults
    var settings = $.extend({
        'date'      : null,
        'days'      : 0,
        'hours'     : 0,
        'minutes'   : 0,
        'seconds'   : 0
    }, options);

    var $this = $(this),$settings = settings,gswebCountDownDays,gswebCountDownHours,gswebCountDownMinutes, gswebCountDownSeconds, gswebCounter,countDownDate,gswebNow,gswebDistance;
      
    if($settings.date === null){
        if($settings.days){gswebCountDownDays = $settings.days;}else{gswebCountDownDays = 0;} 
        if($settings.hours){gswebCountDownHours = $settings.hours;}else{gswebCountDownHours = 0;} 
        if($settings.minutes){gswebCountDownMinutes = $settings.minutes;}else{gswebCountDownMinutes = 0;} 
        if($settings.seconds){gswebCountDownSeconds = $settings.seconds;}else{gswebCountDownSeconds = 0;} 

        if (gswebCountDownHours < 10) { gswebCountDownHours = "0"+parseInt(gswebCountDownHours); } 
        if (gswebCountDownMinutes < 10) { gswebCountDownMinutes = "0"+parseInt(gswebCountDownMinutes); } 
        if (gswebCountDownSeconds < 10){ gswebCountDownSeconds = "0"+parseInt(gswebCountDownSeconds); } 

        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);

        $(document).ready(function(){
            gswebCounter = setInterval(function(){
                if(gswebCountDownSeconds > 0){
                    gswebCountDownSeconds--;
                }else{
                    if(gswebCountDownMinutes > 0){
                        gswebCountDownMinutes--;
                        gswebCountDownSeconds = 59;
                    }else{
                        if(gswebCountDownHours > 0){
                            gswebCountDownHours--;
                            gswebCountDownMinutes = 59;
                            gswebCountDownSeconds = 59;
                        }else{
                            if(gswebCountDownDays > 0){
                                gswebCountDownDays--;
                                gswebCountDownHours = 23;
                                gswebCountDownMinutes = 59;
                                gswebCountDownSeconds = 59;
                            }else{
                                clearInterval(gswebCounter);
                            }
                        }
                    }
                }

                if (gswebCountDownHours < 10) { gswebCountDownHours = "0"+parseInt(gswebCountDownHours); } 
                if (gswebCountDownMinutes < 10) { gswebCountDownMinutes = "0"+parseInt(gswebCountDownMinutes); } 
                if (gswebCountDownSeconds < 10){ gswebCountDownSeconds = "0"+parseInt(gswebCountDownSeconds); } 

                $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
            },1000);

        });
    }else{
        if($settings.date){
            countDownDate = new Date($settings.date).getTime();
        }else{
            countDownDate = new Date().getTime();
        }

        var x = setInterval(function() {
            gswebNow = new Date().getTime();
            gswebDistance = countDownDate - gswebNow;

            gswebCountDownDays = Math.floor(gswebDistance / (1000 * 60 * 60 * 24));
            gswebCountDownHours = Math.floor((gswebDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            gswebCountDownMinutes = Math.floor((gswebDistance % (1000 * 60 * 60)) / (1000 * 60));
            gswebCountDownSeconds = Math.floor((gswebDistance % (1000 * 60)) / 1000);

            if (gswebCountDownDays < 10) { gswebCountDownDays = "0"+parseInt(gswebCountDownDays); } 
            if (gswebCountDownHours < 10) { gswebCountDownHours = "0"+parseInt(gswebCountDownHours); } 
            if (gswebCountDownMinutes < 10) { gswebCountDownMinutes = "0"+parseInt(gswebCountDownMinutes); } 
            if (gswebCountDownSeconds < 10) { gswebCountDownSeconds = "0"+parseInt(gswebCountDownSeconds); } 

            $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);

            if (gswebDistance < 0) {
                clearInterval(x);
                $this.html("00:00:00:00");
            }
        }, 1000);
    }

  };

})( jQuery );