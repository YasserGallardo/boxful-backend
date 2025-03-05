import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class CountriesService {
    // Cambiar la ruta para que sea relativa y funcione correctamente en tu proyecto
    private readonly filePath = join(__dirname, '../../data', 'countries.json'); // Ruta relativa

    getCountries() {
        try {
            // Lee el archivo JSON local
            const countries = JSON.parse(readFileSync(this.filePath, 'utf-8'));

            // Retorna los datos de los países
            return countries.map(item => ({
                flag: {
                    png: item.flag?.png || '',
                    svg: item.flag?.svg || '',
                },
                name: item.name || 'Unknown',
                extension: item.extension || 'N/A',
            }));
        } catch (error) {
            throw new Error(`Error al obtener países: ${(error as Error).message}`);
        }
    }
}
