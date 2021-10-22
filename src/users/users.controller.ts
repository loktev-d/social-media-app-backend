import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDocument } from './schemas/user.schema';
import { User as UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UserDocument[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param() params): Promise<UserDocument> {
    return await this.usersService.getUser(params.id);
  }

  @Post()
  async createUser(@Body() user: UserDto): Promise<UserDocument> {
    return await this.usersService.createUser(user);
  }
}
