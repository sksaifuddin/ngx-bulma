import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bu-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulmaCardTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
