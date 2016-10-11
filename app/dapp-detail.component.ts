import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Dapp } from './dapp';
import { DappService } from './dapp.service';

@Component({
  moduleId: module.id,
  selector: 'my-dapp-detail',
  templateUrl: 'dapp-detail.component.html',
})

export class DappDetailComponent implements OnInit {
  @Input()
  dapp: Dapp;

  constructor(
    private dappService: DappService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.dappService.getDapp(id)
        .then(dapp => this.dapp = dapp);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
