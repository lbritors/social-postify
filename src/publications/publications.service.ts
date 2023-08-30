import { MediasService } from './../medias/medias.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PostsService } from 'src/posts/Posts.service';
import { PublicationsRepository } from './publications.repository';

@Injectable()
export class PublicationsService {
  constructor(
    private readonly repository: PublicationsRepository,
    private readonly postsService: PostsService,
    private readonly MediasService: MediasService
  ) {}

  async create(data: CreatePublicationDto) {
    return await this.repository.createPublication(data);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const check = await this.repository.findOne(id);
    if (!check) throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    return check;
  }

  async update(id: number, data: CreatePublicationDto) {
    const { mediaId, postId, date } = data;
    if (mediaId) {
      await this.MediasService.getMediaByParam(mediaId);
    }
    if (postId) {
      await this.postsService.getPostByParam(postId);
    }
    if (date) {
      const today = new Date();
      if (date < today) {
        throw new HttpException("FOrbidden action", HttpStatus.FORBIDDEN);
      }
    }
    return this.repository.update(id, data);
  }

  async remove(id: number) {
   const check =  await this.repository.findOne(id);
    if (!check) throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    return await this.repository.remove(id);

  }
}
