import { createPostDto } from './posts.dto';
import { PostsRepository } from './posts.respository';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class PostsService {

  constructor(private readonly repository: PostsRepository) {}  
  //FIXME 
  createPost(data: createPostDto) {
    return this.repository.createPost(data);
  }

  getPosts() {
    return this.repository.getPosts();
  }

  async getPostByParam(id: number) {
    const checkPost = await this.repository.getPostByParam(id);
    if (!checkPost)  throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    return this.repository.getPostByParam(id);
  }

  async updatePost(id: number, data: createPostDto) {
    const checkPost = await this.repository.getPostByParam(id);
    if (!checkPost)  throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    return this.repository.updatePost(id, data);
  }

  async deletePost(id: number) {
    const checkPost = await this.repository.findPostWithPublications(id);
    if (!checkPost) throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    if (checkPost.publications.length) throw new HttpException("Post in use!", HttpStatus.FORBIDDEN);
    return this.repository.deletePost(id);
  }
}
