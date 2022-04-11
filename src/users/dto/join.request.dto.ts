import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'hshine1226@gmail.com',
    description: '이메일',
  })
  public email: string;

  @ApiProperty({
    example: '최준혁',
    description: '닉네임',
  })
  public nickname: string;

  @ApiProperty({
    example: 'thisisstrongpassword!@',
    description: '패스워드',
  })
  public password: string;
}
