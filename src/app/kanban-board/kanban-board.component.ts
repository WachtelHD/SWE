import {Component, Input} from '@angular/core';
import {board} from "../app.component";

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
  @Input() name: string = "";
  @Input() boards: board[] = [];
}
