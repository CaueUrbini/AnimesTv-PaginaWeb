const imagens = ["../img/city.jpg", "../img/garota.jpg"];
let index = 0;
// array comeca do 0 

function fundo(){
    index = (index+1)% imagens.length; // funciona como se fosse while, e quando chega no final das imagens ele retorna ao inicio
    document.body.style.backgroundImage = `url('${imagens[index]}')`;
}

document.body.style.backgroundImage = `url('${imagens[0]}')`;

setInterval(fundo, 100000);

$(document).ready(function(){

    $("form").submit(function(event){
      event.preventDefault();
        if ($("input[placeholder='Usuário']").val() === "admin" &&
            $("input[placeholder='Senha']").val() === "1234"){
            $("span").text("Bem vindo").show().fadeOut(5000);
            window.location.href = "../Home/AnimeTV.html";
        }
        else if ($("input[placeholder='Usuário']").val() === "admin" &&
                 $("input[placeholder='Senha']").val() !== "1234"){
                 $("span").text("Senha inválida").show().fadeOut(5000);
        }
        else{
             $("span").text("Certifique-se de se Cadastrar!").show().fadeOut(5000);
        }
    });
});
 //* Function do cadastro 
$(document).ready(function(){ 
    $(".register").click(function(){
        window.location.href="../cadastro/cadastro.html";
        
    })
})
//* Function de redefinir a senha
$(document).ready(function(){ 
    $(".esqueci-senha").click(function(){
        window.location.href="../redefinir-senha/redefinir-senha.html";
        
    })
})
