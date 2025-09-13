import { Inject, Injectable } from '@nestjs/common';
import { type S3, S3_TOKEN } from './s3.consts';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
	constructor(@Inject(S3_TOKEN) private readonly s3Client: S3, private readonly configService: ConfigService) { }


	uploadFile(file: Buffer, key: string) {
	    let bucketName=this.configService.get<string>('AWS_BUCKET_NAME')
		   key=key + '-' + Date.now()
		  this.s3Client.send(new PutObjectCommand({
			Bucket:bucketName,
			Key:key,
			Body: file,
			ContentType: 'image/jpg'
		}))
		const region = this.configService.get<string>('AWS_REGION');
		const url = `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
	   return url	
	}
}
