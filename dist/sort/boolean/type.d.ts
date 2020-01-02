import Sort from "../sort";
export default function Type<Entity>(value: any, properties: (keyof Entity)[]): value is Sort<Entity>;
