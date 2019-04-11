var obj = {
    name: "asdaksdk"
}

console.log("--------------------")

// primeiro é pra mostrar que objects declarados dentro pertencem a obj
for (var i in obj)
    console.log(i)     // se roletar com o var "i" mostra atributos 


// segundo é pra mostrar que objects declarados dentro pertencem a obj mas a sua demonstração
for (var i in obj)
    console.log(obj[i])    

console.log("--------------------")
// declaração de novo atributo 
obj.idade = 10 // é equivalente a var obj = { name: "asdaksdk", idade: 10 }
obj.pais = "Brazil"

for (var i in obj)
    console.log(obj[i]) 

console.log("--------------------")

//delete
delete obj.idade

for (var i in obj)
    console.log(obj[i]) 

