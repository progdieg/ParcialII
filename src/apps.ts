type Mantenimiento ={
    id:number,
    fecha:number,
    descripcion:string,
    resultado:boolean,

}


var matenimiento1:Mantenimiento={
    id:123456,
    fecha:24122021,
    descripcion:"Arreglar equipos",
    resultado:true
}


// equipos id, marca y modelo 

type Equipos ={
    id:number,
    marca:string,
    modelo:string,
}

var equipos1:Equipos={
    id:33333,
    marca:"Lenovo",
    modelo:"slim"
}