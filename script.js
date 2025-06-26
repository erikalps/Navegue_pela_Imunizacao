


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
    
    
    for (let idadeKey in vacinasPorIdade) {
      let tipo = idadeKey.endsWith("m") ? "mes" : "ano";
      let numero = parseInt(idadeKey);

      if (
        (tipoIdade === "mes" && tipo === "mes" && numero <= valor) ||
        (tipoIdade === "ano" && tipo === "ano" && numero <= valor)) {
          let label = `${numero} ${tipo === "mes" ? (numero > 1 ? "meses" : "mês") : (numero > 1 ? "anos" : "ano")}`;
          let vacinas = vacinasPorIdade[idadeKey];
          let resultado = `<div class="txt-idade">${label}</div>`;

          vacinas.forEach(vacina => {
            resultado += `<div class="vacinas"><button onclick="maisInformacoes('${vacina}')">${todasvacinas[vacina] || vacina}</button></div><br>`;
          });

          res.innerHTML += `<div class="vacina-bloco">${resultado}</div>`;
      }
    }
  
    
    }
}



function maisInformacoes(nomeVacina){
   const info = infoVacinas[nomeVacina] 

   document.getElementById("infoVac").innerHTML = `
        <h2 class ="titulo_info">${nomeVacina}</h2>
        <p class ="vacina_info">${info}</p>
    `;

  document.getElementById("sidebar").classList.add("active");
   
}  
  


