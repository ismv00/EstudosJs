function minhaFuncao1(parametro1) {
    return `aeeee`
}

const minhaFuncao2 = function(parametro1) {
    return `aeee ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `aeee ${parametro1}`
}

const minhaFuncao4 = parametro1 => `aee ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `aee ${parametro1}`
}

obj1.minhaFuncao('test')

const obj2 = {
    minhaFuncao (parametro1) {
        return `aeee ${parametro1}`
    }
}

obj2.minhaFuncao( 'test2')
