/*
    gswebCoundDown.js - https://juanjimeneztj.com
    Licensed under the MIT license - http://opensource.org/licenses/MIT

    Copyright (c) 2019 Juan jimenez
    CountDown created by Juan Jiménez.

    Initially this counter is counter in reverse only days,hours,minutes and seconds.
    Repository  : https://github.com/juanjimeneztj/gswebCountDown4.0.0
                  git@github.com:juanjimeneztj/gswebCountDown4.0.0.git
    Version     : 4.0.0
*/

(function( $ ){
  "use strict";

  $.fn.gswebCountDown = function( options ) {

    // Defaults
    var settings = $.extend({
        'theme'             : 'default',
        'type'              : 'default',
        'lbldays'           : true,
        'lblhours'          : true,
        'lblminutes'        : true,
        'lblseconds'        : true,
        'labels'            : false,
        'date'              : null,
        'days'              : 0,
        'hours'             : 0,
        'minutes'           : 0,
        'seconds'           : 0
    }, options);

    var $this = $(this),$settings = settings,gswebCountDownDays,gswebCountDownHours,gswebCountDownMinutes, gswebCountDownSeconds, gswebCounter,countDownDate,gswebNow,gswebDistance;
      
    if($settings.theme === 'red'){
        var gswebColumns = 4;
        
        if($settings.lbldays==false){
            gswebColumns=gswebColumns-1;
        }
        if($settings.lblhours==false){
            gswebColumns=gswebColumns-1;
        }
        if($settings.lblminutes==false){
            gswebColumns=gswebColumns-1;
        }
        if($settings.lblseconds==false){
            gswebColumns=gswebColumns-1;
        }
        switch(gswebColumns) {
            case 1:
                var css="div[gsweb-theme=red] { background: #fff; display: grid; grid-template-columns: auto; max-width: 300px; margin: 0 auto;width: 100% } div[gsweb-theme=red] > div { font-family: 'Roboto', sans-serif!important; font-weight: 300!important; display: grid; padding: 3px; text-align: center } div[gsweb-theme=red] > div:nth-of-type(2),div[gsweb-theme=red] > div:nth-of-type(5),div[gsweb-theme=red] > div:nth-of-type(8),div[gsweb-theme=red] > div:nth-of-type(11) { font-size: 16px!important; line-height: 16px!important; text-transform: uppercase } div[gsweb-theme=red] > div:nth-of-type(1),div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-top: 1px solid #fa0000; border-bottom: 1px solid #fa0000; font-size: 34px!important; line-height: 36px!important; padding: 10px 5px!important } div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-left: none; border-right: none } div[gsweb-theme=red] > div:nth-of-type(10) { border-right: 1px solid #fa0000 } div[gsweb-theme=red] > div:nth-of-type(1) { background: #fa0000; color: #fff } /* Days number */div[gsweb-theme=red] > div:nth-of-type(1) { order: 1 } /* Days label */div[gsweb-theme=red] > div:nth-of-type(2) { order: 5 } /* : */ div[gsweb-theme=red] > div:nth-of-type(3) { order: 9; display: none } /* hours number */ div[gsweb-theme=red] > div:nth-of-type(4) { order: 2 } /* Hours label */ div[gsweb-theme=red] > div:nth-of-type(5) { order: 6 } /* : */ div[gsweb-theme=red] > div:nth-of-type(6) { order: 10; display: none } /* Minutes number */div[gsweb-theme=red] > div:nth-of-type(7) { order: 3 } /* Minutes label */div[gsweb-theme=red] > div:nth-of-type(8) { order: 7 } /* : */ div[gsweb-theme=red] > div:nth-of-type(9) { order: 11; display: none }/* Seconds number */div[gsweb-theme=red] > div:nth-of-type(10) { order: 4 } /*seconds label*/div[gsweb-theme=red] > div:nth-of-type(11) { order: 8 } ";
                break;
            case 2:
                var css="div[gsweb-theme=red] { background: #fff; display: grid; grid-template-columns: auto auto; max-width: 300px; margin: 0 auto;width: 100% } div[gsweb-theme=red] > div { font-family: 'Roboto', sans-serif!important; font-weight: 300!important; display: grid; padding: 3px; text-align: center } div[gsweb-theme=red] > div:nth-of-type(2),div[gsweb-theme=red] > div:nth-of-type(5),div[gsweb-theme=red] > div:nth-of-type(8),div[gsweb-theme=red] > div:nth-of-type(11) { font-size: 16px!important; line-height: 16px!important; text-transform: uppercase } div[gsweb-theme=red] > div:nth-of-type(1),div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-top: 1px solid #fa0000; border-bottom: 1px solid #fa0000; font-size: 34px!important; line-height: 36px!important; padding: 10px 5px!important } div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-left: none; border-right: none } div[gsweb-theme=red] > div:nth-of-type(4) { border-right: 1px solid #fa0000 } div[gsweb-theme=red] > div:nth-of-type(1) { background: #fa0000; color: #fff } /* Days number */div[gsweb-theme=red] > div:nth-of-type(1) { order: 1 } /* Days label */div[gsweb-theme=red] > div:nth-of-type(2) { order: 5 } /* : */ div[gsweb-theme=red] > div:nth-of-type(3) { order: 9; display: none } /* hours number */ div[gsweb-theme=red] > div:nth-of-type(4) { order: 2 } /* Hours label */ div[gsweb-theme=red] > div:nth-of-type(5) { order: 6 } /* : */ div[gsweb-theme=red] > div:nth-of-type(6) { order: 10; display: none } /* Minutes number */div[gsweb-theme=red] > div:nth-of-type(7) { order: 3 } /* Minutes label */div[gsweb-theme=red] > div:nth-of-type(8) { order: 7 } /* : */ div[gsweb-theme=red] > div:nth-of-type(9) { order: 11; display: none }/* Seconds number */div[gsweb-theme=red] > div:nth-of-type(10) { order: 4 } /*seconds label*/div[gsweb-theme=red] > div:nth-of-type(11) { order: 8 } ";
                break;
            case 3:
                var css="div[gsweb-theme=red] { background: #fff; display: grid; grid-template-columns: auto auto auto; max-width: 300px; margin: 0 auto;width: 100% } div[gsweb-theme=red] > div { font-family: 'Roboto', sans-serif!important; font-weight: 300!important; display: grid; padding: 3px; text-align: center } div[gsweb-theme=red] > div:nth-of-type(2),div[gsweb-theme=red] > div:nth-of-type(5),div[gsweb-theme=red] > div:nth-of-type(8),div[gsweb-theme=red] > div:nth-of-type(11) { font-size: 16px!important; line-height: 16px!important; text-transform: uppercase } div[gsweb-theme=red] > div:nth-of-type(1),div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-top: 1px solid #fa0000; border-bottom: 1px solid #fa0000; font-size: 34px!important; line-height: 36px!important; padding: 10px 5px!important } div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-left: none; border-right: none } div[gsweb-theme=red] > div:nth-of-type(7) { border-right: 1px solid #fa0000 } div[gsweb-theme=red] > div:nth-of-type(1) { background: #fa0000; color: #fff } /* Days number */div[gsweb-theme=red] > div:nth-of-type(1) { order: 1 } /* Days label */div[gsweb-theme=red] > div:nth-of-type(2) { order: 5 } /* : */ div[gsweb-theme=red] > div:nth-of-type(3) { order: 9; display: none } /* hours number */ div[gsweb-theme=red] > div:nth-of-type(4) { order: 2 } /* Hours label */ div[gsweb-theme=red] > div:nth-of-type(5) { order: 6 } /* : */ div[gsweb-theme=red] > div:nth-of-type(6) { order: 10; display: none } /* Minutes number */div[gsweb-theme=red] > div:nth-of-type(7) { order: 3 } /* Minutes label */div[gsweb-theme=red] > div:nth-of-type(8) { order: 7 } /* : */ div[gsweb-theme=red] > div:nth-of-type(9) { order: 11; display: none }/* Seconds number */div[gsweb-theme=red] > div:nth-of-type(10) { order: 4 } /*seconds label*/div[gsweb-theme=red] > div:nth-of-type(11) { order: 8 } ";
                break;
            case 4:
                var css="div[gsweb-theme=red] { background: #fff; display: grid; grid-template-columns: auto auto auto auto; max-width: 300px; margin: 0 auto;width: 100% } div[gsweb-theme=red] > div { font-family: 'Roboto', sans-serif!important; font-weight: 300!important; display: grid; padding: 3px; text-align: center } div[gsweb-theme=red] > div:nth-of-type(2),div[gsweb-theme=red] > div:nth-of-type(5),div[gsweb-theme=red] > div:nth-of-type(8),div[gsweb-theme=red] > div:nth-of-type(11) { font-size: 16px!important; line-height: 16px!important; text-transform: uppercase } div[gsweb-theme=red] > div:nth-of-type(1),div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-top: 1px solid #fa0000; border-bottom: 1px solid #fa0000; font-size: 34px!important; line-height: 36px!important; padding: 10px 5px!important } div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-left: none; border-right: none } div[gsweb-theme=red] > div:nth-of-type(10) { border-right: 1px solid #fa0000 } div[gsweb-theme=red] > div:nth-of-type(1) { background: #fa0000; color: #fff } /* Days number */div[gsweb-theme=red] > div:nth-of-type(1) { order: 1 } /* Days label */div[gsweb-theme=red] > div:nth-of-type(2) { order: 5 } /* : */ div[gsweb-theme=red] > div:nth-of-type(3) { order: 9; display: none } /* hours number */ div[gsweb-theme=red] > div:nth-of-type(4) { order: 2 } /* Hours label */ div[gsweb-theme=red] > div:nth-of-type(5) { order: 6 } /* : */ div[gsweb-theme=red] > div:nth-of-type(6) { order: 10; display: none } /* Minutes number */div[gsweb-theme=red] > div:nth-of-type(7) { order: 3 } /* Minutes label */div[gsweb-theme=red] > div:nth-of-type(8) { order: 7 } /* : */ div[gsweb-theme=red] > div:nth-of-type(9) { order: 11; display: none }/* Seconds number */div[gsweb-theme=red] > div:nth-of-type(10) { order: 4 } /*seconds label*/div[gsweb-theme=red] > div:nth-of-type(11) { order: 8 } ";
                break;
            default:
                var css="div[gsweb-theme=red] { background: #fff; display: grid; grid-template-columns: auto auto auto auto; max-width: 300px; margin: 0 auto;width: 100% } div[gsweb-theme=red] > div { font-family: 'Roboto', sans-serif!important; font-weight: 300!important; display: grid; padding: 3px; text-align: center } div[gsweb-theme=red] > div:nth-of-type(2),div[gsweb-theme=red] > div:nth-of-type(5),div[gsweb-theme=red] > div:nth-of-type(8),div[gsweb-theme=red] > div:nth-of-type(11) { font-size: 16px!important; line-height: 16px!important; text-transform: uppercase } div[gsweb-theme=red] > div:nth-of-type(1),div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-top: 1px solid #fa0000; border-bottom: 1px solid #fa0000; font-size: 34px!important; line-height: 36px!important; padding: 10px 5px!important } div[gsweb-theme=red] > div:nth-of-type(4),div[gsweb-theme=red] > div:nth-of-type(7),div[gsweb-theme=red] > div:nth-of-type(10) { border-left: none; border-right: none } div[gsweb-theme=red] > div:nth-of-type(10) { border-right: 1px solid #fa0000 } div[gsweb-theme=red] > div:nth-of-type(1) { background: #fa0000; color: #fff } /* Days number */div[gsweb-theme=red] > div:nth-of-type(1) { order: 1 } /* Days label */div[gsweb-theme=red] > div:nth-of-type(2) { order: 5 } /* : */ div[gsweb-theme=red] > div:nth-of-type(3) { order: 9; display: none } /* hours number */ div[gsweb-theme=red] > div:nth-of-type(4) { order: 2 } /* Hours label */ div[gsweb-theme=red] > div:nth-of-type(5) { order: 6 } /* : */ div[gsweb-theme=red] > div:nth-of-type(6) { order: 10; display: none } /* Minutes number */div[gsweb-theme=red] > div:nth-of-type(7) { order: 3 } /* Minutes label */div[gsweb-theme=red] > div:nth-of-type(8) { order: 7 } /* : */ div[gsweb-theme=red] > div:nth-of-type(9) { order: 11; display: none }/* Seconds number */div[gsweb-theme=red] > div:nth-of-type(10) { order: 4 } /*seconds label*/div[gsweb-theme=red] > div:nth-of-type(11) { order: 8 } ";
                break;
        }
        
        var head = document.head || document.getElementsByTagName('head')[0],style = document.createElement('style');
    
        var font = document.createElement('link');
            font.rel = 'stylesheet';
            font.href = "https://fonts.googleapis.com/css?family=Oswald:300,400";

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
        head.appendChild(font);
        
        $this.attr('gsweb-theme','red');
        $settings.theme='default';
        $settings.labels=true;
        $settings.type='div';
    }
      
    if($settings.date === null){
        if($settings.days){gswebCountDownDays = $settings.days;}else{gswebCountDownDays = 0;} 
        if($settings.hours){gswebCountDownHours = $settings.hours;}else{gswebCountDownHours = 0;} 
        if($settings.minutes){gswebCountDownMinutes = $settings.minutes;}else{gswebCountDownMinutes = 0;} 
        if($settings.seconds){gswebCountDownSeconds = $settings.seconds;}else{gswebCountDownSeconds = 0;} 

        if (gswebCountDownHours < 10) { gswebCountDownHours = "0"+parseInt(gswebCountDownHours); } 
        if (gswebCountDownMinutes < 10) { gswebCountDownMinutes = "0"+parseInt(gswebCountDownMinutes); } 
        if (gswebCountDownSeconds < 10){ gswebCountDownSeconds = "0"+parseInt(gswebCountDownSeconds); } 
        
        if($settings.labels){
            if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }
            }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                }else{
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                }
            }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                }
            }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }
            }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }
            }else if($settings.lbldays && $settings.lblhours){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div>");
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span>");
                }else{
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours");
                }
            }else if($settings.lbldays && $settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                }else{
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes");
                }
            }else if($settings.lbldays && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownDays+" Days : "+gswebCountDownSeconds+" Seconds");
                }
            }else if($settings.lblhours && $settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                }else{
                    $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                }
            }else if($settings.lblhours && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                }
            }else if($settings.lblminutes && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                }
            }else if($settings.lbldays){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+" Days");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div>");
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span>");
                }else{
                    $this.html(gswebCountDownDays+" Days");
                }
            }else if($settings.lblhours){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours+" Hours");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div>");
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span>");
                }else{
                    $this.html(gswebCountDownHours+" Hours");
                }
            }else if($settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownMinutes+" Minutes");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownMinutes+"</div><div>Minutes</div>");
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownMinutes+"</span><span>Minutes</span>");
                }else{
                    $this.html(gswebCountDownMinutes+" Minutes");
                }
            }else{
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownSeconds+" Seconds");
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownSeconds+'</div><div>Seconds</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownSeconds+'</span><span>Seconds</span>');
                }else{
                    $this.html(gswebCountDownSeconds+" Seconds");
                }
            }
        }else{
            if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                }
            }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                }else{
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes);
                }
            }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){

               if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownSeconds);
                }
            }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){

               if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownDays+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                } 
            }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
               if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                }
            }else if($settings.lbldays && $settings.lblhours){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+'</span>');
                }else{
                    $this.html(gswebCountDownDays+":"+gswebCountDownHours);
                }
            }else if($settings.lbldays && $settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+":"+gswebCountDownMinutes);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                }else{
                    $this.html(gswebCountDownDays+":"+gswebCountDownMinutes);
                }
            }else if($settings.lbldays && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays+":"+gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownDays+":"+gswebCountDownSeconds);
                }
            }else if($settings.lblhours && $settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours+":"+gswebCountDownMinutes);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                }else{
                    $this.html(gswebCountDownHours+":"+gswebCountDownMinutes);
                }
            }else if($settings.lblhours && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours+":"+gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownHours+":"+gswebCountDownSeconds);
                }
            }else if($settings.lblminutes && $settings.lblseconds){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);
                }
            }else if($settings.lbldays){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownDays);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownDays+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownDays+'</span>');
                }else{
                    $this.html(gswebCountDownDays);
                }
            }else if($settings.lblhours){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownHours);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownHours+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownHours+'</span>');
                }else{
                    $this.html(gswebCountDownHours);
                }
            }else if($settings.lblminutes){
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownMinutes);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownMinutes+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownMinutes+'</span>');
                }else{
                    $this.html(gswebCountDownMinutes);
                }
            }else{
                if($settings.theme === 'default' && $settings.type === 'default'){
                    $this.html(gswebCountDownSeconds);
                }else if($settings.theme === 'default' && $settings.type === 'div'){
                    $this.html('<div>'+gswebCountDownSeconds+'</div>');
                }else if($settings.theme === 'default' && $settings.type === 'span'){
                    $this.html('<span>'+gswebCountDownSeconds+'</span>');
                }else{
                    $this.html(gswebCountDownSeconds);
                }
            }
        }


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

                if($settings.labels){
                if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays && $settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours");
                    }
                }else if($settings.lbldays && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes");
                    }
                }else if($settings.lbldays && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }
                }else if($settings.lblhours && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days");
                    }
                }else if($settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span>");
                    }else{
                        $this.html(gswebCountDownHours+" Hours");
                    }
                }else if($settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownMinutes+" Minutes");
                    }
                }else{
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownSeconds+" Seconds");
                    }
                }
            }else{
                if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes);
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){
                    
                   if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){
                    
                   if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    } 
                }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                   if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays && $settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours);
                    }
                }else if($settings.lbldays && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes);
                    }
                }else if($settings.lbldays && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes);
                    }
                }else if($settings.lblhours && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownHours+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+'</span>');
                    }else{
                        $this.html(gswebCountDownDays);
                    }
                }else if($settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+'</span>');
                    }else{
                        $this.html(gswebCountDownHours);
                    }
                }else if($settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownMinutes);
                    }
                }else{
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownSeconds);
                    }
                }
            }
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

            if($settings.labels){
                if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays && $settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownHours+"</div><div>Hours</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownHours+"</span><span>Hours</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownHours+" Hours");
                    }
                }else if($settings.lbldays && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownMinutes+" Minutes");
                    }
                }else if($settings.lbldays && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownDays+" Days : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownMinutes+" Minutes");
                    }
                }else if($settings.lblhours && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownHours+" Hours : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+"</div><div>Minutes</div><div>:</div><div>"+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+"</span><span>Minutes</span><span>:</span><span>"+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownMinutes+" Minutes : "+gswebCountDownSeconds+" Seconds");
                    }
                }else if($settings.lbldays){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+" Days");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>Days</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>Days</span>");
                    }else{
                        $this.html(gswebCountDownDays+" Days");
                    }
                }else if($settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+" Hours");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>Hours</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>Hours</span>");
                    }else{
                        $this.html(gswebCountDownHours+" Hours");
                    }
                }else if($settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes+" Minutes");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+"</div><div>Minutes</div>");
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+"</span><span>Minutes</span>");
                    }else{
                        $this.html(gswebCountDownMinutes+" Minutes");
                    }
                }else{
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownSeconds+" Seconds");
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownSeconds+'</div><div>Seconds</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownSeconds+'</span><span>Seconds</span>');
                    }else{
                        $this.html(gswebCountDownSeconds+" Seconds");
                    }
                }
            }else{
                if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownMinutes);
                    }
                }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){
                    
                   if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){
                    
                   if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    } 
                }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                   if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays && $settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownHours+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownHours+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownHours);
                    }
                }else if($settings.lbldays && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownMinutes);
                    }
                }else if($settings.lbldays && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownDays+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lblhours && $settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownHours+":"+gswebCountDownMinutes);
                    }
                }else if($settings.lblhours && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownHours+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lblminutes && $settings.lblseconds){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+"</div><div>:</div><div>"+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+"</span><span>:</span><span>"+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);
                    }
                }else if($settings.lbldays){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownDays);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownDays+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownDays+'</span>');
                    }else{
                        $this.html(gswebCountDownDays);
                    }
                }else if($settings.lblhours){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownHours);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownHours+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownHours+'</span>');
                    }else{
                        $this.html(gswebCountDownHours);
                    }
                }else if($settings.lblminutes){
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownMinutes);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownMinutes+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownMinutes+'</span>');
                    }else{
                        $this.html(gswebCountDownMinutes);
                    }
                }else{
                    if($settings.theme === 'default' && $settings.type === 'default'){
                        $this.html(gswebCountDownSeconds);
                    }else if($settings.theme === 'default' && $settings.type === 'div'){
                        $this.html('<div>'+gswebCountDownSeconds+'</div>');
                    }else if($settings.theme === 'default' && $settings.type === 'span'){
                        $this.html('<span>'+gswebCountDownSeconds+'</span>');
                    }else{
                        $this.html(gswebCountDownSeconds);
                    }
                }
            }

            if (gswebDistance < 0) {
                clearInterval(x);
                if($settings.labels){
                    if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days : 00 Hours : 00 Minutes : 00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div><div>:</div><div>00</div><div>Hours</div><div>:</div><div>00</div><div>Minutes</div><div>:</div><div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span><span>:</span><span>00</span><span>Hours</span><span>:</span><span>00</span><span>Minutes</span><span>:</span><span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Days : 00 Hours : 00 Minutes : 00 Seconds");
                        }
                    }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days : 00 Hours : 00 Minutes");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div><div>:</div><div>00</div><div>Hours</div><div>:</div><div>00</div><div>Minutes</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span><span>:</span><span>00</span><span>Hours</span><span>:</span><span>00</span><span>Minutes</span>');
                        }else{
                            $this.html("00 Days : 00 Hours : 00 Minutes");
                        }
                    }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days : 00 Hours : 00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div><div>:</div><div>00</div><div>Hours</div><div>:</div><div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span><span>:</span><span>00</span><span>Hours</span><span>:</span><span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Days : 00 Hours : 00 Seconds");
                        }
                    }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days : 00 Minutes : 00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div><div>:</div><div>00</div><div>Minutes</div><div>:</div><div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span><span>:</span><span>00</span><span>Minutes</span><span>:</span><span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Days : 00 Minutes : 00 Seconds");
                        }
                    }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Hours : 00 Minutes : 00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Hours</div><div>:</div><div>00</div><div>Minutes</div><div>:</div><div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Hours</span><span>:</span><span>00</span><span>Minutes</span><span>:</span><span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Hours : 00 Minutes : 00 Seconds");
                        }
                    }else if($settings.lbldays && $settings.lblhours){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days : 00 Hours");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div><div>:</div><div>00</div><div>Hours</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span><span>:</span><span>00</span><span>Hours</span>');
                        }else{
                            $this.html("00 Days : 00 Hours");
                        }
                    }else if($settings.lbldays && $settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days : 00 Minutes");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div><div>:</div><div>00</div><div>Minutes</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span><span>:</span><span>00</span><span>Minutes</span>');
                        }else{
                            $this.html("00 Days : 00 Minutes");
                        }
                    }else if($settings.lbldays && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days : 00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div><div>:</div><div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span><span>:</span><span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Days : 00 Seconds");
                        }
                    }else if($settings.lblhours && $settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Hours : 00 Minutes");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Hours</div><div>:</div><div>00</div><div>Minutes</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Hours</span><span>:</span><span>00</span><span>Minutes</span>');
                        }else{
                            $this.html("00 Hours : 00 Minutes");
                        }
                    }else if($settings.lblhours && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Hours : 00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Hours</div><div>:</div><div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Hours</span><span>:</span><span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Hours : 00 Seconds");
                        }
                    }else if($settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Minutes : 00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Minutes</div><div>:</div><div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Minutes</span><span>:</span><span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Minutes : 00 Seconds");
                        }
                    }else if($settings.lbldays){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Days");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Days</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Days</span>');
                        }else{
                            $this.html("00 Days");
                        }
                    }else if($settings.lblhours){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Hours");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Hours</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Hours</span>');
                        }else{
                            $this.html("00 Hours");
                        }
                    }else if($settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Minutes");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Minutes</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Minutes</span>');
                        }else{
                            $this.html("00 Minutes");
                        }
                    }else{
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00 Seconds");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>Seconds</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>Seconds</span>');
                        }else{
                            $this.html("00 Seconds");
                        }
                    }
                }else{
                    if($settings.lbldays && $settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00:00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div><div>:</div><div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span><span>:</span><span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00:00:00");
                        }
                    }else if($settings.lbldays && $settings.lblhours && $settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00:00");
                        }
                    }else if($settings.lbldays && $settings.lblhours && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00:00");
                        }
                    }else if($settings.lbldays && $settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00:00");
                        }
                    }else if($settings.lblhours && $settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00:00");
                        }
                    }else if($settings.lbldays && $settings.lblhours){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00");
                        }
                    }else if($settings.lbldays && $settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00");
                        }
                    }else if($settings.lbldays && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00");
                        }
                    }else if($settings.lblhours && $settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00");
                        }
                    }else if($settings.lblhours && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00");
                        }
                    }else if($settings.lblminutes && $settings.lblseconds){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00:00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div><div>:</div><div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span><span>:</span><span>00</span>');
                        }else{
                            $this.html("00:00");
                        }
                    }else if($settings.lbldays){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span>');
                        }else{
                            $this.html("00");
                        }
                    }else if($settings.lblhours){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span>');
                        }else{
                            $this.html("00");
                        }
                    }else if($settings.lblminutes){
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span>');
                        }else{
                            $this.html("00");
                        }
                    }else{
                        if($settings.theme === 'default' && $settings.type === 'default'){
                            $this.html("00");
                        }else if($settings.theme === 'default' && $settings.type === 'div'){
                            $this.html('<div>00</div>');
                        }else if($settings.theme === 'default' && $settings.type === 'span'){
                            $this.html('<span>00</span>');
                        }else{
                            $this.html("00");
                        }
                    }
                }
            }
        }, 1000);
    }

  };

})( jQuery );