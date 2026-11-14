import { Component } from '@angular/core';
import { TaskFlow } from './task-flow/task-flow';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}