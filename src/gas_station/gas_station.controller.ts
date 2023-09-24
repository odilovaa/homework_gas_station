import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { CreateGas_stationDto } from './dto/create-gas_station.dto';
import { Gas_station } from './models/gas_station.model';
import { UpdateGas_stationDto } from './dto/update-gas_station.dto';

@Controller('gas-station')
export class GasStationController {
    constructor(private readonly gasStationService: GasStationService){}

    @Post('create')
    async createGas_statin(@Body() createGas_stationDto: CreateGas_stationDto) :Promise<Gas_station>{
        return this.gasStationService.createGas_station(createGas_stationDto);
    }

    @Get('all')
    async findAllGas_station() :Promise<Gas_station[]>{
        return this.gasStationService.findAllGas_station()
    }

    @Get(':id')
    async findByID(@Param("id") id: string) :Promise<Gas_station>{
        return this.gasStationService.findByID(+id);
    }

    @Get('name/:name')
    async findByName(@Param("name") name: string) :Promise<Gas_station>{
        return this.gasStationService.findByName(name);
    }

    @Put(':id')
    async updateById(@Param('id') id: string, @Body() updateGas_stationDto: UpdateGas_stationDto){
        return this.gasStationService.updateById(+id, updateGas_stationDto);
    }

    @Delete(':id')
    async deleteById(@Param("id") id: string) :Promise<number>{
        return this.gasStationService.deleteById(+id);
    }
    
}
