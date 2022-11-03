import { Injectable } from '@nestjs/common';
import { UrlDto } from 'src/dtos/urls.dto';
import * as lowdb from 'lowdb';
import * as FileAsync from 'lowdb/adapters/FileAsync';
import {map,max} from 'lodash'
import { Url } from 'src/entities/url.entity';

type CollctionName = 'urls';
const _alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_',
_base = _alphabet.length;

@Injectable()
export class UrlsService {
  private db: lowdb.LowdbAsync<any>;

  constructor() {
    this.initDatabase('urls');
  }

  private async initDatabase(collctionName: CollctionName) {
    const adapter = new FileAsync('db.json');
    this.db = await lowdb(adapter);
    const listUsers = await this.db.get(collctionName).value();
    if (!listUsers) {
      await this.db.set(collctionName, []).write();
    }
  }

  async create(newUrl: UrlDto) {
    const listData = await this.db.get('urls').value();
    const id = this.getNextId(listData);
    const hash = this.encode(id);
    
    const url:Url = {
      id,
      redirectUrl:(newUrl.redirectUrl.indexOf('://') === -1) ? 'https://' + newUrl.redirectUrl : newUrl.redirectUrl,
      ...{ hash },
      createdAt: new Date(),
      expiresAt: new Date(),
    };

    listData.push(url);
    await this.db.set('urls', listData).write();
    return url.hash;
  }

  async findOne(hash: string) {
    return this.db.get('urls').find({ hash }).value();
  }

  async findAll() {
    return await this.db.get('urls').value();
  }

  private encode(id:number){
    var str = '';
		while (id > 0) {
			str = _alphabet.charAt(id % _base) + str;
			id = Math.floor(id / _base);
		}
		return str;
  }

  private decode(str:string){
    var num = 0;
		for (var i = 0; i < str.length; i++) {
			num = num * _base + _alphabet.indexOf(str.charAt(i));
		}
		return num;
  }

  private getNextId(listData: Url[]) {
    const ids = map(listData, 'id');
    if(ids.length === 0)
      return 1;
    return  parseInt(max(ids), 10) + 1;
  }
}
