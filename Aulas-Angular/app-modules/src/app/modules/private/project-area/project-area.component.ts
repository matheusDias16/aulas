import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { ProjectService, Tproject, TTaskFull } from '../../shared/services/project.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-project-area',
  templateUrl: './project-area.component.html',
  styleUrl: './project-area.component.scss',
})
export class ProjectAreaComponent implements OnInit {
  idDaUrl: string = ''
  project!: Tproject;
  todo: TTaskFull[] = [];
  done: TTaskFull[] = [];

  constructor(
    private projectService: ProjectService,
    private rotaAtiva: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.idDaUrl = (this.rotaAtiva.snapshot.params['id'])
    this.getShow();

  }

  drop(event: CdkDragDrop<TTaskFull[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  getShow() {
    this.projectService.getShowProject(this.idDaUrl).subscribe({
      next: (sucess) => {
        console.log(sucess.project);
        this.project = sucess.project
        this.project.tasks.forEach((element) => {
          if (element.completed) {
            this.done.push(element)

          } else {
            this.todo.push(element)
          }
        })
        console.log("todo e done", this.todo, this.done);
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
  deleteTask(id: string) {
    const newTasks = this.project.tasks.filter((task) => task._id !== id)
    this.project.tasks == newTasks
    console.log(this.project);
    
    this.projectService.putProject(this.project).subscribe({
      next: (sucess) => {
        // console.log(sucess.project);
        this.project = sucess.project;


        swal({
          title: "Task excluida!",
          text: 'Task excluída com sucesso!',
          icon: "success",
        });
      },
      error: (error) => {
        console.error(error)
        swal({
          title: "Erro!",
          text: 'Ocorreu um problema, tente novamente.',
          icon: "error",
        });
      }
    })
  }
}