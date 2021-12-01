import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user-interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {

  fetchedUsers: User[] = []
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
        this.fetchedUsers = users.filter(function(el){
          return  el.investments > 0
        });
        //сортируем массив по убыванию
        this.users = this.fetchedUsers.sort((a, b) => b.investments - a.investments)
      })
  }

}
