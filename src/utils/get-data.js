import { createQueryString } from "./create-query-string";
import { mapApiData } from "./map-api-data";

const API_VERSION = 'v1'

export const getData = async (queryParams) => {
    const response = await fetch(`https://api.peviitor.ro/${API_VERSION}/search/?${createQueryString(queryParams)}`);
    const data = await response.json();
    return {
        jobs: data.response.docs,
        total: data.response.numFound
    };
}

export const getTotalRomania = async () => {
    const response = await fetch(`https://api.peviitor.ro/${API_VERSION}/search/?country=România`);
    const data = await response.json();
    return data.response.numFound;
}

export const getAllJobs = async () => {
    const response = await fetch(`https://api.peviitor.ro/${API_VERSION}/search/`);
    const data = await response.json();
    return data.response.numFound;
}

export const getTotalCompanies = async () => {
    const response = await fetch(`https://api.peviitor.ro/${API_VERSION}/logo/`);
    const data = await response.json();
    return data.logos.length;
}
