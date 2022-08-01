

export class Groomer {
    constructor(data){
        this.id = data.id
        this.name= data.name || ""
        this.img = data.img || ""
        this.description = data.description || ""
        this.color = data.color || ""
    }

}