import { Component, OnInit } from '@angular/core';
import { FormControl, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email :'',
    senha :''
  }

  email = new FormControl(null,Validators.email)
  senha = new FormControl(null,Validators.minLength(3))

  ngOnInit(): void {
    
  }
  
  constructor(private toast: ToastrService,
              private service: AuthService,
              private router: Router) { }

  validaCampos(): boolean{
    return this.email.valid && this.senha.valid
  }

  logar(){
    this.service.authenticate(this.creds).subscribe(resposta =>{      
      this.service.successfullLogin(resposta.headers.get('Authorization').substring(7))
      this.router.navigate(['home'])
   },()=>{
      this.toast.error('Usuário e/ou senha invalida')
   })
  }

}
