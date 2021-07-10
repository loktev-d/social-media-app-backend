import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  profilePicture: string;

  @Prop()
  bio: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
