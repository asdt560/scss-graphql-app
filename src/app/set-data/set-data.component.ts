import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-set-data',
  templateUrl: './set-data.component.html',
  styleUrls: ['./set-data.component.scss']
})
export class SetDataComponent {
  @Input() set: any;
}
