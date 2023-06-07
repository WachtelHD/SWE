import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private formBuilder:FormBuilder) { }
  get newTaskFormGroup():FormGroup{
    return this.formBuilder.group({
      name: ["", Validators.required],
      description: ""
    })
  }
}
