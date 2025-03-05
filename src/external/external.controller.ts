import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CountriesService } from './countries/countries.service';
import { LocationsService } from './locations/locations.service';
import { ResponseDto } from 'src/envios/dto/response.dto';

import * as countries from './countries/data/countries.json';

@Controller('external')
export class ExternalController {
    constructor(
        private readonly countriesService: CountriesService,
        private readonly locationsService: LocationsService
    ) { }

    @Get('countries')
    async getCountries() {
        return new ResponseDto(countries, "Paises encontrados correctamente");
    }

    @Get('departamentos')
    async getDepartments() {
        const data = await this.locationsService.getDepartments();
        return new ResponseDto(data, "Departamentos encontrados correctamente");
    }

    @Get('municipios/:id')
    async getMunicipalities(@Param('id') id: number) {
        const data = await this.locationsService.getMunicipalities(id);
        return new ResponseDto(data, "Municipios encontrados correctamente");
    }
}
