import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import {TasksService} from "../../shared/services/tasks.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskFormDialogComponent} from "./task-form-dialog/task-form-dialog.component";
import {takeUntil} from "rxjs";
import {BaseComponent} from "../../shared/base/base.component";
import {DragDropService} from "../../shared/services/drag-drop.service";
import * as uuid from "uuid";
import {board} from "../../app.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent extends BaseComponent implements OnInit{

  @Input() name: string | undefined;
  @Input() tasks: FormGroup[] | undefined;

  id: string = "";

  constructor(
    private formBuilder:FormBuilder,
    private tasksService:TasksService,
    private dialog:MatDialog,
    public dragDropService:DragDropService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.id = uuid.v4();
    this.dragDropService.addId(this.id)
  }

  addNewTask(){
    const dialogRef = this.dialog.open(TaskFormDialogComponent)
    dialogRef.afterClosed().pipe(takeUntil(this.componentDestroyed$)).subscribe((result)=>{
      if(result) {
        let tmp = this.tasksService.newTaskFormGroup
        tmp.patchValue(result)
        this.tasks?.push(tmp);
      }
    })
  }

  removeTask(index:number){
    this.tasks?.splice(index,1);
  }

}
