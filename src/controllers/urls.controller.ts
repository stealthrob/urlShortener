import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UrlDto } from 'src/dtos/urls.dto';
import { UrlsService } from 'src/services/urls.service';

@Controller('urls')
export class UrlsController {
    constructor(private urlsService:UrlsService){}
    @Post()
    create(@Body() body: UrlDto): Promise<any> {
      return this.urlsService.create(body);
    }

    @Get(':urlId')
    getUrlDtoById(@Param('urlId') urlId: string): Promise<any> {
      return this.urlsService.findOne(urlId);
    }

    @Get()
    getUrls(@Query('limit') limit = 100, @Query('offset') offset = 0): Promise<any[]> {
      return this.urlsService.findAll();
    }
}
