import { Req } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';
import { RequestWithAuth } from './types';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) { }
  @Post()
  async create(@Body() dto: CreatePollDto) {
    return await this.pollsService.createPoll(dto);
  }
  @Post('/join')
  async join(@Body() dto: JoinPollDto) {
    return await this.pollsService.joinPoll(dto);
  }
  @UseGuards(AuthGuard)
  @Post('/rejoin')
  async rejoin(@Req() requset: RequestWithAuth) {
    const { userID, pollID, name } = requset;
    return await this.pollsService.rejoinPoll({
      name,
      pollID,
      userID,
    });
  }
}
