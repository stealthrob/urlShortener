import { Module } from '@nestjs/common';
import { ServeStaticModule} from '@nestjs/serve-static'; // New
import { join } from 'path'; // New
import { UrlsController } from './controllers/urls.controller';
import { UrlsService } from './services/urls.service';
import {RequestContextModule} from 'nestjs-request-context'

@Module({
  imports: [
    RequestContextModule,
  ],
 controllers: [ UrlsController],
 providers: [ UrlsService],
})
export class AppModule {}