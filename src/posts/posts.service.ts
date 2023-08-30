import { createPostDto } from './posts.dto';
import { PostsRepository } from './posts.respository';
import { Injectable } from '@nestjs/common';

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

  getPostByParam(id: number) {
    return this.repository.getPostByParam(id);
  }

  updatePost(id: number, data: createPostDto) {
    return this.repository.updatePost(id, data);
  }

  deletePost(id: number) {
    return this.repository.deletePost(id);
  }
}
