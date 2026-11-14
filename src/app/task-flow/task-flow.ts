import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-task-flow',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-flow.html',
  styleUrl: './task-flow.css',
})
export class TaskFlow 
{
  title = 'TaskFlow';
  canDelete = false;

  tasks = [
    { id: 0, title: 'Lire le cours Angular', dueDate: '2026-11-13' },
    { id: 1, title: 'Installer le CLI', dueDate: '2026-11-14' },
    { id: 2, title: 'Créer TaskFlow', dueDate: '2026-11-15' }
  ];
  rename() {
    this.title = 'Mes tâches';
    this.canDelete = true;
  }
  delete()
  {
	  this.title='';
  }

  clearTasks() {
    this.tasks = [];
  }
}
