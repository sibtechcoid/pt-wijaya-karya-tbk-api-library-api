import Level from "./level";

export default class Create implements Level {

    public created : Date;
    public updated : Date;
    public deactivated : null|Date;

    constructor(
        public id : number,
        created : Date,
        updated : Date,
        public name : string,
        public abbreviation : string,
        deactivated : null|Date,
        public type : null,
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