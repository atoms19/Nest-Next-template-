import { Inject, Injectable } from '@nestjs/common';
import {type S3, S3_TOKEN } from './s3.consts';
import { PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class UploadService {
  constructor(@Inject(S3_TOKEN) private readonly s3Client:S3) {}
	uploadFile(file:Buffer, bucket:string, key:string){
		return this.s3Client.send(new PutObjectCommand({
			Bucket:bucket,
			Key:key,
			Body:file
		}))
	}
}
