import { Controller, Get, Body, Patch } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Quiz } from './entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  findQuiz(): Promise<Quiz> {
    return this.quizService.findOne(1);
  }

  @Patch()
  update(@Body() updateQuiz: Quiz) {
    return this.quizService.update(1, updateQuiz);
  }
}
