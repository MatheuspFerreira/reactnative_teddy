export function sortPartnersByIdDesc<T extends { id: string }>(array: T[]): T[] {
    return array.sort((a, b) => Number(b.id) - Number(a.id));
}
