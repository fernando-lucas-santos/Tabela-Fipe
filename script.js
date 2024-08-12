let menuSelct = document.querySelectorAll('#select')
let btnCheck = document.querySelector('.verificar')
let type_vehicle = [...document.querySelectorAll('.type_vehicle input')]
let addressUrl = ''
let models = ''
// let models = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${n1}/modelos`

const vehicle_brand = (url)=>{
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
        data.map((el,index)=>{
            let opc = document.createElement('option')
            opc.setAttribute('value' , index)
            opc.innerHTML = el.nome
            menuSelct[0].appendChild(opc)
        })
    
    })
}
const model = (position)=>{
    fetch(models)
    .then((resp)=>resp.json())
    .then((data)=>{
        data.map((el,index)=>{
            let opc = document.createElement('option')
            opc.setAttribute('value' , index)
            opc.innerHTML = el.nome
            menuSelct[1].appendChild(opc)
        })
    })
}

const year = (url)=>{
    fetch(url)
    .then((Rsponse)=>Rsponse)
    .then((data)=>{
        console.log(data)
    })
}


let input_checked = type_vehicle.filter((el)=>{
    return el.checked
})

input_checked[0].checked
type_vehicle.map((el)=>{
    el.addEventListener('click',()=>{
        if(el.id == 'cars' && input_checked[0].checked){
            addressUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
            vehicle_brand(addressUrl)
        }else if(el.id == 'motorcycle'){
            addressUrl = 'https://parallelum.com.br/fipe/api/v1/motos/marcas'
            vehicle_brand(addressUrl)
        }else{
            addressUrl = 'https://parallelum.com.br/fipe/api/v1/caminhoes/marcas'
            vehicle_brand(addressUrl)
        }
    })

})






//vehicle()
/*

const cars = (url)=>{
    const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
        data.map((el,index)=>{
            let opc = document.createElement('option')
            opc.setAttribute('value' , index)
            opc.innerHTML = el.nome
            menuSelct.appendChild(opc)
            
            //console.log(el.nome)
        })
    })

    const brand = (c)=>{
        //const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
        // fetch(url)
        // .then((resp)=> resp.json())
        // .then((data)=>{
        //     data.map((el,index)=>{
        //         let opc = document.createElement('option')
        //         opc.setAttribute('value' , index)
        //         opc.innerHTML = el.nome
        //         menuSelct.appendChild(opc)
                
        //         //console.log(el.nome)
        //     })
        // })
    }
    console.log(el.nome)
}

const motorcycle = ()=>{
    const url = 'https://parallelum.com.br/fipe/api/v1/motos/marcas'
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
        data.map((el,index)=>{
            let opc = document.createElement('option')
            opc.setAttribute('value' , index)
            opc.innerHTML = el.nome
            menuSelct.appendChild(opc)
            
            //console.log(el.nome)
        })
    })
}
const truck = ()=>{
    const url = 'https://parallelum.com.br/fipe/api/v1/caminhoes/marcas'
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
        data.map((el,index)=>{
            let opc = document.createElement('option')
            opc.setAttribute('value' , index)
            opc.innerHTML = el.nome
            menuSelct.appendChild(opc)
            
            console.log(el.nome)
        })
    })

}

btnCheck.addEventListener('click',(evt)=>{
    evt.preventDefault()
    
})
*/