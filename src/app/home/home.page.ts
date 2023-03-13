import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  ngOnInit(): void {
  }

  tareas:[title:String,completed:boolean][]=[

  ]
  nuevaTarea: any ;

  agregarTarea(){
    if (this.nuevaTarea.trim().length ===0){
      return;
    }
    this.tareas.push([this.nuevaTarea,false]);
    this.nuevaTarea=' ';
  }

  eliminar(tarea:[title:String,completed:boolean]){
    const index= this.tareas.indexOf(tarea);
    this.tareas.splice(index,1);
  }

   progreso(){
     const totalTasks = this.tareas.length;
     const tareasCompletadas=this.tareas.filter(tarea => tarea.completed).length;
     return tareasCompletadas/totalTasks;
  }
}
