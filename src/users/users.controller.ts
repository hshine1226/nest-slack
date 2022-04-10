import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { joinRequestDto } from './dto/join.request.dts';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  postUsers(@Body() data: joinRequestDto) {
    this.usersService.postUsers(data);
    return;
  }

  @Post('login')
  postLogin(@Req() req) {
    return req.user;
  }

  @Post('logout')
  postLogout(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('OK');
  }
}
