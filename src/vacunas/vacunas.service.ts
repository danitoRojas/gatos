import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacuna } from './entities/vacuna.entity';

@Injectable()
export class VacunasService {


  constructor(
    @InjectRepository(Vacuna) private vacunaRepository: Repository<Vacuna>
  ) { }

  async create(createVacunaDto: CreateVacunaDto) {
    const vacuna = this.vacunaRepository.create(createVacunaDto);
    return await this.vacunaRepository.save(vacuna);
  }

  async findAll() {
    return await this.vacunaRepository.find();
  }

  async findOne(id: number) {
    return await this.vacunaRepository.findOneBy({ id });
  }

  async update(id: number, updateVacunaDto: UpdateVacunaDto) {
    await this.vacunaRepository.update(id, updateVacunaDto);
    return this.findOne(id);

  }

  async remove(id: number) {
    await this.vacunaRepository.delete(id);
    return { message: `Vacuna con id ${id} eliminada correctamente` };
  }

  async findOneByName(nombre: string) {
    const vacuna = await this.vacunaRepository.findOneBy({ nombre });
    if (!vacuna) {
      throw new NotFoundException(`Vacuna con nombre ${nombre} no encontrada`);
    }
    return vacuna;
  }
}
