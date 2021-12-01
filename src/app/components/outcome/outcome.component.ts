import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user-interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {

  users: User[] = [] 

  constructor(
    //подключаем сервис для работы с данными
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
  }


  fetchUsers(){
    this.userService.getAll()
      .subscribe((users) => {
        //убираем из массива поля с нулевыми значениями
        this.users = users.filter(function(el){
          return  el.outcome > 0
        });
        
      })
  }

}