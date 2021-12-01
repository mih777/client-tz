import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user-interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  users: User[] = [] 

  constructor(
    //подключаем сервис для работы с данными
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  //получаем всех пользователей
  fetchUsers(){
    this.userService.getAll()
      .subscribe((users) => {
        //сортируем пользователей по убыванию по типу loans
        this.users = users.sort((a, b) => b.loans - a.loans)
      })
  }

}
