import { Body, Controller, Get, HttpStatus, Param, Post, Query, Redirect, Res } from '@nestjs/common';
import { UrlDto } from '../dtos/urls.dto';
import { UrlsService } from '../services/urls.service';
import { RequestContext } from 'nestjs-request-context';

@Controller()
export class UrlsController {
  constructor(private urlsService: UrlsService) { }

  @Post()
  async create(@Body() body: UrlDto): Promise<string> {
    const hash = await this.urlsService.create(body);
    const req: Request = RequestContext.currentContext.req;
    return req.headers['host']+'/' + hash;
  }

  @Get(':urlId')
  async getUrlDtoById(@Param('urlId') urlId: string,@Res() res,): Promise<any> {
    if(!urlId)
    return
   const urlDto:UrlDto = await this.urlsService.findOne(urlId);
  return res.redirect(urlDto.redirectUrl);
  }
}
