import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class DocsComponent implements OnInit {
  ngOnInit() {}

  constructor(
    public routerService: ScullyRoutesService,
  ) {
  }
}
