import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name) private readonly quizModel: Model<QuizDocument>,
  ) {}

  findOne(id: number): Promise<Quiz> {
    return this.quizModel.findById(id);
  }

  update(id: number, updateQuiz: Quiz) {
    return this.quizModel.updateOne({ _id: id }, updateQuiz);
  }
}
