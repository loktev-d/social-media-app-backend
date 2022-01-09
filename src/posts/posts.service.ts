import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Post, PostDocument } from './schemas/post.schema';
import { Post as PostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async createPost(post: PostDto): Promise<PostDocument> {
    return await this.postModel.create(post);
  }

  async getAllPosts(): Promise<PostDocument[]> {
    return await this.postModel.find().sort({ created: -1 }).exec();
  }
}
