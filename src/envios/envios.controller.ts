import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { EnviosService } from "./envios.service";
import { CreateEnvioDto } from "./dto/create-envio.dto";
import { ResponseDto } from "./dto/response.dto";
import { Envio } from "@prisma/client";
import { JwtGuard } from "src/auth/guards/jwt.guard";

@UseGuards(JwtGuard)
@Controller("envios")
export class EnviosController {
    constructor(private readonly enviosService: EnviosService) { }

    @Get()
    async getAllEnvios(): Promise<ResponseDto<Envio[]>> {
        const data = await this.enviosService.getAllEnvios();
        return new ResponseDto(data, "Envíos encontrados correctamente");
    }

    @Post()
    async createEnvio(@Body() createEnvioDto: CreateEnvioDto): Promise<ResponseDto<Envio>> {
        const data = await this.enviosService.createEnvio(createEnvioDto);
        return new ResponseDto(data, "Envío creado correctamente");
    }
}
