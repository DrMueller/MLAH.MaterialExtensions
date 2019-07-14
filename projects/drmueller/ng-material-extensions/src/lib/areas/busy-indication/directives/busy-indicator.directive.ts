import {
  ComponentFactoryResolver, Directive, Input, TemplateRef,
  ViewContainerRef, Injector, ComponentRef
} from '@angular/core';

import { BusyIndicatorComponent } from '../components/busy-indicator';

@Directive({
  selector: '[drmBusyIndicator]'
})
export class BusyIndicatorDirective {
  private _busyIndicatorComponent: ComponentRef<BusyIndicatorComponent>;

  public constructor(
    private vcRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(BusyIndicatorComponent);
    this._busyIndicatorComponent = factory.create(injector);
    this._busyIndicatorComponent.instance.showIndicator = false;
    this.vcRef.insert(this._busyIndicatorComponent.hostView);
  }

  @Input()
  public set drmBusyIndicator(isBusy: boolean) {
    this._busyIndicatorComponent.instance.showIndicator = isBusy;
  }
}
