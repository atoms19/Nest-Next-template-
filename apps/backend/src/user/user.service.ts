import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { type DB, DB_TOKEN } from 'src/db/db.consts';
import { users } from 'src/db/schema/user.schema';
import { eq } from 'drizzle-orm';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class UserService {
	constructor(@Inject(DB_TOKEN) private db: DB,private readonly uploadService:UploadService) { }
  async create(dto: CreateUserDto) {
		await this.db.insert(users).values({
			name: dto.name,
			email: dto.email,
			password_hash: dto.password,
		});
	}

	findAll() {
		return this.db.select().from(users);
	}

	findOne(id: number) {

	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}


	updateProfilePicture(buffer:Buffer,filename:string){
	  let url=this.uploadService.uploadFile(buffer,filename)
	  // this.db.update(users).set({
	  //  avatar_url:url
	  // }).where(eq())
	  console.log(url)
	}

	async findByEmail(email: string) {
		  return await this.db.select().from(users).where(eq(users.email, email)).limit(1)
   }

	async getPassword(id: number) {
	//	let [user] = await this.db.select({ password: users.password_hash }).from(users).where(eq(users.id, id)).limit(1)
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
