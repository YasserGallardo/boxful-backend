import { Module } from '@nestjs/common';
import { CountriesService } from './countries/countries.service';
import { LocationsService } from './locations/locations.service';
import { ExternalController } from './external.controller';

@Module({
  providers: [CountriesService, LocationsService],
  controllers: [ExternalController]
})
export class ExternalModule {}
