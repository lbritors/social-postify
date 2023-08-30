import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PublicationsRepository {

  constructor(private readonly prisma: PrismaService) { }

  createPublication(data: CreatePublicationDto) {
    return this.prisma.publications.create({
      data: data
    })
  }

  findAll() {
    return this.prisma.publications.findMany();
  }

  findOne(id: number) {
    return this.prisma.publications.findUnique({
      where: { id }
    })
  }


  update(id: number, data: CreatePublicationDto) {
    return this.prisma.publications.update({
      where: { id },
      data: data
    })
  }

  remove(id: number) {
    return this.prisma.publications.delete({
      where: { id }
    })
  }
}
