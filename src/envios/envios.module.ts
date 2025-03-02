import { Module } from "@nestjs/common";
import { EnviosService } from "./envios.service";
import { EnviosController } from "./envios.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [EnviosController],
    providers: [EnviosService],
    imports: [PrismaModule],
})
export class EnviosModule { }