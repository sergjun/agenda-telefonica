document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    postAgenda ()
    campoNome.value =""
    campoTelefone.value =""
    
})

const campoNome = document.querySelector("#name")
const campoTelefone = document.querySelector("#telefone")
const mostrarLista = document.querySelector("#mostrar-lista")
const listElement = document.querySelector("ul");


mostrarLista.addEventListener("click", () => { baseAgenda()})

// GET na API

async function baseAgenda ()
{
    try {

        
        const apiColetada = await fetch ("https://sheetdb.io/api/v1/kmaxmkc0yg9ta")
        const apiTransformada = await apiColetada.json()    
        
        console.log(apiTransformada)

        return apiTransformada   
        
    }
    catch (error) {
        console.log(error);
      }

      
}


//  POST na API 

async function postAgenda ()
{
    try {

        const nomeValue = campoNome.value
        const telefoneValue = campoTelefone.value 
        const apiColetada = await fetch ("https://sheetdb.io/api/v1/kmaxmkc0yg9ta", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({ data: { firstname: nomeValue, telefone: telefoneValue  }}),
        });
        
        const apiTransformada = await apiColetada.json()
        

        console.log(apiTransformada)
    }
    catch (error) {
        console.log(error)
    }
}


   
    // DELETE na API

   async function deletaAgenda ()
{
    try {

        const firstName = "sergio" 
        const apiColetada = await fetch (`https://sheetdb.io/api/v1/kmaxmkc0yg9ta/firstname/${firstName}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            
            // body: JSON.stringify({ data: { id: 2, firstname: 'usuario2' }}),
        });
        
        const apiTransformada = await apiColetada.json()
        console.log(apiTransformada)
    }
    catch (error) {
        console.log(error)
    }
}


 //  UPDATE na API
async function updateAgenda ()
{
    try {
        const apiColetada = await fetch (`https://sheetdb.io/api/v1/kmaxmkc0yg9ta/firstname/testando`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ data: { firstname: 'lika' }}),
        });
        const apiTransformada = await apiColetada.json()
        console.log(apiTransformada)
        
    }
    catch (error) {
        console.log(error)
    }
}



