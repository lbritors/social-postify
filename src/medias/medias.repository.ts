import { Injectable } from '@nestjs/common';
import { createMediaDto } from './medias.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediasRepository {

  constructor(private readonly prisma: PrismaService) {}
  //FIXME 
  async createMedia(data: createMediaDto) {
    return this.prisma.medias.create({data})
  }

  async checkMedia(title: string, username: string) {
    return this.prisma.medias.findFirst({
      where: {
        title: title,
        username: username
      }
    })
  }

  async getMedias() {
    return this.prisma.medias.findMany();
  }

  async getMediaByParam(id: number) {
    return this.prisma.medias.findFirst({
      where: {id}
    })
  }

  async updateMedia(id: number, data:createMediaDto) {
    return this.prisma.medias.update({
      where: { id: id },
    data: data })
  }

  async deleteMedia(id: number) {
    return this.prisma.medias.delete({
      where: {
        id
      }
    })
  }}
