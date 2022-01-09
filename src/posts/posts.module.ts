import { MongooseModule } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post, PostSchema } from './schemas/post.schema';
import { PostsGateway } from './posts.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [],
  providers: [PostsService, PostsGateway],
})
export class PostsModule {}
