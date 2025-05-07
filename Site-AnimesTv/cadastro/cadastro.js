$(document).ready(function() {
    
    const $form = $('#form-cadastro');
    const $btnProximo = $('#btn-proximo');
    const $btnText = $('.btn-text');
    const $btnLoading = $('.btn-loading');
    
    
    $('#email').on('input', function() {
        validateEmail();
        toggleSubmitButton();
    });
    
    $('#senha').on('input', function() {
        validatePassword();
        toggleSubmitButton();
    });
    
    $form.on('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            showLoading();
            
            
            setTimeout(function() {
                window.location.href = '../login/login.html';
            }, 1500);
        }
    });
    
    function validateEmail() {
        const email = $('#email').val();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = regex.test(email);
        
        if (!isValid && email.length > 0) {
            $('#email-error').text('E-mail inválido! Ex: Caue@gmail.com').show();
            return false;
        } else {
            $('#email-error').hide();
            return true;
        }
    }
    
    function validatePassword() {
        const senha = $('#senha').val();
        
        if (senha.length < 6 && senha.length > 0) {
            $('#senha-error').text('A senha precisa ter pelo menos 6 caracteres!').show();
            return false;
        } else {
            $('#senha-error').hide();
            return true;
        }
    }
    
    function validateForm() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        return isEmailValid && isPasswordValid;
    }
    
    function toggleSubmitButton() {
        $btnProximo.prop('disabled', !validateForm());
    }
    
    function showLoading() {
        $btnText.hide();
        $btnLoading.show();
        $btnProximo.prop('disabled', true);
    }
});