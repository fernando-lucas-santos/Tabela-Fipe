let select_name = document.querySelector("#Select_name")
let model = document.querySelector("#model")

let year = document.querySelector("#year")
let verificar = document.querySelector(".verificar")
//console.log(teste)
//console.log(model)
class fipe {
  static controle = false
  static type = async function (type) {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${type}/marcas`
    )
    const data = await response.json()
    data.map((el) => {
      let opt = document.createElement("option")
      opt.setAttribute("value", el.codigo)
      opt.innerHTML = el.nome
      select_name.appendChild(opt)
    });

    select_name.addEventListener("change", () => {
      // montadora
      //select_name.options[select_name.selectedIndex].text //pega o valor do opt que estiver selected
      model.innerHTML = '<option value="" selected >--Selecione--</option>';
      year.innerHTML = '<option value="" selected >--Ano--</option>';
      fipe.modelo(type, select_name.value);
      fipe.controle = true;
      
    })
  }

  static modelo = async function (type, Nmark) {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${Nmark}/modelos`
    )
    const data = await response.json()

    data.modelos.map((el) => {
      let opt = document.createElement("option")
      opt.setAttribute("value", el.codigo)
      opt.innerHTML = el.nome;
      model.appendChild(opt)
    })

    model.addEventListener("change", (evt) => {
        year.innerHTML = '<option value="" selected >--Ano--</option>'
        fipe.year(type, Nmark, model.options[model.selectedIndex].value)
        fipe.controle = false
        
    })
  }

  static year = async function (type, Nmark, Nmod) {

      try {
          const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${Nmark}/modelos/${Nmod}/anos`)
        const data = await response.json();
            data.map((el) => {
              let opt = document.createElement("option")
              opt.setAttribute("value", el.codigo)
              opt.innerHTML = el.nome
              year.appendChild(opt)
            });
        
    } catch (error) {
        
    }
   
  }
}

/*


// função recebe o tipo de veiculo o modelo e o ano

*/
export { fipe }

