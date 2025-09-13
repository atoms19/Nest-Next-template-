import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if((await this.userService.findByEmail(createUserDto.email)).length) {
		return {message: 'User with this email already exists'}
	 }else{
	 this.userService.create(createUserDto);
	 }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Patch('avatar')
  @UseInterceptors(FileInterceptor('file'))
  updateAvatar(@UploadedFile() file: Express.Multer.File) {
	 this.userService.updateProfilePicture(file.buffer,file.originalname) 
	 return {
		message:"avatar update successful"
	 } 
	}
}
