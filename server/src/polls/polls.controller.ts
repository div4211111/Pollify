import { Body, Controller, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) { }
  @Post()
  async create(@Body() dto: CreatePollDto) {
    return await this.pollsService.createPoll(dto);
  }
  @Post('join')
  async join(@Body() dto: JoinPollDto) {
    return await this.pollsService.joinPoll(dto);
  }
  @Post('/rejoin')
  async rejoin() {
    return await this.pollsService.rejoinPoll({
      name: '',
      pollID: '',
      userID: '',
    });
  }
}
