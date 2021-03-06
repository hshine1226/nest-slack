import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorator/user.decorator';
import { UndefinedToNullInterceptor } from 'src/common/interceptor/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USER')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserDto,
  })
  @ApiResponse({
    status: 500,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  postLogin(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  postLogout(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('OK');
  }
}
