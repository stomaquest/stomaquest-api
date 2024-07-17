import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Step } from './step.entity';

export type QuizDocument = Quiz & Document;

@Schema({ collection: 'quiz', versionKey: false })
export class Quiz {
  @Prop()
  _id?: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  steps: Step[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
