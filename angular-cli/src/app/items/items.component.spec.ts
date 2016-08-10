/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ItemsComponent } from './items.component';

describe('Component: Items', () => {
  it('should create an instance', () => {
    let component = new ItemsComponent();
    expect(component).toBeTruthy();
  });
});
