import { PartialType } from '@nestjs/mapped-types';
import { CreateVacunasGatoDto } from './create-vacunas-gato.dto';

export class UpdateVacunasGatoDto extends PartialType(CreateVacunasGatoDto) {}
