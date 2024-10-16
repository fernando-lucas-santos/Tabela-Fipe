import * as api from "./api.js"

let input_type = [...document.querySelectorAll('input[type="radio"]')]
let btnInfo = document.querySelector('.btnInfo')
let description = document.querySelector('.description span')
let tipoV = null

// eventos de click que seleciona o tipo de veiculo
input_type.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if(evt.target.id == 'cars'){
            api.fipe.select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            api.fipe.model.innerHTML = '<option value="001" selected > --selecione--</option>'
            api.fipe.year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'carros'
            api.fipe.type(tipoV)

        }else if(evt.target.id == 'motorcycle'){
            api.fipe.select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            api.fipe.model.innerHTML = '<option value="01" selected > --selecione--</option>'
            api.fipe.year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'motos'
            api.fipe.type(tipoV)

        }else{
            api.fipe.select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            api.fipe.model.innerHTML = '<option value="01" selected > --selecione--</option>'
            api.fipe.year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'caminhoes'
            api.fipe.type(tipoV)

        }
    })
})

btnInfo.addEventListener('click',(evt)=>{
    evt.preventDefault()
    api.fipe.info(tipoV,api.fipe.Nmark,api.fipe.Nmodel,api.fipe.Nyear, description)
    
})
