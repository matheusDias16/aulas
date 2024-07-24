import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormControl,FormGroup,Validators } from '@angular/forms';

type TProject = {
  title: FormControl<string |null>,
  description: FormControl<string|null>,
  // tasks : FormControl<string|null>,

}

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.scss'
})
export class ModalCreateComponent implements OnInit{
  public formProject!: FormGroup<TProject>
  title: string; 
  message: string;
  
  constructor(
    private dialogRef: MatDialogRef<ModalCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.message = data.message;
  }
  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formProject = new FormGroup<TProject>({
      title: new FormControl('', [Validators.required,]),
      description : new FormControl('', [Validators.required,]),
      // tasks :  new FormControl('', [Validators.required,]),
    })
   }   

  create(){
    this.dialogRef.close(true)
  }
}
