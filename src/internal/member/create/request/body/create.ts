import Member from "./body";

export default class Create implements Member {

    constructor(
       public project : number,
       public user : number,
       public position : number,
    ) {}
}