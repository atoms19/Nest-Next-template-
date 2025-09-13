import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('posts')
export class PostsController {
  
  @Get()
  @UseGuards(AuthGuard)
  async getPosts(){
		return [{id:1,title:'First Post'},{id:2,title:'Second Post'}]
  }


}
