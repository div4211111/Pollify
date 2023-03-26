import { Body } from '@nestjs/common';
import { Logger, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';

@Controller('polls')
export class PollsController {
  @Post()
  async create(@Body() dto: CreatePollDto) {
    Logger.log('In create!');
    return dto;
  }
  @Post('join')
  async join(@Body() dto: JoinPollDto) {
    Logger.log('In join!');
    return dto;
  }
  @Post('/rejoin')
  async rejoin() {
    Logger.log('In rejoin!');
  }
}
