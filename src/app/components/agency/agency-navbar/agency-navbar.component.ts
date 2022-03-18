import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agency-navbar',
  templateUrl: './agency-navbar.component.html',
  styleUrls: ['./agency-navbar.component.scss']
})
export class AgencyNavbarComponent implements OnInit {

  constructor(private _auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
logout(){
  console.log(localStorage.getItem('id'));
  this._auth.logoutAgency(localStorage.getItem('id')).subscribe(
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
