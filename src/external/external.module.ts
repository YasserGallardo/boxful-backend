import { Module } from '@nestjs/common';
import { CountriesService } from './countries/countries.service';
import { LocationsService } from './locations/locations.service';
import { ExternalController } from './external.controller';

import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [CountriesService, LocationsService],
  controllers: [ExternalController]
})
export class ExternalModule { }
