import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWEPortfolio';
  kanbanBoards: kanbanBoard[];

  constructor(private formBuilder:FormBuilder) {
    let toDoMock = [
      this.formBuilder.group({
        name:"SWEPortfolio",
        description:"E-Portfolio Presentation and coding"
      }),
      this.formBuilder.group({
        name:"Buch lesen",
        description:"Irgendwelche Bücher irgendwann mal"
      })
    ]

    let doingMock = [
      this.formBuilder.group({
        name:"Coding Project",
        description:"Many Tasks should be done"
      })
    ]

    this.kanbanBoards = [
      {name: "Tasks",
        boards: [
          {name:'To Do', data: toDoMock},
          {name:'Doing', data: doingMock},
          {name:'Done', data: []}
        ]
      },
      {name: "Other Stuff",
        boards: [
          {name:'To Do', data: []},
          {name:'Doing', data: []},
          {name:'Done', data: []},
          {name:'On Hold', data: []}
        ]
      }
    ]
  }
}

export interface kanbanBoard {
  name: string;
  boards: board[];
}

export interface board {
  name: string;
  data: FormGroup[];
}
