import CreateBody from "../../../create/request/body/body";

export default interface Body extends CreateBody {

    plan : [Date|string, Date|string];
    realize : [Date|string|null, Date|string|null];
}