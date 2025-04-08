$(document).ready(function(){

    $("form").submit(function(event){
      event.preventDefault();
        if ($("input[placeholder='Usuário']").val() === "admin" &&
            $("input[placeholder='Senha']").val() === "1234"){
            $("span").text("Bem vindo").show().fadeOut(5000);
            open("AnimeTV.html")
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
        window.open("cadastro.html","Registre-se","width=400px,height=500px");
        
    })
})
