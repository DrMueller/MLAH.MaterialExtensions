import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const inactiveStyle = style({
  opacity: 0,
});

const timing = '3000ms ease';

@Component({
  selector: 'drm-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        inactiveStyle,
        animate(timing)
      ]),
      transition(':leave', [
        animate(timing, inactiveStyle)
      ])
    ])
  ]
})
export class BusyIndicatorComponent {
}
