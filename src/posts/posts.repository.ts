import { Injectable } from '@nestjs/common';
import { createPostDto } from './Posts.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsRepository {

  constructor(private readonly prisma: PrismaService) {}
  //FIXME 
  async createPost(data: createPostDto) {
    return this.prisma.posts.create({data})
  }

  async getPosts() {
    return this.prisma.posts.findMany();
  }

  async getPostByParam(id: number) {
    return this.prisma.posts.findFirst({
      where: {id}
    })
  }

  async findPostWithPublications(id: number) {
    return this.prisma.posts.findFirst({
      where: { id },
      include: {publications: true}
    })
  }

  async updatePost(id: number, data:createPostDto) {
    return this.prisma.posts.update({
      where: { id: id },
      data: data,
    })
  }

  async deletePost(id: number) {
    return this.prisma.posts.delete({
      where: {
        id
      }
    })
  }}
