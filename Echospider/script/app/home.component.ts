﻿
import { Component, OnInit } from '@angular/core';

import { User } from './_models/user';
import { UserService } from './services/user.service';

@Component({
    selector: 'home-component',
    templateUrl: './app/home.component.html'
})

export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

}
