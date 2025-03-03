import { Module } from '@nestjs/common';
import { EnviosModule } from './envios/envios.module';
import { ExternalModule } from './external/external.module';


@Module({
  imports: [EnviosModule, ExternalModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

