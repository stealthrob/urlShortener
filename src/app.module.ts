import { Module } from '@nestjs/common';
import { ServeStaticModule} from '@nestjs/serve-static'; // New
import { join } from 'path'; // New
import { UrlsController } from './controllers/urls.controller';
import { UrlsService } from './services/urls.service';
import {RequestContextModule} from 'nestjs-request-context'

@Module({
  imports: [
    RequestContextModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'), // New
    }), // New
  ],
 controllers: [ UrlsController],
 providers: [ UrlsService],
})
export class AppModule {}