import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";
import {TasksService} from "../../../shared/services/tasks.service";

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.css']
})
export class TaskFormDialogComponent implements OnInit{

  taskForm:FormGroup = this.taskService.newTaskFormGroup;

  constructor(
    public dialogRef: MatDialogRef<TaskFormDialogComponent>,
    private taskService:TasksService,
    @Inject(MAT_DIALOG_DATA) public data:object) {
  }

  ngOnInit(): void {
    this.taskForm.patchValue(this.data);
  }

  close(){
    this.dialogRef.close(false)
  }

  submit(){
    if(this.taskForm.valid){
      this.dialogRef.close(this.taskForm.value)
    }
  }
}
