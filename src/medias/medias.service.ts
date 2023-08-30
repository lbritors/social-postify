import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createMediaDto } from './medias.dto';
import { MediasRepository } from './medias.repository';

@Injectable()
export class MediasService {

  constructor(private readonly repository: MediasRepository) {}  
  //FIXME 
  async createMedia(data: createMediaDto) {
    const { title, username } = data;
    const check = await this.repository.checkMedia(title, username);
    if (check) throw new HttpException("Content already exists", HttpStatus.CONFLICT);
    return this.repository.createMedia(data);
  }

  getMedias() {
    return this.repository.getMedias();
  }

  async getMediaByParam(id: number) {

    const media = await this.repository.getMediaByParam(id);
    if (!media) throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    
    return media;
  }

  async updateMedia(id: number, data: createMediaDto) {
    const { username, title } = data;
    const checkId = await this.repository.getMediaByParam(id);
    if (!checkId) throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    const checkMedia = await this.repository.checkMedia(title, username);
    if (checkMedia) throw new HttpException("Content already exists", HttpStatus.CONFLICT);
    return this.repository.updateMedia(id, data);
  }

  async deleteMedia(id: number) {
    const checkMedia = await this.repository.getMediaByParam(id);
    if (!checkMedia) throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    return this.repository.deleteMedia(id);
  }
}
