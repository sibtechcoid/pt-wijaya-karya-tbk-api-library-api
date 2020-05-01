import CreateBody from "../../../../read/response/body/body";

export default interface Where extends  Partial<Omit<CreateBody, 'kuisioner'|'audit'|'dari'|'untuk'>> {

    kuisioner ?: number;
    audit ?: number;
    dari ?: number;
    untuk ?: number;
}

