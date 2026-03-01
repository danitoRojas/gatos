import { Module } from '@nestjs/common';
import { GatosModule } from './gatos/gatos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RazasModule } from './razas/razas.module';
import { VacunasModule } from './vacunas/vacunas.module';
import { VacunasGatosModule } from './vacunas-gatos/vacunas-gatos.module';
import { UsersModule } from './users/users.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5436'),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),

    GatosModule,

    RazasModule,

    VacunasModule,

    VacunasGatosModule,

    UsersModule,

    EmployeeModule,

    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
