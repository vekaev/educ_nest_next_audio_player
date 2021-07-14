import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Comment, CommentDocument } from "./shemas/comment.shema";
import { Track, TrackDocument } from "./shemas/track.shema";
import { CreateTrackDto } from "./dto/create-track.dto";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,) {}
    
    async getAll(): Promise<Track[]> {
        return await this.trackModel.find()
    }
    
    async getOne(id) {}
    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({
            ...dto,
            listens: 0
        })

        return track;
    }
    async delete() {}
}