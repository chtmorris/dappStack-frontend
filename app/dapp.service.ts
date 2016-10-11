import { Injectable } from '@angular/core';

import { Dapp } from './dapp';
import { DAPPS } from './mock-dapps';

@Injectable()
export class DappService {
  getDapps(): Promise<Dapp[]> {
    return Promise.resolve(DAPPS);
  }

  getDapp(id: number): Promise<Dapp> {
    return this.getDapps()
      .then(dapps => dapps.find(dapp => dapp.id === id));
  }
}
