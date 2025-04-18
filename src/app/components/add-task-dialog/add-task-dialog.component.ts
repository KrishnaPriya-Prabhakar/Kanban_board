import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
})
export class AddTaskDialogComponent {
  task: Partial<Task> = {
    title: '',
    description: '',
    status: 'To Do',
  };

  constructor(public dialogRef: MatDialogRef<AddTaskDialogComponent>) {}

  onSubmit() {
    if (this.task.title) {
      this.dialogRef.close(this.task);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
