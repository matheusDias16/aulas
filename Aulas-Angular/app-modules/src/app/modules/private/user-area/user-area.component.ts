import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService, Tproject } from '../../shared/services/forgot-password.service';

type TUser = {
  _id: string,
  name: string,
  email: string,
  createdAt: string,
  __v: number
};

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrl: './user-area.component.scss'
})
export class UserAreaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  public projects: Tproject[] = [];

  constructor(
    private forgotPasswordService: ForgotPasswordService,
  ) { }

  ngOnInit(): void {

    this.getProjects();



  }

  getProjects(): void {
    const user: string | null = localStorage.getItem('user')
    if (user) {
      const parsedUser: TUser = JSON.parse(user)
      this.forgotPasswordService.getProjectsByUser(parsedUser._id).subscribe({
        next: (success) => {
          this.projects = success.projects;
          console.log(this.projects);
          
        },
        error: (error) => { 
          console.error(error)
        }
      });
    }
  }
}
