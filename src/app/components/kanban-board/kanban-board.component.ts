import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  // 1) Define your statuses and use them both for keys and for connecting drop‐lists
  readonly statuses: Task['status'][] = ['To Do', 'In Progress', 'Done'];

  // 2) Hold your tasks in a single object, so the references never change
  lists: { [key in Task['status']]: Task[] } = {
    'To Do': [],
    'In Progress': [],
    'Done': []
  };

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      // Clear each array, then push tasks in so we keep the same array references
      this.statuses.forEach(status => {
        this.lists[status].length = 0;
      });
      tasks.forEach(t => this.lists[t.status].push(t));
    });
  }

  openAddTaskDialog(): void {
    const ref = this.dialog.open(AddTaskDialogComponent, { width: '400px' });
    ref.afterClosed().subscribe((newTask: Omit<Task, 'id'> | undefined) => {
      if (newTask) {
        this.taskService.addTask(newTask as Task)
          .subscribe(() => this.loadTasks());
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>, newStatus: Task['status']): void {
    // 1) Prevent drops in same list
    if (event.previousContainer === event.container) {
      return;
    }

    // 2) Immediately update the UI
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    // 3) Persist the change
    const movedTask = event.container.data[event.currentIndex];
    movedTask.status = newStatus;
    this.taskService.updateTask(movedTask).subscribe({
      error: () => {
        // On error, reload everything so we don't get out of sync
        this.loadTasks();
      }
    });
  }
}
