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
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
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
