import { Provider } from "@nestjs/common";
import {S3Client,PutObjectCommand, S3ClientConfig}   from '@aws-sdk/client-s3';
import { ConfigService } from "@nestjs/config";
import { S3_TOKEN } from "./s3.consts";

export const S3Provider:Provider = {
  provide: S3_TOKEN,
  inject:[ConfigService],
  useFactory:(config:ConfigService)=>{	
		const client =new S3Client({
			 region:config.get<string>('AWS_REGION'),
			 credentials:{
				accessKeyId:config.get<string>('AWS_ACCESS_KEY_ID'),
				secretAccessKey:config.get<string>('AWS_SECRET_ACCESS_KEY')
			 }
		} as S3ClientConfig)

		return client
		
  }
}
