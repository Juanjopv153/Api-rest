const sexo = (i) => new Promise((resolve, reject) => {
    const numero = []
    for (let e = 0; e < i; e++) {
        const element = e + Math.floor(Math.random()*6)
        console.log(element);
        numero.push(element)
        if (element===3){
            reject({
                error: true,
                message: "Mama bicho"
                
            })
            break
        }
    }
    resolve({
        error: false,
        message: "Sos un capo"
    })
})

sexo(6).then(res => console.log(res.message))
.catch(error=> console.log(error.message))