import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountriesService {
    private readonly API_URL = 'https://restcountries.com/v3.1/subregion/Central%20America?fields=name,flags,idd';

    async getCountries() {
        try {
            const { data } = await axios.get<any[]>(this.API_URL);

            return data.map(item => ({
                flag: {
                    png: item.flags?.png || '',
                    svg: item.flags?.svg || '',
                },
                name: item.name?.common || 'Unknown',
                extension: item.idd?.root ? item.idd.root + (item.idd.suffixes?.join('') || '') : 'N/A',
            }));
        } catch (error) {
            throw new Error(`Error al obtener países: ${(error as Error).message}`);
        }
    }
}
