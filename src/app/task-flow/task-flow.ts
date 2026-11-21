
import { Component, signal, computed } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  dueDate: Date;
  done: boolean;
}

@Component({
  selector: 'app-task-flow',
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './task-flow.html',
  styleUrl: './task-flow.css',
})
export class TaskFlow {

  title = 'TaskFlow';
  canDelete = false;

  newTaskTitle = '';

  tasks = signal<Task[]>([]);

  tasksNotDoneCount = computed(() => this.tasks().filter(task => !task.done).length);

  tasksDoneCount = computed(() => this.tasks().filter(task => task.done).length);

  rename()
  {
    this.title = 'Mes tâches';
    this.canDelete = true;
  }

  delete()
  {
    this.title = '';
  }

  addTask() 
  {
    if (!this.newTaskTitle.trim()) 
      return;

    const newTask: Task =
    {
      id: Date.now(),
      title: this.newTaskTitle.trim(),
      dueDate: new Date(),
      done: false
    };

    this.tasks.update(items => [...items, newTask]);

    this.newTaskTitle = '';
  }

  toggleTask(id: number)
  {
    this.tasks.update(items => items.map(task => task.id === id ? { ...task, done: !task.done }: task));
  }

  clearTasks()
  {
    this.tasks.set([]);
  }
}
