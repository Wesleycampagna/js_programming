const test = async () => {
    let five = 'nada'
    console.log('...')
    await setTimeout(() => {
        five =  'five'
        console.log('...')
    }, 2000)

    return five
}