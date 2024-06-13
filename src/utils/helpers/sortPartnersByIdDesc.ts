import { IPartners } from "../../interface/IPartners";

export function sortPartnersByIdDesc(partners: IPartners[]): IPartners[] {
    return partners.sort((a, b) => Number(b.id) - Number(a.id));
};