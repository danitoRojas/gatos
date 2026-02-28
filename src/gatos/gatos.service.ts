import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGatoDto } from './dto/create-gato.dto';
import { Gato } from './entities/gato.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';
import { RazasService } from 'src/razas/razas.service';
import { Vacuna } from 'src/vacunas/entities/vacuna.entity';
import { VacunasService } from 'src/vacunas/vacunas.service';

@Injectable()
export class GatosService {

  constructor(
    @InjectRepository(Gato) private gatoRepository: Repository<Gato>,
    private readonly razasService: RazasService,
    private readonly vacunasService: VacunasService

  ) { }


  async create(createGatoDto: CreateGatoDto) {
    const raza = await this.razasService.findByName(createGatoDto.raza);
    let vucanas: Vacuna[] = [];
    if (createGatoDto.vacunas) {
      vucanas = await Promise.all(createGatoDto.vacunas.map(nombre => this.vacunasService.findOneByName(nombre)));
    }
    const gato = this.gatoRepository.create({
      nombre: createGatoDto.nombre,
      edad: createGatoDto.edad,
      color: createGatoDto.color,
      raza,
      vacunas: vucanas
    });
    return await this.gatoRepository.save(gato);

  }

  async findAll() {
    return await this.gatoRepository.find();
  }

  async findOne(id: number) {
    const gato = await this.gatoRepository.findOne({ where: { id } });
    if (!gato) {
      throw new NotFoundException(`Gato con id ${id} no encontrado`);
    }
    return gato;
  }

  // async update(id: number, updateGatoDto: UpdateGatoDto) {
  //   const result = await this.gatoRepository.update(id, updateGatoDto);
  //   if (result.affected === 0) {
  //     throw new NotFoundException(`Gato con id ${id} no encontrado`);
  //   }
  //   return this.findOne(id);
  // }

  async remove(id: number) {
    const result = await this.gatoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Gato con id ${id} no encontrado`);
    }
    return { message: `Gato con id ${id} eliminado correctamente` };
  }
}
