import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    this.envConfig = dotenv.parse(
      fs.readFileSync(`src/env/${process.env.NODE_ENV}.env`),
    );
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
