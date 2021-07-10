import { Controller, Get, Post, Body } from '@nestjs/common';

import { PostsService } from './posts.service';
import { Post as PostDto } from './dto/post.dto';
import { PostDocument } from './schemas/post.schema';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<PostDocument[]> {
    return await this.postsService.getAllPosts();
  }

  @Post()
  async createPost(@Body() post: PostDto): Promise<PostDocument> {
    return this.postsService.createPost(post);
  }
}
