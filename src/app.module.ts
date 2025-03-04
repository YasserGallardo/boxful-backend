import { Module } from '@nestjs/common';
import { EnviosModule } from './envios/envios.module';
import { ExternalModule } from './external/external.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [EnviosModule, ExternalModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

