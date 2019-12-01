import Business from "./business";

export default class Create implements Business {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public name : string,
        public abbreviation : string,
        public deactivate : null|string
    ) {

    }
}