$(document).ready(function () {
    $('#registerForm').submit(function (e) { 
        var username = $("input[name='username']").val().trim();
        var password = $("input[name='password']").val().trim()
        var confirm = $("input[name='confirm']").val().trim()
        var fullname = $("input[name='fullname']").val().trim()
        var email = $("input[name='email']").val().trim()
        var age = $("input[name='age']").val().trim()
        var gender = $("input[name='gender']:checked").val()
        var term = $("input[name='term']:checked").val()

        if (username == '' || 
            password == '' ||
            confirm == '' ||
            fullname == '' ||
            email == '' ||
            age == '' || 
            gender == null ||
            term != 'on')
        {
            setLabel('You must filled all of the field')
            e.preventDefault()
        }

        else if (username.length < 4 || username.length > 20){
            setLabel('Username length must between 4 - 20 characters')
            e.preventDefault()
        }

        else if (password.length < 4){
            setLabel('Password length must be more than 3 characters')
            e.preventDefault()
        }

        else if (!isAlphaNumeric(password)){
            setLabel('Password must be alphanumeric')
            e.preventDefault()
        }
        
        else if (password != confirm){
            setLabel('Password are not matching')
            e.preventDefault()
        }

        else if (!email.includes('@') || !email.includes('.') 
        || email.includes('@.') || email.includes('.@')){
            setLabel('Email is not valid')
            e.preventDefault()
        }
        
    });

    function setLabel(str){
        $('.failLbl').html(str);
        $('.failLbl').fadeIn().delay(2000).fadeOut();
    }

    function isAlphaNumeric(str){
        str = str.toLowerCase()
        var hasNumber = false
        var hasAlpha = false

        for (var i = 0; i<str.length; i++){
            if (str[i] >= 'a' && str[i] <= 'z'){
                hasAlpha = true
            } else if (str[i] >= '0' && str[i] <= '9'){
                hasNumber = true 
            } else {
                return false
            }
        }

        return hasAlpha && hasNumber
    }
});