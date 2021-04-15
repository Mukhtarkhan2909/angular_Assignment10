import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import {Contact} from '../contacts';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  @ViewChild('templateDrivenForm')
  templateDrivenForm: NgForm | undefined;

  contact: Contact | undefined;

  ngOnInit(): void{

    this.contact = {
      form_1: {
        form_2: {
          form_2_1: {
            firstName: 'Mukhtarkhan'
          },
          form_2_2: {
            lastName: 'Nalibayev'
          },
          form_3: {
            form_3_1: {
              email: 'mukhtarkhan@gmail.com'
            }
          },
          form_4: {
            form_4_1: {
              password: '12345'
            }
          }
        }
      }
    };

    setTimeout(() => {
      // @ts-ignore
      this.templateDrivenForm.setValue(this.contact);
    });

  }

  onSubmit(templateDrivenForm: NgForm): void {
    console.log(templateDrivenForm.value);
  }

  setDefaults(): void {
    // @ts-ignore
    this.templateDrivenForm.setValue(this.contact);
  }

  changeFirstName(): void {
    // @ts-ignore
    this.templateDrivenForm.controls.firstName.setValue('Johnny');
  }

  patchValue(): void {
    const obj = {
      form_1: {
        form_2: {
          form_2_1: {
            firstName: 'New name'
          },
          form_2_2: {
            lastName: 'New surname'
          }
        }
      }
    };

    // @ts-ignore
    this.templateDrivenForm.control.patchValue(obj);

  }

  changeEmail(): void {
    const obj = {
      form_2: {
        form_3: {
          form_3_1: {
            email: 'new_email@mail.com'
          }
        }
      }
    };
    // @ts-ignore
    const address = this.templateDrivenForm.controls.form_1 as FormGroup;
    address.patchValue(obj);

  }

  reset(): void {
    // @ts-ignore
    this.templateDrivenForm.reset();
  }

  resetForm(): void {
    // @ts-ignore
    this.templateDrivenForm.resetForm();
  }

}
