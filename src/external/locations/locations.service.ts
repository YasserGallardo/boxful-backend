import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Department } from '../interfaces/department.interface';

@Injectable()
export class LocationsService {
    private readonly DEPARTMENTS_API = 'https://api.npoint.io/19485e724f0fe2228641';
    private readonly MUNICIPALITIES_API = 'https://api.npoint.io/253f0ee259ef1620a547/departamentos/';

    async getDepartments(): Promise<Department[]> {
        try {
            const { data } = await axios.get(this.DEPARTMENTS_API);
            return data.departamentos.map(departamento => ({
                nombre: departamento.nombre,
                codigo: parseInt(departamento.codigo || '0', 10) - 1,
            }));

        } catch (error) {
            throw new Error(`Error al obtener departamentos: ${(error as Error).message}`);
        }
    }

    async getMunicipalities(idDepartamento: number) {
        try {
            const { data } = await axios.get<{ data: any }>(`${this.MUNICIPALITIES_API}${idDepartamento}`);
            if (data && typeof data === 'object' && 'municipios' in data) {
                return data.municipios;
            } else {
                throw new Error('Invalid response data');
            }
        } catch (error) {
            throw new Error(`Error al obtener municipios: ${(error as Error).message}`);
        }
    }
}
