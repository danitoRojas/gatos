import { Injectable } from '@nestjs/common';
import { CreateVacunasGatoDto } from './dto/create-vacunas-gato.dto';
import { UpdateVacunasGatoDto } from './dto/update-vacunas-gato.dto';

@Injectable()
export class VacunasGatosService {
  create(createVacunasGatoDto: CreateVacunasGatoDto) {
    return 'This action adds a new vacunasGato';
  }

  findAll() {
    return `This action returns all vacunasGatos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vacunasGato`;
  }

  update(id: number, updateVacunasGatoDto: UpdateVacunasGatoDto) {
    return `This action updates a #${id} vacunasGato`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacunasGato`;
  }
}
