import {
    IsNotEmpty,
    IsUrl,
  } from 'class-validator';
export class UrlDto {
  
  readonly id?: number;

  @IsUrl({ require_tld: false})
  @IsNotEmpty()
  readonly redirectUrl: string;

  readonly hash?: string;

  readonly createdAt?: Date;

  readonly expiresAt?: Date;
}