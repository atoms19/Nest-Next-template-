import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { S3Provider } from './s3.provider';
import { S3_TOKEN } from './s3.consts';
import { UploadService } from './upload.service';

@Module({
  imports:[ConfigModule],
  providers: [S3Provider,UploadService],
  exports:[S3_TOKEN,UploadService]
})
export class UploadModule {}
