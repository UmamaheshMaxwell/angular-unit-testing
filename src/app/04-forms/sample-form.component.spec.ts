import {FormBuilder} from '@angular/forms';
import {SampleFormComponent} from './sample-form.component';

describe('Sample Form Suite', () => {
  let component: SampleFormComponent;

  beforeEach(() => {
    component = new SampleFormComponent(new FormBuilder());
  });

  it('should have required controls', () => {
    const firstName = component.form.get('firstName');
    firstName.setValue('UmamaheswararaoMeka');
    expect(firstName.validator).toBeTruthy();
  });

});
