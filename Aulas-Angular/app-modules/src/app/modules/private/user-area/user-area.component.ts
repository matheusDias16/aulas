import { Component, OnInit } from '@angular/core';
import { ProjectService, TCriaProject, Tproject } from '../../shared/services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../../shared/components/modal-delete/modal-delete.component';
import { ModalCreateComponent } from '../../shared/components/modal-create/modal-create.component';
import { FormControl,FormGroup,Validators } from '@angular/forms';

type TUser = {
  _id: string,
  name: string,
  email: string,
  createdAt: string,
  __v: number
}
type TProject = {
  title: FormControl<string |null>,
  description: FormControl<string|null>,
  // tasks : FormControl<string|null>,

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrl: './user-area.component.scss'
})
export class UserAreaComponent implements OnInit {
  idDaUrl: number = 0
  modalAberto: boolean = false
  displayedColumns: string[] = ['position', 'project', 'task', 'action'];
  public projects: Tproject[] = []
  public formProject!: FormGroup<TProject>

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectService,

  ) {
    //Implementar o dialog do material
    //Criar método para deletar projeto no service ok
    //integrar método de deletar project no método deleteProject() ok?

    //Criar um componente com o nome 'project-area' ok
    //Alterar a rota interna do private.routting para adicionar esse componente com a rota '/project-area' ok
    //Fazer as tratativas para poder enviar dados por parametrô nas url
    //Ao clicar no botão de visualizar, redirecionar para a tela para a tela 'Project-Area', passando o id como query param na url

    //Estilizar a tabela comforme o figma ok

    //Aula 22/07/2024
    //Estilizar segundo o figma o modal de delete 'ModalDeleteComponent' ok 
    //Estudar como implementei o componente de modal "ModalDeleteComponent"
    //Criar, implementar e estilizar um modal para criar o projeto, quando clicamos no botão de novo projeto
    //Usar o formGroup nos forms de dentro do modal
    //Ao clicar no botão salvar o modal faz a requisição para salvar e só fecha se der sucesso na requisição
    //Estudar como poderia ser implementado um drag and drop do material na tela de project-area
    //https://material.angular.io/cdk/drag-drop/overview
    
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {
    const user: string | null = localStorage.getItem('user')
    if (user) {
      const parsedUser: TUser = JSON.parse(user)
      this.projectService.getProgectsByUser(parsedUser._id).subscribe({
        next: (sucess) => {
          this.projects = sucess.projects.map((project, index) =>
          ({
            ...project,
            position: index + 1,
            completedTasks: project.tasks.reduce((acc, currentValue) => acc + (currentValue.completed === true ? 1 : 0), 0)
          }))
        },
        error: (error) => { 
          console.error(error)
        }
      })
    }
  }
  openModal(id: string): void {
    this.modalAberto = true
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      autoFocus: true,
      disableClose: true,
      data: {
        title: 'Excluir projeto?',
        message:
          'Atenção! Esta ação é definitiva!'
      },
    })

    dialogRef.afterClosed().subscribe((data) => {
      if (!data) return;
      this.projectService.deleteProgectsByUser(id).subscribe({
        next: (sucess) => {
          console.log('retorno', sucess);
          //this.getProjects();

          this.projects = this.projects.filter((project: Tproject) => project._id !== id)
          
          this.projects = this.projects.map((project, index) =>
          ({
            ...project,
            position: index + 1,
            completedTasks: project.tasks.reduce((acc, currentValue) => acc + (currentValue.completed === true ? 1 : 0), 0)
          }))
        },
        error: (error) => { 
          console.error(error)
        }
      })
      
    })
  }

  fechaModal(): void {
    this.modalAberto = false
  }

  

  deleteProject(idProject: string): void {
    this.projectService.deleteProgectsByUser(idProject).subscribe({
    })
    //esse método deve ser invocado caso o usuário clique em 'excluir' no modal de confirmação
    //criar método no service para deletar os projects
    //integrar o método e deletar o project selecionado
  }


  

  openModalCreate(): void {
    this.modalAberto = true
    const dialogRef = this.dialog.open(ModalCreateComponent, {
      autoFocus: true,
      disableClose: true,
      data: {
        title: 'Criar novo projeto?',
        message:
          'Preencha os campos abaixo para prosseguir'
      },
    })
    const payload : TCriaProject = {
      title : this.formProject.value.title!,
      description : this.formProject.value.description!,
      // tasks: this.formProject.value.tasks!,

    }
    
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) return;
      this.projectService.createProjects(payload).subscribe({
        next: (sucess) => {
          console.log('retorno', sucess);
          
          this.projects = this.projects.map((project, index) =>
          ({
            ...project,
            position: index + 1,
            completedTasks: project.tasks.reduce((acc, currentValue) => acc + (currentValue.completed === true ? 1 : 0), 0)
          }))
        },
        error: (error) => { 
          console.error(error)
        }
      })
      
    })
  }
  }