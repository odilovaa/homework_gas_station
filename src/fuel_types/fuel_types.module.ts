import { Module } from '@nestjs/common';
import { FuelTypesService } from './fuel_types.service';
import { FuelTypesController } from './fuel_types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fuel_types } from './models/fuel_types.model';

@Module({
  imports: [SequelizeModule.forFeature([Fuel_types])],
  providers: [FuelTypesService],
  controllers: [FuelTypesController]
})
export class FuelTypesModule {}
