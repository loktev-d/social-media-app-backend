import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  OnGatewayConnection,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

import { PostsService } from './posts.service';
import { Post } from './dto/post.dto';

@WebSocketGateway({ cors: true })
export class PostsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private postsService: PostsService) {}

  async handleConnection(@ConnectedSocket() client: Socket) {
    const data = await this.postsService.getAllPosts();
    client.emit('all_posts', data);
  }

  @SubscribeMessage('create_post')
  async handleCreatePost(@MessageBody() post: Post) {
    const data = await this.postsService.createPost(post);
    this.server.emit('new_post', data);
  }
}
