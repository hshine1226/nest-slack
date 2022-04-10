import { Controller, Get, Post } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Post()
  createChannel() {
    return;
  }

  @Get(':name/channels')
  getAllChannels() {
    return;
  }

  @Get(':name')
  getSpecificChannel() {
    return;
  }

  @Get(':name/chats')
  getChats() {
    return;
  }

  @Post(':name/chats')
  createChats() {
    return;
  }

  @Get(':name/members')
  getAllMembers() {
    return;
  }

  @Post(':name/members')
  inviteMembers() {
    return;
  }
}
