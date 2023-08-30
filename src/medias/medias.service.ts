import { Injectable } from '@nestjs/common';
import { createMediaDto } from './medias.dto';
import { Medias } from './medias.entity,';
import { MediasRepository } from './medias.repository';

@Injectable()
export class MediasService {

  constructor(private readonly repository: MediasRepository) {}  
  //FIXME 
  createMedia(data: createMediaDto) {
    return this.repository.createMedia(data);
  }

  getMedias() {
    return this.repository.getMedias();
  }

  getMediaByParam(id: number) {
    return this.repository.getMediaByParam(id);
  }

  updateMedia(id: number, data: createMediaDto) {
    return this.repository.updateMedia(id, data);
  }

  deleteMedia(id: number) {
    return this.repository.deleteMedia(id);
  }
}
