import { createPostDto } from './Posts.dto';
import { PostsService } from './Posts.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('posts')
export class PostsController {

  constructor(private readonly PostsService: PostsService) { }

  @Post()
  @HttpCode(HttpStatus.OK)
  createPost(@Body() body: createPostDto) {
    return this.PostsService.createPost(body);
  }

  @Get()
  getPosts() {
    return this.PostsService.getPosts();
  }

  @Get(':id') 
  getPostByParam(@Param('id') id: string) {
    const idNum = parseInt(id);
    return this.PostsService.getPostByParam(idNum);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() data: createPostDto) {
    const idNum = parseInt(id); 
    return this.PostsService.updatePost(idNum, data);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    const idNum = parseInt(id); 
    return this.PostsService.deletePost(idNum);
  }
}