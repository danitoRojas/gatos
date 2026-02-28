import { Module } from '@nestjs/common';
import { VacunasGatosService } from './vacunas-gatos.service';
import { VacunasGatosController } from './vacunas-gatos.controller';

@Module({
  controllers: [VacunasGatosController],
  providers: [VacunasGatosService],
})
export class VacunasGatosModule {}
