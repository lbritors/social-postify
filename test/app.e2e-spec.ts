import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { MediasFactory, PostsFactory } from './factories/factory';

let prisma: PrismaService;
let app: INestApplication;
beforeEach(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  prisma = app.get(PrismaService);
  await prisma.publications.deleteMany();
  await prisma.posts.deleteMany();
  await prisma.medias.deleteMany();
  await app.init();
});
describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect("I'm okay");
  });
});

describe("PostController (e2e)", () => {
  it('/ Get', () => {
    return request(app.getHttpServer())
      .get('/posts')
      .expect(200)
      .expect([]);
  });
  it('/ Post', () => {
    return request(app.getHttpServer())
      .post('/posts')
      .send({ title: "Gatos", text: "Gatos" })
      .expect(201);

  })
})
describe("MediasController (e2e", () => {
  it('/ Get', () => {
    return request(app.getHttpServer())
      .get('/medias')
      .expect(200)
      .expect([]);
  });
  it(' /Post', () => {
    return request(app.getHttpServer())
    .post('/medias')
    .send({title: "title", username: "user"})
    .expect(201);
  })
})

describe("PublicationsController (e2e)", () => {
  it('/ GEt', () => {
    return request(app.getHttpServer())
      .get('/publications')
      .expect(200)
      .expect([]);
  });
  it("/Post", async() => {
    const media = await MediasFactory.createMedia("title", "username");
    const post = await PostsFactory.createPost("gatos", "gatos");
    return request(app.getHttpServer())
      .post('/publications')
      .send({ media: media.id, post: post.id, date: new Date() })
      .expect(201);
  });
})
