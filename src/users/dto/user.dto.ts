import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from './join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    example: 'hshine1226',
    description: '사용자 id',
  })
  public id: string;
}
