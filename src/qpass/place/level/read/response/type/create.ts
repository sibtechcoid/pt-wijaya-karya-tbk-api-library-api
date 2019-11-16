import Type from "./type";
import Level from "../level/level";

export default class Create implements Type {

    public created : Date;
    public updated : Date;
    public deactivated : null|Date;

    constructor(
        public id : number,
        created : Date,
        updated : Date,
        public name : string,
        public abbreviation : string,
        deactivated : null|Date
    ) {

        this.created = new Date(created);
        this.updated = new Date(updated);

        if(deactivated) {

            this.deactivated = new Date(deactivated);
            
        } else {

            this.deactivated = null;
        }
    }
}