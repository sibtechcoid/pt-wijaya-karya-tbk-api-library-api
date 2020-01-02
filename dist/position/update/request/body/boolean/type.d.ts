import Body from "../../../../create/request/body/body";
export default function Type<Access, Group, Extended extends Body<Access, Group> = Body<Access, Group>>(value: any, access: (value: any) => value is Access): value is Extended;
