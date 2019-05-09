# gswebCountDown4.0.0
CountDown version 4.0.0

### Use:
Initialize the div wherever you need the counter with the following lines:

```html
<div id="gswebCountDown"></div>
```

```javascript
<script>
    $('#gswebCountDown').gswebCountDown({
        date: "May 23, 2020 23:59:59 GMT-0400"
    });
</script>
```

### Script required
```javascript
<script src="../path/gswebCountDown.min.js"></script>
```

Or you can use this from our server

```javascript
<script src="https://juanjimeneztj.com/plugins/gswebCountDown4.0.0/gswebCountDown.min.js"></script>
```

### Parameters
We can use parameters in this counter, below you have all the parameters you can use:

**Description of all parameters**

| Parameter | Description |
| --- | --- |
| `theme` | You have two options in this parameter, the **default** option and the **red** one, in the *default* option you will have a counter with the following example: <br /><img valign="middle" src="http://juanjimeneztj.com/plugins/gswebCountDown4.0.0/images/Screenshot_1.png" width="250" height="auto" ><br />In the *red* option you will have a counter with the following example: <br /><img valign="middle" src="http://juanjimeneztj.com/plugins/gswebCountDown4.0.0/images/Screenshot_2.png" width="300" height="auto" ><br />**here is an example:** <br /> <img valign="middle" src="http://juanjimeneztj.com/plugins/gswebCountDown4.0.0/images/Screenshot_3.png" width="600" height="auto" > <br /> |
| `type` | In this case, **'type'** you can receive two additional parameters to the default one that is *'default'*, it is used for the way you want to receive the values in the counter, you can receive them within a **DIV** if you pass the parameter *type: 'div'*, or you can receive them inside **SPAN** tags if you pass the parameter *type: 'span'*. |
| `lbldays` | This parameter is to choose if you want the Days to be shown in the counter, if you do not want this parameter to be shown in the counter, only change the value to *false*. |
| `lblhours` | This parameter is to choose if you want the Hours to be shown in the counter, if you do not want this parameter to be shown in the counter, only change the value to *false*. |
| `lblminutes` | This parameter is to choose if you want the Minutes to be shown in the counter, if you do not want this parameter to be shown in the counter, only change the value to *false*. |
| `lblseconds` | This parameter is to choose if you want the Seconds to be shown in the counter, if you do not want this parameter to be shown in the counter, only change the value to *false*. |
| `labels` | This parameter is to choose if you want the labels to be shown in the counter, if you do want this parameter to be shown in the counter, only change the value to *true*. |
| `date` | This parameter is **optional**. If you want to use the counter using the **date format**, you must pass to this parameter *'date'* in the following format: *date: "May 23, 2020 23:59:59 GMT-0400"* . If you want to manually add the days, hours, minutes and seconds to the counter, you can leave the value of *'date'* in *'null'* and use the parameters below. |
| `days` | Set this parameter to the days you want to start the counter. |
| `hours` | Set this parameter to the Hours you want to start the counter. |
| `minutes` | Set this parameter to the Minutes you want to start the counter. |
| `seconds` | Set this parameter to the Seconds you want to start the counter. |

**Default Parameters**

| Parameter | Default Values |
| --- | --- |
| `theme` | default |
| `type` | default |
| `lbldays` | true |
| `lblhours` | true |
| `lblminutes` | true |
| `lblseconds` | true |
| `labels` | false |
| `date` | null |
| `days` | 0 |
| `hours` | 0 |
| `minutes` | 0 |
| `seconds` | 0 |
