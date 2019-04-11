let Pointer = function() {    
        let k = []
        //let latitude = 0
        //let longitude = 0   
        
    return {            
        //setL: function(lat) { latitude = lat},
        set: (lat, lng) => { k.push([lat, lng])},
        //setL2: (lng) => { longitude = lng},
        //getLatitude: () => { return latitude },
        //getLongitude: () => { return longitude },  
        get: () => { return k }       
    }
}
//arrayy = []
let point = Pointer()

point.set(10, 20)
//arrayy.push(point)
point.set(5, 10) 
/*
/* point.setL(10)
point.setL2(20) */

//arrayy.push(point)

let arrayy = point.get()

console.log(arrayy.lenght)

for (let i in arrayy){
    console.log(arrayy[i])
    console.log(arrayy[i][1])
    
}

var frutas = ['a', 'b', 'c']

console.log(frutas.length)

let ar = ['a', 'b', 'c']
console.log(ar.length)
    //console.log(vetor[i])

