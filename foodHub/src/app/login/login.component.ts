import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User =
    {
      userName: '',
      passWord: '',
      role: 'admin'
    };
  next: string;
  returnUrl: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

     this.route.params.subscribe(pathparm => this.next = pathparm['next']);
   // this.next = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  submit(value) {

    //  console.log(value);

    sessionStorage.setItem('userLogged', 'true');
    // this.router.navigateByUrl(this.returnUrl);
    const url = '/' + this.next;
    
    this.router.navigate(['/' + this.next]);
  }
}
