import Id from "./id";
export default function Assign<Data>(type: Data, id: Id): Data & Id;
