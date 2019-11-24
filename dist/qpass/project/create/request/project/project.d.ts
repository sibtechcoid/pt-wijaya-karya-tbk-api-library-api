import Member from "../member/member";
export default interface Project {
    planned: [Date | string, Date | string];
    realize: [Date | string, Date | string];
    place: number;
    members: Member[];
}
