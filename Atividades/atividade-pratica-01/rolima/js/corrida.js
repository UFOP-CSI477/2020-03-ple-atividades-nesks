var competidores=[]
var largada=0;

function Comp(largada, nome, tempo){
    this.largada=largada;
    this.nome = nome;
    this.tempo = tempo;
}

function limpar(){
    document.getElementById('nome').value = "";
    document.getElementById('tempo').value = "";
}


function salvar(){

    document.getElementById('largada').style.display = 'show';
    document.getElementById('resultado').style.display = 'none';

    if(competidores.length < 6){
    document.getElementById('tabela-largada').innerHTML="";


        if(document.getElementById('nome').value == '' ||
            document.getElementById('tempo').value == ''){
             alert('Campo não preenchido ou preenchido incorretamente');
        } else{
            var nome = document.getElementById('nome').value;
            var tempo = document.getElementById('tempo').value;
            largada++;
            const comp = new Comp(largada,nome,tempo);
            competidores.push(comp);

            competidores.forEach((comp)=>{
                document.getElementById('tabela-largada').innerHTML += '<tr>\
                                                                                <td>'+comp.largada+'</td>\
                                                                                <td>'+comp.nome+'</td>\
                                                                                <td>'+comp.tempo+'</td>\
                                                                      </tr>';
            });
            limpar();


        }
    }else{
            alert('A corrida só pode ter 6 competidores.')
    }


}

function resultado(){


    document.getElementById('largada').style.display = 'none';
    document.getElementById('resultado').style.display = 'show';

    competidores.sort((a, b)=> {
        if (parseInt(a.tempo) < parseInt(b.tempo)) return -1;
        if (parseInt(a.tempo) > parseInt(b.tempo)) return 1;
        return 0;
    });


    document.getElementById('tabela-resultado').innerHTML = '';

    competidores.forEach((competidor, i)=>{
        document.getElementById('tabela-resultado').innerHTML += '<tr>\
                                                                    <th scope="row">'+(i+1)+'</th>\
                                                                    <th>'+competidor.largada+'</th>\
                                                                    <td>'+competidor.nome+'</td>\
                                                                    <td>'+competidor.tempo+'</td>\
                                                                    <td>'+(competidor.tempo == competidores[0].tempo ? '<b>Vencedor!</b>' : '-')+'</td>\
                                                                </tr>';
    });


    competidores = []
}



