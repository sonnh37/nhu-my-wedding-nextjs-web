import {CategoryGetAllQuery, OutfitGetAllQuery} from "@/types/queries/outfit-query";
import {Category, Outfit} from "@/types/outfit";
import axios from "axios";

export const fetchOutfits = (query: OutfitGetAllQuery): Promise<PagedResponse<Outfit>> => {
    const params = new URLSearchParams(query as any).toString();

    return axios.get(`https://localhost:7192/outfits?${params}`)
        .then((response) => {
            return response.data as PagedResponse<Outfit>;
        })
        .catch((error) => {
            console.error('Failed to fetch outfits:', error);
            throw error;
        });
};

export const fetchOutfit = (id: string): Promise<ItemResponse<Outfit>> => {

    return axios.get(`https://localhost:7192/outfits/${id}`)
        .then((response) => {
            return response.data as ItemResponse<Outfit>;
        })
        .catch((error) => {
            console.error('Failed to fetch outfits:', error);
            throw error;
        });
};

export const fetchCategories = async (query: CategoryGetAllQuery): Promise<Category[]> => {
    const params = new URLSearchParams(query as any).toString();
    try {
        const response = await axios.get(`https://localhost:7192/categories?${params}`);
        return response.data.results as Category[];
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        throw error;
    }
};