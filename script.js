let idade = document.getElementById('idade')
let res = document.getElementById('res')




function verificarVacinas(){
    let mes_ano = document.querySelector('input[name="mes_ano"]:checked')
   
    res.innerHTML = ""

  if(Number(idade.value) < 0){
    res.innerHTML = `<h3>Digite sua idade \u{1F9D0}</h3>`
   
  } else if(!mes_ano){
    res.innerHTML = `<h3>Selecione Meses ou Anos também  \u{1F9D0} </h3>`
 
} else{
    
  }
}

let

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




    

