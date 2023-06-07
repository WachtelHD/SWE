import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './kanban-board/tasks/tasks.component';
import { TaskComponent } from './kanban-board/tasks/task/task.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { TaskFormDialogComponent } from './kanban-board/tasks/task-form-dialog/task-form-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { BaseComponent } from './shared/base/base.component';
import {MatCardModule} from "@angular/material/card";
import {CdkDrag, CdkDragPreview, CdkDropList} from "@angular/cdk/drag-drop";
import {MatExpansionModule} from "@angular/material/expansion";
import {TasksService} from "./shared/services/tasks.service";
import {DragDropService} from "./shared/services/drag-drop.service";
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    TaskFormDialogComponent,
    KanbanBoardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    CdkDropList,
    CdkDrag,
    CdkDragPreview,
  ],
  providers: [TasksService, DragDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
