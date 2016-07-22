/**
 * Created by Administrator on 2/23/2016.
 */
$(function(){
    $('#txtusr').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){//Check enter key events
            check_login();
        }
        //Stop the event from propogation to other handlers
        //If this line will be removed, then keypress event handler attached
        //at document level will also be triggered
        event.stopPropagation();
    });

    $('#txtpass').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){//Check enter key events
            check_login();
        }
        //Stop the event from propogation to other handlers
        //If this line will be removed, then keypress event handler attached
        //at document level will also be triggered
        event.stopPropagation();
    });


});

function check_login()
{
    var usr=$('#txtusr').val();
    var pwd=$('#txtpass').val();
    var snd_data={username:usr,password:pwd};
    if((pwd.length>0)&&(usr.length>0))
    {

        $.post('/login',snd_data, function(data) {
            JSON.stringify(data);

            var status=parseInt(data.usr_dts);
            console.log(data);
            console.log(status);
            switch(status)
            {
                case 200:
                    window.localStorage.setItem("user", usr);
                    window.location.href='/map';
                    $('#error').text('');
                    break;

                case 401:
                    $('#txtpass').val('');
                    $('#error').text('Password is incorrect. Make sure your account is Approved.');
                    break;

                case 500:
                    $('#error').text('Username or Password is incorrect.');
                    $('#txtusr').val('');
                    $('#txtpass').val('');
                    break;
            }


        });
    }
    else
    {
        $('#error').text('Please enter Username & Password');
    }

//            alert('call');


}