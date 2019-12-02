import Body from "../body";
export default function Type<Group, Access, Extended extends Body<Group, Access> = Body<Group, Access>>(value: any, access: (value: any) => value is Access, group: Group): value is Extended;
