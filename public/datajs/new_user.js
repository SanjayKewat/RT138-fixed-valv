/**
 * Created by Administrator on 2/23/2016.
 */
$(function(){

    $('#btn_sub').click(function(){
        var name,uname,eadd,p_no,pwd,con_pwd,add;
        name=$('#txtname').val();
        create_acct();
    });
});

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

function create_acct()
{

    var nme=$('#txtname').val();
    var usr=$('#txtusr').val();
    var email=$('#txteadd').val();
    var phn=$('#txtphn').val();
    var pwd=$('#txtpss').val();
    var con_pwd=$('#txtcnpss').val();
    var add=$('#txtadd').val();
//            Name,User_name,Password,Email_Address,Phone_no,Address

    var post_data={
        nme:nme,
        usr:usr,
        email:email,
        phn:phn,
        con_pwd:con_pwd,
        add:add
    };
    if((nme.length>0)&&(usr.length>0)&&(email.length>0)&&(phn.length>0)&&(pwd.length>0)&&(con_pwd.length>0)&&(add.length>0)) {

        if (validateEmail(email)) {
            if(pwd==con_pwd)
            {
                $.post('/new_usr',post_data, function (data) {
                    JSON.stringify(data);

                    if (data.status == 200) {
//                            $('#error').text('New User "' + usr + '" account created successfully');
                        $('#txtname').val('');
                        $('#txtusr').val('');
                        $('#txteadd').val('');
                        $('#txtphn').val('');
                        $('#txtcnpss').val('');
                        $('#txtadd').val('');
                        $('#txtpss').val('');
                        $('#error').text('');
                        if (window.confirm('Congratulation! New User "' + usr + '" account created successfully. Waiting for Approval.'))
                        {
                            // They clicked Yes
                            window.location.href = "/login";
                        }


                    }
                    else {
                        $('#error').text('Username "' + usr + '" already assign. Plz try again with another Username.');
                    }

                });
            }
            else
            {
                alert('Conformation Password not matched.')
            }
        }
        else {
            alert('Invalid Email Address');

        }



    }
    else
    {
        alert('Make sure any field cannot be blank.')
    }

}