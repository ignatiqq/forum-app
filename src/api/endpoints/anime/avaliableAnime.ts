import { IRequestPagination } from "@api/types";

import { paramsToString } from "@/utils/reuquest";
import animeAPI from "../config";
import { AxiosResponse } from "axios";

export interface IAllAnimesData {
    images: {
        jpg: {
            image_url: string
        }
    },
    title: string,
    duration: string
}

const avaliableAnimes = Object.freeze({
    getAllAnimes: ({page, limit}: IRequestPagination): Promise<AxiosResponse<{data: IAllAnimesData[], pagination: {[key:string]: any}}>> => {
        return animeAPI.get(`/anime?${paramsToString({limit, page})}`)
    }
})

export default avaliableAnimes;