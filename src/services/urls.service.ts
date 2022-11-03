import { Injectable } from '@nestjs/common';
import { UrlDto } from 'src/dtos/urls.dto';
import { Url } from '../entities/url.entity';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as lowdb from 'lowdb';
import * as FileAsync from 'lowdb/adapters/FileAsync';
import * as uuid from 'uuid';

type CollctionName = 'urls';

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

    const hash = uuid.v4();
    const url = {
      ...{ id: uuid.v1() },
      ...newUrl,
      ...{ hash },
      createdAt: new Date(),
      expiresAt: new Date(),
    };
    listData.push(url);
    await this.db.set('urls', listData).write();
    const listUsers = await this.db.get('urls').value();
    console.log(listUsers);
    return url;
  }

  async findOne(hash: string) {
    const listData = await this.db.get('urls').value();
    console.log(listData);
    return await this.db.get('urls').find({ hash }).value();
  
  }

  async findAll() {
    return await this.db.get('urls').value();
  }
}
