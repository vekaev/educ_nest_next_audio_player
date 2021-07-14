import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Track, TrackSchema } from "./shemas/track.shema";
import { Comment, CommentSchema } from "./shemas/comment.shema";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
    ],
    controllers: [TrackController],
    providers: [TrackService]
})
export class TrackModule {

}