import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RateDto } from './dto/rate.dto';
import { RateService } from './rate.service';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) { }

  @Post()
  calculate(@Body() rateDto: RateDto) {
    return this.rateService.calculate(rateDto);
  }
}
