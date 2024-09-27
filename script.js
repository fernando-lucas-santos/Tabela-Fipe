let input_type = [...document.querySelectorAll('input[type="radio"]')]
let input_vehicle_name = document.querySelector('#name')
let select_name = document.querySelector('#Select_name')
let model = document.querySelector('#model')
let select_brand = document.querySelector('#select-brand')
let verificar = document.querySelector('.verificar')
let year = document.querySelector('#year')
let description = document.querySelector('.description')

let tipoV = null
let Nmarca = null
let Nmodelo = null

// função recebe o tipo de veiculo
const tipo = (tipos)=>{
    fetch(`https://parallelum.com.br/fipe/api/v1/${tipos}/marcas`)
    .then(response => response.json())
    .then(data =>{
        data.map((el)=>{
            let opt = document.createElement('option')
            opt.setAttribute('value', el.codigo)
            opt.innerHTML =  el.nome
            select_name.appendChild(opt)
        })
         
    })
      
}

select_name.addEventListener('change',()=>{ // montadora
    input_vehicle_name.value = select_name.options[select_name.selectedIndex].text //pega o valor do opt que estiver selected
    model.innerHTML = '<option value="" selected >--Selecione--</option>'
     year.innerHTML = '<option value="" selected >--Ano--</option>'
    Nmodelo = select_name.value // pega o numero do veiculo que esta no value do opt
    modelo(tipoV,Nmodelo)

    if(select_name.value === '01'){
        input_vehicle_name.value = ''
    }

})

// função recebe o tipo de veiculo e o modelo

const modelo = (tipo,Nm)=>{
    fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${Nm}/modelos`)
    .then(response => response.json())
    .then(data =>{
        data.modelos.map((el)=>{
            let opt = document.createElement('option')
            opt.setAttribute('value', el.codigo)
            opt.innerHTML =  el.nome
            model.appendChild(opt)
   
        })
      
    })
    
}
model.addEventListener('change',()=>{
    year.innerHTML = '<option value="" selected >--Ano--</option>'
    ano(tipoV,Nmodelo,model.options[model.selectedIndex].value)
})

// função recebe o tipo de veiculo o modelo e o ano

const ano = (tipo,Nm,Nmod)=>{
    fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${Nm}/modelos/${Nmod}/anos`)
    .then(response => response.json())
    .then(data =>{
        data.map((el)=>{
            let opt = document.createElement('option')
            opt.setAttribute('value', el.codigo)
            opt.innerHTML =  el.nome
            year.appendChild(opt)

        })
         
    })
}

// eventos de click que seleciona o tipo de veiculo
input_type.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if(evt.target.id == 'cars'){
            select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            model.innerHTML = '<option value="001" selected > --selecione--</option>'
            year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'carros'
            tipo(tipoV)
        
          
        }else if(evt.target.id == 'motorcycle'){
            select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            model.innerHTML = '<option value="01" selected > --selecione--</option>'
            year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'motos'
            tipo(tipoV)

        }else{
            select_name.innerHTML = '<option value="01" selected > --selecione--</option>'
            model.innerHTML = '<option value="01" selected > --selecione--</option>'
            year.innerHTML = '<option value="" selected >--Ano--</option>'
            tipoV = 'caminhoes'
            tipo(tipoV)
        }
    })
})

description.addEventListener('click',(evt)=>{
    evt.preventDefault()
})