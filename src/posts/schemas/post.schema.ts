import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from '../../users/schemas/user.schema';

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  picture: string;

  @Prop({ default: Date.now })
  created: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);

export type PostDocument = Post & mongoose.Document;
