import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  addForm: FormGroup;
  username: any;
  erreurLogin = '';
  erreurPassword = '';
  erreur = '';
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  hide = true;
  sending = false;
  btnText = 'Connexion';

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.addForm.get('login').valueChanges.subscribe(
      () => { this.erreurLogin = ''; this.erreur = ''; }
    );
    this.addForm.get('password').valueChanges.subscribe(
      () => { this.erreurPassword = ''; this.erreur = ''; }
    );
  }

  onSignIn(): any {
    
    if (this.addForm.get('login').value.trim() === '') {
      this.erreurLogin = 'Login obligatoire !!!';
    }
    if (this.addForm.get('password').value.trim() === '') {
      this.erreurPassword = 'Mot de passe obligatoire !!!';

    } else {
      if (this.addForm.invalid){
        return;
      }
      this.sending = true;
      this.btnText = 'Patientez...';
      /*this.authService.isLogin(this.addForm.get('login').value, this.addForm.get('password').value).subscribe(
        (data: any) => {
        //  console.log(data);
          localStorage.setItem('token', data.token);
          const decodedToken = this.helper.decodeToken(data.token);
          this.etudiantservice.getUserConnected(decodedToken.username).subscribe(
            (res) =>{
              localStorage.setItem('connectedUser',JSON.stringify(res['hydra:member'][0]))
              const roles: string[] = decodedToken.roles;
              if(roles.includes('ROLE_ETUDIANT')){
                this.router.navigate(['/accueil/liste']);
              }else if(roles.includes('ROLE_ADMIN')){
                this.router.navigate(['/accueil/reservation']);
              }
            }
          )
        },
        (error) => {
          console.log(error);
          if (error.status === 500 || error.status === 0) {
            this.erreur = 'Erreur. Veillez resseyer svp.';
            this.sending = false;
            this.btnText = 'Connexion';
            return;
          }
          else{
          this.sending = false;
          this.btnText = 'Connexion';
          this.erreur = 'Données invalides';
          }
        }
      );*/
    }
  }

}
