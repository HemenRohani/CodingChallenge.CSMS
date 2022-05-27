import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RateDto } from './dto/rate.dto';
import { Bill } from './interfaces/bill';
import { RateService } from './rate.service';


/**
 * Rate Controller to handle rate calculation
 */
@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) { }

  /**
   * Establishing a price for a charging process by applying a rate to the CDR (charge detail record) of the corresponding charging process.
   * @param {RateDto} rateDto The CDR (charge detail record) and rate components unit price
   * @returns {Bill} The bill
   */
  @Post()
  @HttpCode(200)
  @ApiOperation({
    description: 'Establishing a price for a charging process by applying a rate to the CDR (charge detail record) of the corresponding charging process.'
  })
  @ApiOkResponse({
    description: 'Rate applied to CDR.',
    type: Bill,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad Request.'
  })
  calculate(@Body() rateDto: RateDto) {
    return this.rateService.calculate(rateDto);
  }
}
