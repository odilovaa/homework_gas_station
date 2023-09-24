import { Module } from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { GasStationController } from './gas_station.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_station } from './models/gas_station.model';

@Module({
  imports: [SequelizeModule.forFeature([Gas_station])],
  providers: [GasStationService],
  controllers: [GasStationController]
})
export class GasStationModule {}
