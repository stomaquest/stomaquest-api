import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ collection: 'question', versionKey: false })
export class Question {
  @Prop()
  question: string;

  @Prop()
  answer: string;

  @Prop()
  image_url?: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
