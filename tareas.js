let fs=require ('fs');

module.exports = moduloTareas = {
    archivo: './tareas.json',
    leerJSON : function(){
        let listaDeTareas = fs.readFileSync(this.archivo, 'utf-8')
        return JSON.parse(listaDeTareas)
    }

}
