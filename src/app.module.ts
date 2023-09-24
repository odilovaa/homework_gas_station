import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationModule } from './gas_station/gas_station.module';
import { GasStationController } from './gas_station/gas_station.controller';
import { GasStationService } from './gas_station/gas_station.service';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';
import { GasStationBranchController } from './gas_station_branch/gas_station_branch.controller';
import { GasStationBranchService } from './gas_station_branch/gas_station_branch.service';
import { FuelTypesModule } from './fuel_types/fuel_types.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
  
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: true,

      
    }),
  
    GasStationModule,
  
    GasStationBranchModule,
  
    FuelTypesModule
  ],
  controllers: [GasStationController, GasStationBranchController],
  providers: [GasStationService, GasStationBranchService],
})
export class AppModule {}
