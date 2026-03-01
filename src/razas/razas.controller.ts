import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RazasService } from './razas.service';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';
import { Role } from 'src/auth/enums/rol.enum';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { Auth } from 'src/auth/decorator/auth.decorator';


@UseGuards(AuthGuard)
@Auth(Role.ADMIN)
@UseGuards(AuthGuard, RolesGuard)
@Controller('razas')
export class RazasController {
  constructor(private readonly razasService: RazasService) { }

  @Post()
  create(@Body() createRazaDto: CreateRazaDto) {
    return this.razasService.create(createRazaDto);
  }

  @Get()
  findAll() {
    return this.razasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.razasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRazaDto: UpdateRazaDto) {
    return this.razasService.update(+id, updateRazaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.razasService.remove(+id);
  }
}
