import { animate, style, transition, trigger, state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'drm-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss'],
  animations: [
    trigger('fadeInOut',
    [
      state('*', style(
        {
          opacity: 100,
          display: 'inline-block'
        })),
      state('0', style(
        {
          opacity: 0,
          display: 'none'
        })),
      transition('* => *', animate('600ms ease-out'))
    ])
  ]
})
export class BusyIndicatorComponent {
  public showIndicator: boolean;
}
