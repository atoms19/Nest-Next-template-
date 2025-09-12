import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import {type DB, DB_TOKEN } from 'src/db/db.consts';
import { sessionTable } from 'src/db/schema/sessions.schema';

@Injectable()
export class SessionService {
  constructor(@Inject(DB_TOKEN) private db:DB ) {}
  async createSession(userId:string){
		let session=await this.db.insert(sessionTable).values({
				  user_id:userId.toString()
		  }).returning()
		if(!session[0]){
		  throw new InternalServerErrorException('could not create session');
		}
		return session[0];
  }

}

