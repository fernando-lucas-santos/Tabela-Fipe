class fipe {
  static Nmark = null
  static Nmodel = null
  static Nyear = null

  static select_name = document.querySelector("#Select_name")
  static model = document.querySelector("#model")
  static ayear = document.querySelector("#year")

  static type = async function (type) {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${type}/marcas`
    )
    const data = await response.json()
    data.map((el) => {
      let opt = document.createElement("option")
      opt.setAttribute("value", el.codigo)
      opt.innerHTML = el.nome
      fipe.select_name.appendChild(opt)
  
    });
    
    fipe.select_name.addEventListener("change", () => {
      fipe.model.innerHTML = '<option value="" selected >--Selecione--</option>';
      fipe.year.innerHTML = '<option value="" selected >--Ano--</option>';
      fipe.modelo(type, fipe.select_name.value);
      fipe.Nmark = fipe.select_name.value
  
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
      fipe.model.appendChild(opt)
    })
     
    fipe.model.addEventListener("change", (evt) => {
      fipe.ayear.innerHTML = '<option value="" selected >--Ano--</option>';
      fipe.year(type, Nmark, model.options[fipe.model.selectedIndex].value)
      fipe.Nmodel = model.options[fipe.model.selectedIndex].value
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
        fipe.ayear.appendChild(opt)
      })

      fipe.ayear.addEventListener("input", (evt) => {
        fipe.Nyear = fipe.ayear.options[fipe.ayear.selectedIndex].value
  
      })
        
    } catch (error) {
      
    }
   
  }
  static info = async function(type,Nmarca,Nmod,Nyear,location) {
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${Nmarca}/modelos/${Nmod}/anos/${Nyear}`)
    const data = await response.json()
    
    Object.keys(data).forEach((item)=>{
      let ul = document.createElement('ul')
      let li = document.createElement('li')
      ul.setAttribute('class', ('list-group list-group-flush'))
      li.setAttribute('class', 'list-group-item')
      li.innerHTML = `${item}: ${data[item]}`
      ul.appendChild(li)

      location.appendChild(ul)
    
    })

  }
}


export { fipe }

