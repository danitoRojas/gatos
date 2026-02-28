import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacunasGatosService } from './vacunas-gatos.service';
import { CreateVacunasGatoDto } from './dto/create-vacunas-gato.dto';
import { UpdateVacunasGatoDto } from './dto/update-vacunas-gato.dto';

@Controller('vacunas-gatos')
export class VacunasGatosController {
  constructor(private readonly vacunasGatosService: VacunasGatosService) {}

  @Post()
  create(@Body() createVacunasGatoDto: CreateVacunasGatoDto) {
    return this.vacunasGatosService.create(createVacunasGatoDto);
  }

  @Get()
  findAll() {
    return this.vacunasGatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacunasGatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacunasGatoDto: UpdateVacunasGatoDto) {
    return this.vacunasGatosService.update(+id, updateVacunasGatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacunasGatosService.remove(+id);
  }
}
