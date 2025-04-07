$(document).ready(function(){

    $("form").submit(function(event){
        if ($("input[placeholder='Usuário']").val() == "admin")
        if ($("input[placeholder='Senha']").val() == "1234"){
            $("span").text("Bem vindo").show().fadeOut(1000);
            window.open("AnimeTV.html")
        }
        if ($("input[placeholder='Usuário']").val() == "admin")
        if ($("input[placeholder='Senha']").val() != "1234"){
            $("span").text("Senha inválida").show().fadeOut(1000);
        }
        if ($("input[placeholder='Usuário']").val() != "admin")
        if ($("input[placeholder='Senha']").val() != "1234"){
        $("span").text("Certifique-se de se Cadastrar!").show().fadeOut(1000);}
        event.preventDefault();
    });
});