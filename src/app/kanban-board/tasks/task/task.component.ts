import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {TaskFormDialogComponent} from "../task-form-dialog/task-form-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {takeUntil} from "rxjs";
import {BaseComponent} from "../../../shared/base/base.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent extends BaseComponent{
  @Input() taskFormGroup!: FormGroup;
  @Input() dragging!: boolean;
  @Output() delete = new EventEmitter

  constructor(private dialog:MatDialog) {
    super();
  }

  deleteTask(){
    this.delete.emit()
  }

  editTask(){
    const dialogRef = this.dialog.open(TaskFormDialogComponent,
      {data:this.taskFormGroup.value,panelClass:'taskFormDialog'}
    )
    dialogRef.afterClosed().pipe(takeUntil(this.componentDestroyed$)).subscribe((result)=>{
      if(result){
        this.taskFormGroup.patchValue(result)
      }
    })
  }

}
