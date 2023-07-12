import * as ObjectID from 'mongodb';
import { ExerciseEntity } from './exercise.entity';

export class UsedExerciseEntity {
  exerciseRef?: ExerciseEntity; // populated
  exerciseIdRef: ObjectID.ObjectId = new ObjectID.ObjectId();
  weight: number = 0;
  sets: number = 0;
  comment?: string
}

export class PlanEntity {
  _id?: ObjectID.ObjectId;
  id: string = '';       
  trainee: string = '';
  assignedDate: Date = new Date();
  comment?: string;    
  exercises: UsedExerciseEntity[] = [];   
}

