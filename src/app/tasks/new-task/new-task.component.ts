import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel(){
    console.log('OnCancel from NewTaskComponent.ts');
    this.cancel.emit();
  }

  onSubmit() {
    console.log('OnCreateTask from NewTaskComponent.ts');
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    };

    this.add.emit(newTask);
  }


}
