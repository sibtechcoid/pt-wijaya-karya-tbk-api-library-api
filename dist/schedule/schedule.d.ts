export default interface Schedule {
    plan: [Date | string, Date | string];
    realize: [Date | string | null, Date | string | null];
}
