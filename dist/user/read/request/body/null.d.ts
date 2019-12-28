import ReadBody from "../../response/body/body";
export default function Null(): Omit<ReadBody, 'extraAccess' | 'access' | 'position'>;
