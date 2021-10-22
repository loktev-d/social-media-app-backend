import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User as UserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(user: UserDto): Promise<UserDocument> {
    return await this.userModel.create(user);
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return await this.userModel.find().exec();
  }

  async getUser(id: string): Promise<UserDocument> {
    return await this.userModel.findById(id).exec();
  }
}
