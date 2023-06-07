import { Injectable } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  private dropListIds: string[] = [];
  constructor() { }

  addId(id:string){
    this.dropListIds.push(id)
  }

  get listIds(){
    return this.dropListIds
  }

  onDragDrop(event:CdkDragDrop<any>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
