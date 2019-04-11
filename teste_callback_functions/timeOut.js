// javascript

UsersArray = ["jão", "crosoé", "Oh Ana Julia"]

const now = () => {
    console.log("now.. ")
}

var arrayU = null

for (var i in UsersArray)
    console.log(UsersArray[i])

// supondo que vai buscar os usuarios do banco de dados ele tem 2000 ms pra tentar buscar. 
const getUsersDataBase = () => {
    setTimeout( () => {
        console.log("getting.. ")
        arrayU =  UsersArray
        print()
    }, 200)

    // imprime primeiro que o timeout acima
    console.log("quitting.. ")
}

console.log("setting.. ")
// chama a function acima agora 
getUsersDataBase()

function print () {
   
//getUsersDataBase() chama essa função após 200 ms
for (var i in arrayU)
    console.log("sec: " + arrayU[i])
}

// chama primeiro que getUsersDataBase()
now()