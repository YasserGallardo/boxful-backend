import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateEnvioDto } from "./dto/create-envio.dto";
import { Envio } from "@prisma/client";

@Injectable()
export class EnviosService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllEnvios(): Promise<Envio[]> {
        try {
            const envios = await this.prisma.envio.findMany({
                include: { paquetes: true },
            });

            if (!envios || envios.length === 0) {
                throw new HttpException("No se encontraron envíos", HttpStatus.NOT_FOUND);
            }

            return envios;
        } catch (error) {
            console.error("Error en getAllEnvios:", error);
            throw new HttpException("Error al obtener los envíos", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createEnvio(data: CreateEnvioDto): Promise<Envio> {
        try {
            const envio = await this.prisma.envio.create({
                data: {
                    direccionEnvio: data.direccionEnvio,
                    fechaProgramada: data.fechaProgramada,
                    indicaciones: data.indicaciones,
                    nombre: data.nombre,
                    apellido: data.apellido,
                    email: data.email,
                    telefono: data.telefono,
                    direccion: data.direccion,
                    extensionTelefonica: data.extensionTelefonica ?? "",
                    departamento: data.departamento,
                    municipio: data.municipio,
                    puntoReferencia: data.puntoReferencia,
                    paquetes: {
                        create: data.paquetes,
                    },
                },
                include: { paquetes: true },
            }) as Envio;

            if (!envio) {
                throw new HttpException("No se pudo crear el envío", HttpStatus.BAD_REQUEST);
            }

            return envio;
        } catch (error) {
            console.error("Error en createEnvio:", error);
            throw new HttpException("Error al crear el envío", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
