import { Injectable } from '@nestjs/common';
import { joinRequestDto } from './dto/join.request.dto';

@Injectable()
export class UsersService {
  postUsers({ email, nickname, password }: joinRequestDto) {}
}
