import * as ObjectID from 'mongodb';
import { ExerciseDto } from './exercise.dto';

export class UsedExerciseDto {
  exercise?: ExerciseDto; // populated
  weight: number = 0;
  sets: number = 0;
  comment?: string
}

export class PlanDto {
  _id?: ObjectID.ObjectId;
  id: string = '';       
  assignedDate: Date = new Date();
  comment?: string;    
  exercises: UsedExerciseEntity[] = [];   
}

