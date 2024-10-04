//import * as variavel from "./script.js"
// função recebe o tipo de veiculo
 async function type (type,location){
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas`)
    const data = await response.json() 
    data.map((el)=>{
        let opt = document.createElement('option')
        opt.setAttribute('value', el.codigo)
        opt.innerHTML =  el.nome
        location.appendChild(opt)
    })
   
}
   // console.log(select_name)

    model.addEventListener('change',()=>{ // montadora
        //input_vehicle_name.value = select_name.options[select_name.selectedIndex].text //pega o valor do opt que estiver selected
        //model.innerHTML = '<option value="" selected >--Selecione--</option>'
        //year.innerHTML = '<option value="" selected >--Ano--</option>'
        //Nmodelo = select_name.value // pega o numero do veiculo que esta no value do opt
        console.log('foi')
        if(select_name.value === '01'){
            input_vehicle_name.value = ''
        }

     modelo(tipoV,Nmodelo)

})

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

export {type ,modelo, ano}