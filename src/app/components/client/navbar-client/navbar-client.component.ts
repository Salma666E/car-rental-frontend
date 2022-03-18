import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-client',
  templateUrl: './navbar-client.component.html',
  styleUrls: ['./navbar-client.component.scss']
})
export class NavbarClientComponent implements OnInit, AfterViewInit {
login:boolean=false;
  constructor(private _auth: AuthService, public router: Router) { }
  ngAfterViewInit(): void {
    if(localStorage.getItem('id')) this.login=true;
  }

  ngOnInit(): void {
  }
  logout(){
    console.log(localStorage.getItem('id'));
    this._auth.logoutUser(localStorage.getItem('id')).subscribe(
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
