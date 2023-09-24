import { Module } from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { GasStationBranchController } from './gas_station_branch.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gas_station_branch } from './models/gas_station_branch.model';

@Module({
  imports: [SequelizeModule.forFeature([Gas_station_branch])],
  providers: [GasStationBranchService],
  controllers: [GasStationBranchController]
})
export class GasStationBranchModule {}
