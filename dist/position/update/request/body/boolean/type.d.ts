import Body from "../../../../create/request/body/body";
export default function Type<Access, Extended extends Body<Access> = Body<Access>>(value: any, access: (value: any) => value is Access): value is Extended;
