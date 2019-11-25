import Id from "./id";


export default function Assign<Data>(type : Data, id : Id): Omit<Data, 'id'> & Id {

    return Object.assign(type, id);
}