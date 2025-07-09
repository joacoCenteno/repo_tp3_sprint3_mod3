export default class IRepository{
    obtenerPorId(id){
        throw new Error('Metodo obtenerPorId() no implementado');
    }

    obtenerTodos(){
        throw new Error('Metodo obtenerTodos() no implementado');
    }

    buscarPorAtributo(atributo, valor){
        throw new Error('Metodo buscarPorAtributo() no implementado');
    }

    obtenerMayoresDe30(){
        throw new Error('Metodo obtenerMayoresDe30() no implementado');
    }

    crearInstanciaModelo(body){
        throw new Error('Metodo crearInstanciaModelo() no implementado');
    }

    actualizar(id,body){
        throw new Error('Metodo actualizar() no implementado');
    }

    eliminarPorId(id){
        throw new Error('Metodod eliminarPorId() no implementado');
    }

    eliminarPorNombre(nombre){
        throw new Error('Metodo elimiarPorNombre() no implementado');
    }

}