import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { PlanDto } from '../types/dtos/plan.dto';
import { PlanService } from './plan.service';

@Controller('exercise')
export class PlanController {
  constructor(private exerciseService: PlanService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all exercises'
  })
  @ApiOkResponse({ description: '', type: [PlanDto] })
  getAllPlans(): Promise<PlanDto[]> {
    return this.exerciseService.getAllPlans();
  }
}
