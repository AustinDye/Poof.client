import { ProxyState } from "../AppState.js"


export class Groomer {
    constructor({id, name,  img, description, color}){
        this.id = id
        this.name= name || ""
        this.img = img || ""
        this.description = description
        this.color = color
    }

}