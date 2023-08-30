import { medias, publications } from './../../node_modules/.prisma/client/index.d';
import { PrismaService } from "src/prisma/prisma.service";

export class Factories {
  public prisma;
  constructor( prisma: PrismaService) {}
}

export class MediasFactory extends Factories {
  static prisma;
  static async createMedia(title: string, username:string) {
    return this.prisma.medias.create({
      data: {
        title,
        username
      }
    })
  }
}

export class PostsFactory extends Factories{
  static prisma;
  static async createPost(title: string, text:string) {
    return this.prisma.posts.create({
      data: {
        title,
        text
      }
    })
  }
}

export class PublicationsFactory extends Factories {
  static prisma;
  static async createPublication(prisma: PrismaService) {
    const post = await PostsFactory.createPost("Twitter", "Leti");
    const media = await MediasFactory.createMedia("Gatos", "São lindos");
    const date = new Date(2024, 11, 24);
    return this.prisma.publications.create({
      data: {
        date: date,
        postId: post.id,
        mediaId: media.id,
      },
    })
  }
}