import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService, TCriaProject, TTask } from '../../services/project.service';
import swal from 'sweetalert';

type TProject = {
  title: FormControl<string | null>,
  description: FormControl<string | null>,
  tasks: FormControl<TTask[] |null>,

}

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.scss'
})
  
export class ModalCreateComponent implements OnInit {
  public formProject!: FormGroup<TProject>
  public lista = ['']
  public input: string = '';
  
  constructor(
    private dialogRef: MatDialogRef<ModalCreateComponent>,
    private projectService: ProjectService,
  ) { }
  
  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formProject = new FormGroup<TProject>({
      title: new FormControl('', [Validators.required,]),
      description: new FormControl('', [Validators.required,]),
      tasks :  new FormControl([], [Validators.required,]),
    })
  }

  addTask() {
    console.log(this.input);
    
    this.lista.push(this.input)
  }
  
  checkFormValidity() {
    const formValid = this.formProject.status === 'INVALID' ? false : true;
    const formTouched = this.formProject.touched;
    const buttonDisabled = !formValid && formTouched ? true : false;

    return buttonDisabled;
  }
  
  createProject() {
    const formValid = this.formProject.status === 'INVALID' ? false : true;
    
    if (formValid) {
      
      const payload: TCriaProject = {
        title: this.formProject.value.title!,
        description: this.formProject.value.description!,
        tasks: this.formProject.value.tasks!,
      }
      
      this.projectService.createProjects(payload).subscribe({
        next: (sucess) => {
          console.log('retorno', sucess);
              
         
          this.dialogRef.close(payload);
        },
        error: (error) => {
          console.error(error)
        }
      })
      
      
      
     } else {
      swal({
        title: "Atenção aos dados do formulário",
        text: 'Preencha o formulário corretamente!',
        icon: "error",
      });
    }
  }
}
