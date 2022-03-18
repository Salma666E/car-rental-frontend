import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-resmanager',
  templateUrl: './navbar-resmanager.component.html',
  styleUrls: ['./navbar-resmanager.component.scss']
})
export class NavbarResmanagerComponent implements OnInit {

  constructor(private _auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
logout(){
  console.log(localStorage.getItem('id'));
  this._auth.logoutResManager(localStorage.getItem('id')).subscribe(
       (res) => {
        console.log(res);
        alert("Logout successful");
        localStorage.setItem('id', '');
        localStorage.setItem('name', '');
        localStorage.setItem('cin', '');
        localStorage.setItem('type', '');
        localStorage.setItem('email', '');
        localStorage.setItem('address', '');
        localStorage.setItem('contact', '');
        this.router.navigate(['/Login']);
      },
      function (err) {
        console.log(err);
        alert("Logout UnSuccessful");
      }
    )
}
}
