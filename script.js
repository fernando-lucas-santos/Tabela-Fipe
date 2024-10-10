import * as api from "./api.js"

let input_type = [...document.querySelectorAll('input[type="radio"]')]
let select_name = document.querySelector('#Select_name')
//let select_brand = document.querySelector('#select-brand')
let model = document.querySelector('#model')
let verificar = document.querySelector('.verificar')
let year = document.querySelector('#year')
 
let tipoV = null
let Nmarca = null
let Nmodelo = null
let teste = null

// select_name.setAttribute('disabled','true')
// model.setAttribute('disabled','true')
// year.setAttribute('disabled','true')


/*
const chamada2 = (tipoV)=>{
    input_vehicle_name.toUpperCase
    //input_vehicle_name.value = ''
    input_vehicle_name.addEventListener('change',()=>{ // montadora
        model.innerHTML = '<option value="" selected >--Selecione--</option>'
        year.innerHTML = '<option value="" selected >--Ano--</option>'
        Nmodelo = select_name.value // pega o numero do veiculo que esta no value do opt
        modelo(tipoV,Nmodelo)
    })
}
    */

// função recebe o tipo de veiculo e o modelo
   /* select_name.addEventListener('change',()=>{ // montadora
    //input_vehicle_name.value = select_name.options[select_name.selectedIndex].text //pega o valor do opt que estiver selected
    //model.innerHTML = '<option value="" selected >--Selecione--</option>'
    //year.innerHTML = '<option value="" selected >--Ano--</option>'
    //Nmodelo = select_name.value // pega o numero do veiculo que esta no value do opt
    console.log('foi')
    if(select_name.value === '01'){
        input_vehicle_name.value = ''
    }

 //modelo(tipoV,Nmodelo)

})*/

// eventos de click que seleciona o tipo de veiculo
input_type.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if(evt.target.id == 'cars'){
            select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            model.innerHTML = '<option value="001" selected > --selecione--</option>'
            year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'carros'
            api.fipe.type(tipoV)

            
            //input_vehicle_name.toggleAttribute('disabled')
            //select_name.toggleAttribute('disabled')
            //model.toggleAttribute('disabled')
            //year.toggleAttribute('disabled')
            

        }else if(evt.target.id == 'motorcycle'){
            select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            model.innerHTML = '<option value="01" selected > --selecione--</option>'
            year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'motos'
            tipo(tipoV,select_brand)

            input_vehicle_name.toggleAttribute('disabled')
            select_name.toggleAttribute('disabled')
            model.toggleAttribute('disabled')
            year.toggleAttribute('disabled')

        }else{
            select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            model.innerHTML = '<option value="01" selected > --selecione--</option>'
            year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'caminhoes'
            tipo(tipoV)

            input_vehicle_name.toggleAttribute('disabled')
            select_name.toggleAttribute('disabled')
            model.toggleAttribute('disabled')
            year.toggleAttribute('disabled')
        }
    })
})

verificar.addEventListener('click',(evt)=>{
    evt.preventDefault()
    if(!input_vehicle_name.checkValidity()){
        document.querySelector('.invalido').innerHTML = 'fff'
        console.log(input_vehicle_name.checkValidity())
        alert('invalido')
    }
    
})