import CreateBody from "../../../../create/request/body/body";

export default interface Where extends Partial<Omit<CreateBody, 'hasilTemuan'>> {

    hasilTemuan : number[]
}

