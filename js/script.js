const btnDelete = document.getElementById('btnDelete');
const inpCod = document.getElementById('inpCod');
//código

const api = axios.create({

    baseURL:'http://18.224.8.119:3334/'

});

btnDelete.onclick = ()=>{
    let cod = inpCod.value;
    try {
        api.delete('produto/' + cod).then(
            resp=>{
                console.log('Registro deletado !!!!!!!');
            }
        );
    } catch (error){
        console.log('error :' + error);
    } 
};