function fecharSidebar() {
    document.getElementById("sidebar").classList.remove("active");
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
  "0m": ["bcg", "hepB"],
  "2m": ["pentavalente1", "poliomelite1", "pneumo1", "rotavirus1"],
  "4m": ["pentavalente2", "poliomelite2", "pneumo2", "rotavirus2"],
  "6m": ["pentavalente3", "poliomelite3", "influenza"],
  "12m": ["tripliceViral1", "pneumoRef", "meningococicaRef"],
  "15m": ["dTPreforco", "poliomieliteRef1", "hepA", "tetrasViral", "varicela"],
  "4a": ["dTPreforco", "poliomieliteRef2", "varicela"],
  "9a": ["hpvMeninas", "hpvMeninos"],
  "11a": ["meningococicaACWY", "hepB", "febreAmarela"],
  "18a": ["trivalente", "hepB", "dTadul", "febreAmarela"],
  "60a": ["influenza", "pneumococica65", "gripe60"],
  "65a": ["pneumococica65", "gripe60", "covid"]
};
  
    
/*informações sobre as vacinas */
const infoVacinas = {
  bcg: "Protege contra formas graves de tuberculose, como a meningite tuberculosa e a tuberculose miliar. <div class='idade_indicada'>Idade: ao nascer até 4 anos, 11 meses e 29 dias</div> <div class='locais_disponivel'>Disponível nas Unidades Básicas de Saúde (UBS)</div>",

  hepB: "Previne a hepatite B. <div class='idade_indicada'>Idade: ao nascer; pode ser tomada em qualquer idade se não vacinado</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  pentavalente1: "Combina vacinas contra difteria, tétano, coqueluche, hepatite B e Haemophilus influenzae tipo b. <div class='idade_indicada'>Idade: 2 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  pentavalente2: "Segunda dose da vacina pentavalente. <div class='idade_indicada'>Idade: 4 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  pentavalente3: "Terceira dose da vacina pentavalente. <div class='idade_indicada'>Idade: 6 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  poliomelite1: "Vacina inativada poliomielite (VIP). <div class='idade_indicada'>Idade: 2 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  poliomelite2: "VIP, segunda dose. <div class='idade_indicada'>Idade: 4 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  poliomelite3: "VIP, terceira dose. <div class='idade_indicada'>Idade: 6 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  poliomieliteRef1: "Primeiro reforço com vacina oral (VOP). <div class='idade_indicada'>Idade: 15 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  poliomieliteRef2: "Segundo reforço com VOP. <div class='idade_indicada'>Idade: 4 anos</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  meningococicaC1: "Protege contra meningite meningocócica C. <div class='idade_indicada'>Idade: 3 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  meningococicaC2: "Segunda dose. <div class='idade_indicada'>Idade: 5 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  meningococicaRef: "Reforço da vacina meningocócica C. <div class='idade_indicada'>Idade: 12 meses (até 5 anos se necessário)</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  pneumo1: "Vacina pneumocócica 10-valente. <div class='idade_indicada'>Idade: 2 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  pneumo2: "Segunda dose. <div class='idade_indicada'>Idade: 4 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  pneumoRef: "Reforço da pneumocócica 10-valente. <div class='idade_indicada'>Idade: 12 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  rotavirus1: "Vacina oral contra rotavírus. <div class='idade_indicada'>Idade: 2 meses (até 15 semanas)</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  rotavirus2: "Segunda dose oral. <div class='idade_indicada'>Idade: 4 meses (até 7 meses e 29 dias)</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  tripliceViral1: "Protege contra sarampo, caxumba e rubéola. <div class='idade_indicada'>Idade: 12 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  tripliceViral2: "Segunda dose. <div class='idade_indicada'>Idade: 15 meses (até 4 anos, 11 meses e 29 dias)</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  hepA: "Previne hepatite A. <div class='idade_indicada'>Idade: 15 meses (até 5 anos incompletos)</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  tetrasViral: "Combina tríplice viral com varicela. <div class='idade_indicada'>Idade: 15 meses</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  dT: "Dupla adulto (difteria e tétano). <div class='idade_indicada'>Idade: reforço a cada 10 anos na vida adulta</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  febreAmarela: "Previne febre amarela. <div class='idade_indicada'>Idade: a partir de 9 meses</div> <div class='locais_disponivel'>Disponível nas UBS e campanhas regionais</div>",

  hpvMeninas: "Previne HPV e câncer de colo do útero. <div class='idade_indicada'>Idade: 9 a 14 anos</div> <div class='locais_disponivel'>Disponível nas UBS e escolas</div>",

  hpvMeninos: "Previne HPV e cânceres genitais. <div class='idade_indicada'>Idade: 11 a 14 anos</div> <div class='locais_disponivel'>Disponível nas UBS e escolas</div>",

  meningococicaACWY: "Contra meningite dos tipos A, C, W e Y. <div class='idade_indicada'>Idade: 11 a 14 anos</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  dTPreforco: "Reforço da DTP. <div class='idade_indicada'>Idade: 15 meses (até 6 anos, 11 meses e 29 dias)</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  influenza: "Vacina anual contra gripe. <div class='idade_indicada'>Idade: a partir de 6 meses, grupos prioritários</div> <div class='locais_disponivel'>Disponível nas UBS durante campanhas</div>",

  trivalente: "Reforço da tríplice viral. <div class='idade_indicada'>Idade: crianças, adolescentes e adultos não vacinados</div> <div class='locais_disponivel'>Disponível nas UBS e campanhas</div>",

  hepatiteB: "Reforço ou início de esquema. <div class='idade_indicada'>Idade: qualquer idade</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  dTadul: "Dupla adulto (difteria e tétano). <div class='idade_indicada'>Idade: reforço a cada 10 anos</div> <div class='locais_disponivel'>Disponível nas UBS</div>",

  pneumococica65: "Protege idosos contra doenças pneumocócicas. <div class='idade_indicada'>Idade: a partir de 60 anos</div> <div class='locais_disponivel'>Disponível nas UBS em campanhas</div>",

  gripe60: "Dose extra anual contra influenza. <div class='idade_indicada'>Idade: a partir de 60 anos</div> <div class='locais_disponivel'>Disponível nas UBS durante campanhas</div>",

  covid: "Protege contra a COVID-19. <div class='idade_indicada'>Idade: conforme orientações vigentes</div> <div class='locais_disponivel'>Disponível nas UBS e centros de vacinação</div>",

  varicela: "Previne catapora. <div class='idade_indicada'>Idade: 15 meses (ou qualquer idade se não vacinado)</div> <div class='locais_disponivel'>Disponível nas UBS</div>"
};


