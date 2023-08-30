import { createMediaDto } from './medias.dto';
import { MediasService } from './medias.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('medias')
export class MediasController {

  constructor(private readonly MediasService: MediasService) { }

  @Post()
  @HttpCode(HttpStatus.OK)
  createMedia(@Body() body: createMediaDto) {
    return this.MediasService.createMedia(body);
  }

  @Get()
  getMedias() {
    return this.MediasService.getMedias();
  }

  @Get(':id') 
  getMediaByParam(@Param('id') id: string) {
    const idNum = parseInt(id);
    return this.MediasService.getMediaByParam(idNum);
  }

  @Put(':id')
  updateMedia(@Param('id') id: string, @Body() data: createMediaDto) {
    const idNum = parseInt(id); 
    return this.MediasService.updateMedia(idNum, data);
  }

  @Delete(':id')
  deleteMedia(@Param('id') id: string) {
    const idNum = parseInt(id); 
    return this.MediasService.deleteMedia(idNum);
  }



}