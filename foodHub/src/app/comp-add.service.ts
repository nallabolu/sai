import { Injectable, ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompAddService {

  private viewRef: ViewContainerRef;
  constructor(private factResolver: ComponentFactoryResolver) { }
  setViewRef(viewRef: ViewContainerRef) {
    this.viewRef = viewRef;
  }
  addComponent(compToAdd: any) {
    const factory = this.factResolver.resolveComponentFactory(compToAdd);
    const comRef = factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(comRef.hostView);
  }
}
