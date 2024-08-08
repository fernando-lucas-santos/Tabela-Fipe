// let url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
// fetch(url)
// .then(res=> res.json())
// .then(dados=>{
//     console.log(dados)
// })

let menuSelct = document.querySelector('#select')
let btnCheck = document.querySelector('#select')
const cars = (url)=>{
    //const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
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

