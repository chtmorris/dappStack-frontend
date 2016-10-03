import { Injectable } from '@angular/core';

import { Dapp } from './dapp';
import { DAPPS } from './mock-dapps';

@Injectable()
export class DappService {
  getDapps(): Promise<Dapp[]> {
    return Promise.resolve(DAPPS);
  }
}
