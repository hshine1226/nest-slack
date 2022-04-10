import { Controller, Get, Post, Req, Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  postUsers() {
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
