import { FormControl, NgControl } from '@angular/forms';

export class NgControlStub {
  control = new FormControl();

  viewToModelUpdate() {}

  get value() {
    return this.control.value;
  }

  get valueChanges() {
    return this.control.valueChanges;
  }
}

export const NG_CONTROL_PROVIDER = {
  provide: NgControl,
  useClass: NgControlStub
};
