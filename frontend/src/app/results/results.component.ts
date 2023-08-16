import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() resVal: any = "___";
  @Input() resTimesTwo: any = "___";
  @Input() resRaisedTwo: any = "___";
}
