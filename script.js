


function verificarVacinas(){
    let idade = document.getElementById('idade').value
    let res = document.getElementById('res')
    let mes_ano = document.querySelector('input[name="mes_ano"]:checked')
   
    res.innerHTML = ""

  if(Number(idade) < 0 || idade.trim() === ""){
    res.innerHTML = `<h3>Digite sua idade \u{1F9D0}</h3>`
   
  } else if(!mes_ano){
    res.innerHTML = `<h3>Selecione Meses ou Anos também  \u{1F9D0} </h3>`
 
} else{
    let valor = Number(idade) /*pegar a idade*/
    let tipoIdade = mes_ano.value /* pegar meses ou anos*/
   
    
    if(valor > 1){
        res.innerHTML = `<h3>Vacinnas indicadas para ter se tomado até ${valor} ${tipoIdade === "mes" ? "meses" : "anos"}:</h3><ul>`;
    } else {
        res.innerHTML = `<h3>Vacinnas indicadas para ter se tomado até ${valor} ${tipoIdade === "mes" ? "mes" : "ano"}:</h3><ul>`;
    }
    
    
    for(let i = 0; i <= valor; i++){
        let vacinas = vacinasPorIdade[i]
        if (vacinas && vacinas.length > 0) {
            let resultado = `<div class="txt-idade">${i} ${tipoIdade === "mes" ? "meses" : "anos"} </div>`
            vacinas.forEach(vacina => {
                resultado += `  <div class ="vacinas"> ${todasvacinas[vacina] || vacina}</div><br>`
            });

            res.innerHTML += `<div class ="vacina-bloco">${resultado}</div>`
     }
     }
    }   
    
}

   
    
  




/* todas as vacinas*/

const todasvacinas = {
    bcg: "BCG",
    hepB: "Hepatite B",
    pentavalente1: "Pentavalente (1ª dose)",
    pentavalente2: "Pentavalente (2ª dose)",
    pentavalente3: "Pentavalente (3ª dose)",
    poliomelite1: "Poliometile (1ª dose)",
    poliomelite2: "Poliomelite (2ª dose)",
    poliomelite3: "Poliomelite (3ª dose)",
    poliomieliteRef1: "Poliomielite (1º reforço)",
    poliomieliteRef2: "Poliomielite (2º reforço)",
    meningococicaC1: "Meningocócica C (1ª dose)",
    meningococicaC2: "Meningocócica C (2ª dose)",
    meningococicaRef: "Meningocócica C (reforço)",
    pneumo1: "Pneumocócica 10 (1ª dose)",
    pneumo2: "Pneumocócica 10 (2ª dose)",
    pneumoRef: "Pneumocócica 10 (reforço)",
    rotavirus1: "Rotavírus (1ª dose)",
    rotavirus2: "Rotavírus (2ª dose)",
    tripliceViral1: "Tríplice viral (1ª dose)",
    tripliceViral2: "Tríplice viral (2ª dose)",
    hepA: "Hepatite A",
    tetrasViral: "Tetra viral",
    dT: "Dupla adulta",
    febreAmarela: "Febre amarela",
    hpvMeninas: "HPV (meninas)",
    hpvMeninos: "HPV (meninos)",
    meningococicaACWY: "Meningocócica ACWY",
    dTPreforco: "DTP (reforço)",
    influenza: "Influenza (vacina anual)",
    trivalente: "Tríplice viral (reforço)",
    hepatiteB: "Hepatite B (reforço)",
    dTadul: "Dupla adulto (reforço)",
    pneumococica65: "Pneumocócica (idosos)",
    gripe60: "Influenza (idosos, dose extra)",
    covid: "Vacina contra COVID-19",
};



const vacinasPorIdade = {
    0: ["bcg", "hepB"], // Recém-nascidos
    2: ["pentavalente1", "poliomielite1", "pneumo1", "rotavirus1"], // 2 meses
    4: ["pentavalente2", "poliomielite2", "pneumo2", "rotavirus2"], // 4 meses
    6: ["pentavalente3", "poliomielite3", "influenza"], // 6 meses
    12: ["tripliceViral1", "pneumoRef", "meningococicaRef"], // 12 meses
    15: ["dTPreforco", "poliomieliteRef1", "hepA", "tetrasViral"], // 15 meses
    4: ["dTPreforco", "poliomieliteRef2", "varicela"], // 4 a 6 anos
    9: ["hpvMeninas", "hpvMeninos"], // 9 anos
    11: ["meningococicaACWY", "hepB", "febreAmarela"], // 11 a 14 anos
    18: ["trivalente", "hepB", "dTadul", "febreAmarela"], // Adultos
    60: ["influenza", "pneumococica65", "gripe60"], // Idosos a partir de 60 anos
    65: ["pneumococica65", "gripe60", "covid"], // Idosos maiores de 65 anos
  };
  
    

