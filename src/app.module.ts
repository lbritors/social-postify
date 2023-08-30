import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MediasModule } from './medias/medias.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [PostsModule, MediasModule, PrismaModule, PublicationsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
