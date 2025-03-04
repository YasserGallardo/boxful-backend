import { Module } from "@nestjs/common";
import { EnviosService } from "./envios.service";
import { EnviosController } from "./envios.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
    controllers: [EnviosController],
    providers: [EnviosService],
    imports: [PrismaModule, AuthModule],
})
export class EnviosModule { }