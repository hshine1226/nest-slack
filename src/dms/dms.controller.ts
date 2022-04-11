import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'id',
    description: '사용자 id',
  })
  @ApiParam({
    name: 'url',
    description: '워크스페이스 URL',
  })
  @ApiQuery({
    name: 'perPage',
    description: '가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    description: '불러올 페이지',
  })
  @Get(':id/chats')
  getChats(@Query() query, @Param() param) {
    const { perPage, page } = query;
    const { url } = param;

    return;
  }

  @ApiParam({
    name: 'id',
    description: '사용자 id',
  })
  @Post(':id/chats')
  postChats(@Body() body) {
    return;
  }
}
