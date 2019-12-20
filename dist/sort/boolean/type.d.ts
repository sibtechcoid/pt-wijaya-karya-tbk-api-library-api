import Sort from "../sort";
export default function Type<Entity>(value: any, entity: Entity): value is Sort<Entity>;
