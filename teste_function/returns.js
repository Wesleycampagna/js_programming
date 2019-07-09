let x = (x) => {
    return x, x+1
}

k = x(4)[1]
l = x(4)

console.log(k);
console.log(l);

/* aparentemente não há a possibilidade de retornar dois valores na função */