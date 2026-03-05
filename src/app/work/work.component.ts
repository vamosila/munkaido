/*
* File: work.component.ts
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: SZOFT II-N
* Date: 2026-03-05
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';

export function noFutureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const today = new Date().toISOString().split('T')[0];
    
    if(control.value && control.value > today) {
      return { futureDate: true };
    }
    
    return null;
  };
}

@Component({
  selector: 'app-work',
  imports: [ReactiveFormsModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {

  private builder = inject(FormBuilder);
  
  todayDate = new Date().toISOString().split('T')[0];
  descriptionMaxLength = 30;

  workForm = this.builder.group({
    projectName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/(?:.*\S){3,}/)]],
    date: ['', [Validators.required, noFutureDateValidator()]],
    workedHours: ['', [Validators.required, Validators.min(0.5), Validators.max(12), Validators.pattern(/^\d+(\.\d+)?$/)]],
    description: ['', [Validators.required, Validators.maxLength(this.descriptionMaxLength)]],
  });

  register() {
    if(this.workForm.invalid) {
      this.workForm.markAllAsTouched();
      return;
    }
    
    console.log('Mentés...');
    console.log(this.workForm.value);

    this.workForm.reset();

    Swal.fire({
      icon: 'success',
      title: 'Sikeres regisztráció!',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }
}
