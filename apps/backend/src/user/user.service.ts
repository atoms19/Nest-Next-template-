import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { type DB, DB_TOKEN } from 'src/db/db.consts';
import { users } from 'src/db/schema/user.schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
	constructor(@Inject(DB_TOKEN) private db: DB) { }
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
		return this.db.select().from(users).where(eq(users.id, id)).limit(1);
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
