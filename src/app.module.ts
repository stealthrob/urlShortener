import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule} from '@nestjs/serve-static'; // New
import { join } from 'path'; // New
import { UrlsController } from './controllers/urls.controller';
import { UrlsService } from './services/urls.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({ // New
      rootPath: join(__dirname, '..', 'client/dist'), // New
    }), // New
  ],
 controllers: [AppController, UrlsController],
 providers: [AppService, UrlsService],
})
export class AppModule {}