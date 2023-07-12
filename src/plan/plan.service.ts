import { Injectable, Logger } from '@nestjs/common';
import { PlanRepository } from './plan.repository';
import { PlanDto } from '../types/dtos/plan.dto';

@Injectable()
export class PlanService {
  constructor(
        private readonly exerciseRepository: PlanRepository,
        private readonly logger: Logger,
  ) { }

  async getAllPlans(): Promise<PlanDto[]> {
    this.logger.debug('[PlanService:getAllPlans] enter.');
    try {
      const allPlanEntities = await this.exerciseRepository.getAll();
      this.logger.debug(`[PlanService:getAllPlans] result entities ${
        allPlanEntities.map(({ id }) => ({ id }))
      }`);
      return allPlanEntities.map<PlanDto>(({_id, ...rest}) => (rest));
    } catch (error) {
      this.logger.error(`[PlanService:getAllPlans] Error ${(error as Error).message}`);
      throw error;
    }
  }
}
