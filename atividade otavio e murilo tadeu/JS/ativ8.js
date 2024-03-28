function Som() {

    //1°passo : saber se a funcão esta vinculada
    //console.log("CHAMA!!!!!!!");

    //2° referncia da localização da teg
    let n01 = document.getElementById("n_1");
    let n02 = document.getElementById("n_2");
    console.log(n01.value);
    console.log(n02.value);
    
    let resultado = parseInt (n01.value) + parseInt (n02.value);
    
    document.write("<p>"+resultado+"</p>");
}