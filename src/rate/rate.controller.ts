import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RateDto } from './dto/rate.dto';
import { Bill } from './interfaces/bill';
import { RateService } from './rate.service';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) { }

  @Post()
  @ApiOperation({
    description: 'Establishing a price for a charging process by applying a rate to the CDR (charge detail record) of the corresponding charging process.'
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiOkResponse({
    description: 'Rate applied to CDR.',
    type: Bill,
  })
  calculate(@Body() rateDto: RateDto) {
    return this.rateService.calculate(rateDto);
  }
}
