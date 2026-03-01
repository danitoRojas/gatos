import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsOptional, IsString } from "class-validator";

export class CreateGatoDto {


    @ApiProperty({
        description: 'Nombre del gato',
        example: 'Garfield',
    })
    @IsString()

    nombre: string;

    @ApiProperty({
        description: 'Raza del gato',
        example: 'Persa',
    })
    @IsString()
    raza: string;

    @ApiProperty({
        description: 'Edad del gato',
        example: 5,
    })
    @IsInt()
    @IsOptional()
    edad: number;

    @ApiProperty({
        description: 'Color del gato',
        example: 'Naranja',
    })
    @IsString()
    color: string;

    @ApiProperty({
        description: 'Vacunas del gato',
        example: ['Rabia', 'Leucemia'],
    })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    vacunas?: string[];
}
