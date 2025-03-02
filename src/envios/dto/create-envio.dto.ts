import { IsString, IsNotEmpty, IsOptional, IsArray, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";

class CreatePaqueteDto {
    @IsInt()
    largo: number;

    @IsInt()
    alto: number;

    @IsInt()
    ancho: number;

    @IsInt()
    peso: number;

    @IsString()
    contenido: string;
}

export class CreateEnvioDto {
    @IsString()
    @IsNotEmpty()
    direccionEnvio: string;

    @IsNotEmpty()
    fechaProgramada: Date;

    @IsString()
    @IsOptional()
    indicaciones?: string;

    // Datos del Cliente
    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    email: string;

    @IsString()
    telefono: string;

    @IsString()
    direccion: string;

    @IsString()
    @IsOptional()
    extensionTelefonica?: string;

    @IsString()
    departamento: string;

    @IsString()
    municipio: string;

    @IsString()
    @IsOptional()
    puntoReferencia?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePaqueteDto)
    paquetes: CreatePaqueteDto[];
}
