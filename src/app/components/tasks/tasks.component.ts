import { Component } from '@angular/core';
import { Task } from '../../Task';
import {TaskService} from '../../services/task.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks:Task[] = []

// in order to use the service,
// we add it as a provider in the constructor argument
constructor(private  taskService:TaskService){
  //you subscribe to an observable so you can constantly watch it
   this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks)

}


deleteTask(task:Task){
  this.taskService.deleteTask(task)
  .subscribe(
    ()=>(this.tasks=this.tasks.filter((t)=> t.id !== task.id))
    )

}

toggleReminder(task:Task){
  task.reminder =  !task.reminder;
  this.taskService.updateTaskReminder(task).subscribe()
}


AddTask(task:Task){
  this.taskService.AddTask(task).subscribe((task)=>(this.tasks.push(task)))
}

}
