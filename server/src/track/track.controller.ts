import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Track } from "./shemas/track.shema";
import { TrackService } from "./track.service";

@Controller('/track')
export class TrackController {
    constructor(private trackService: TrackService) {}

    @Get()
    async getAll(): Promise<Track[]> {
        return this.trackService.getAll()
    }

    @Get(':id')
    getOne(id) {
        return this.trackService.getOne(id)
    }

    @Post()
    create(@Body() dto: CreateTrackDto) {
        return this.trackService.create(dto)
    }

    @Delete()
    delete() {
        return this.trackService.delete()
    }

}