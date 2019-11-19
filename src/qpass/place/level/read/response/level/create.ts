import Data from "./level";

export default class Create implements Data {

    constructor(
        public id : number,
        public created : string,
        public updated : string,
        public name : string,
        public abbreviation : string,
        public deactivated : null|string,
        public type : null,
    ) {

    }
}