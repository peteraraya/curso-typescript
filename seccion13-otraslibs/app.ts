import "jquery";
import "sweetalert";
import swal from "sweetalert";

$( document).ready(function () {
    console.log("Pagina lista y cargada ....");

    $("h1").text("Hola desde Typescript");
    $("p").text("Hola desde este parrafo");

    $("h1").css("background-color","red");
    // sweetAlert("Opss","dkjskdjkdsjs","error");
});



$("#botAlerta").on("click",function(){
    // alert("Hola mundo desde typescript");
    sweetAlert("Titulo","Mensaje","success")
});