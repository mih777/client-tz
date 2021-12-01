import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user-interface'

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

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
        this.users = users
      })
  }

}
