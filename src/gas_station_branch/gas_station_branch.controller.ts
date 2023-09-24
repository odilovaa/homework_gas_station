import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { CreateGas_station_branchDto } from './dto/create-gas_station_branch.dto';
import { Gas_station_branch } from './models/gas_station_branch.model';
import { UpdateGas_station_branchDto } from './dto/update-gas_station_branch.dto';


@Controller('gas-station-branch')
export class GasStationBranchController {
    constructor(private readonly gasStationBranchService: GasStationBranchService){}

    @Post('create')
    async createGas_station_branch(@Body() createGas_station_branchDto: CreateGas_station_branchDto) :Promise<Gas_station_branch>{
        return this.gasStationBranchService.createGas_station_branch(createGas_station_branchDto);
    }

    @Get('all')
    async findAllGas_station() :Promise<Gas_station_branch[]>{
        return this.gasStationBranchService.findAllGas_station_branch()
    }

    @Get(':id')
    async findByID(@Param("id") id: string) :Promise<Gas_station_branch>{
        return this.gasStationBranchService.findByID(+id);
    }

    @Get('name/:name')
    async findByName(@Param("name") name: string) :Promise<Gas_station_branch>{
        return this.gasStationBranchService.findByName(name);
    }

    @Put(':id')
    async updateById(@Param('id') id: string, @Body() updateGas_station_branchDto: UpdateGas_station_branchDto){
        return this.gasStationBranchService.updateById(+id, updateGas_station_branchDto);
    }

    @Delete(':id')
    async deleteById(@Param("id") id: string) :Promise<number>{
        return this.gasStationBranchService.deleteById(+id);
    }
    
}