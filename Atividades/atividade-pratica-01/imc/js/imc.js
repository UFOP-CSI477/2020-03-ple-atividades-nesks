
function imc(){

    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if(peso == '' || altura == ''){
        alert('Campo não preenchido ou preenchido incorretamente');
    } else{
        const imc = peso/(altura*altura);


            var resultado = '';

            if(imc < 18.5){
                resultado = 'Subnutrição com imc =' + imc;
            } else if(imc >= 18.5 && imc <= 24.9){
                resultado = 'Saudável com imc =' + imc;
            } else if(imc >= 25 && imc <= 29.9){
                resultado = 'Sobrepeso com imc =' + imc;
            } else if(imc >= 30 && imc <= 34.9){
                resultado = 'Obesidade grau 1 com imc =' + imc;
            } else if(imc >= 35 && imc <= 39.9){
                resultado = 'Obesidade grau 2 com imc =' + imc;
            } else{
                resultado = 'Obesidade grau 3 com imc =' + imc;
            }

            alert(resultado);

    }



}
