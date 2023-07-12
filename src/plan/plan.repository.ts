import { Injectable, Logger } from '@nestjs/common';
import { Collection } from 'mongodb';
import { MongoService, CollectionNames } from '../shared/mongodb/mongodb.provider';
import { PlanEntity } from '../types/entities/plan.entity';

@Injectable()
export class PlanRepository {

  public get collection(): Collection<PlanEntity> {
    return this.mongoService.getCollection(CollectionNames.PLAN);
  }

  constructor(
    private logger: Logger,
    private readonly mongoService: MongoService,
  ) { }

  async getAll(): Promise<PlanEntity[]> {
    this.logger.debug('[PlanRepository:getAll] enter.');
    try {
      const collection = this.collection;
      const allRecords = await collection.find({}).toArray();
      this.logger.debug(`[PlanRepository:getAll] result entities ${
        allRecords.map(({ id }) => ({id }))
      }`);
      return allRecords;
    } catch (error) {
      this.logger.error(`[PlanRepository:getAll] Error ${(error as Error).message}`);
      throw error;
    }
  }

}
