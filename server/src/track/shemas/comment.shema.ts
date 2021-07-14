import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Track } from './track.shema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    username: string;

    @Prop()
    text: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Track'}]})
    comments: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);