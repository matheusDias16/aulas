import { Component, OnInit } from '@angular/core';
import { ProjectService, Tproject } from '../../shared/services/project.service';

type TUser = {
  _id: string,
  name: string,
  email: string,
  createdAt: string,
  __v: number
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
  displayedColumns: string[] = ['position', 'project', 'task', 'action'];
  public projects: Tproject[] = []

  constructor(
    private projectService: ProjectService
  ) {
    //Implementar o dialog do material
    //Criar método para deletar projeto no service
    //integrar método de deletar project no método deleteProject()
    
    //Criar um componente com o nome 'project-area'
    //Alterar a rota interna do private.routting para adicionar esse componente com a rota '/project-area'
    //Fazer as tratativas para poder enviar dados por parametrô nas url
    //Ao clicar no botão de visualizar, redirecionar para a tela para a tela 'Project-Area', passando o id como query param na url
    
    //Estilizar a tabela comforme o figma
    
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
            completedTasks: project.tasks.reduce((acc, currentValue) => acc + (currentValue.completed === true ? 1 : 0)  , 0)
          }))

          console.log(this.projects);
        },
        error: (error) => { }
      })
    }
  }
  
  openModal(data: string) {
    console.log('dados recebidos no modal: ', data);
    //Fazer toda a implementação do dialog para abrir aqui
  }
  
  deleteProject(idProject: string): void {
    console.log('Deletar projeto: ', idProject);
    
    //esse método deve ser invocado caso o usuário clique em 'excluir' no modal de confirmação
    //criar método no service para deletar os projects
    //integrar o método e deletar o project selecionado
  }
  
}
