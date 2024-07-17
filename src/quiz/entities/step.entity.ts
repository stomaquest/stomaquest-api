import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Question } from './question.entity';

export type StepDocument = Step & Document;

@Schema({ collection: 'step', versionKey: false })
export class Step {
  @Prop()
  title: string;

  @Prop()
  type: 'quiz' | 'flip' | 'match';

  @Prop()
  questions: Question[];
}

export const StepSchema = SchemaFactory.createForClass(Step);
