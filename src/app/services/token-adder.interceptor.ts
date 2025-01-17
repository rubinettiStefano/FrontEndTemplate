import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {CredentialServiceService} from './credential-service.service';

export const tokenAdderInterceptor: HttpInterceptorFn = (req, next) => {

  const servizioCredenziali = inject(CredentialServiceService);//iniezione in funzione


  if(servizioCredenziali.token)
  {

    let requestModificata = req.clone({setHeaders:{token:servizioCredenziali.token}})
    return next(requestModificata);
  }

  return next(req);
};

//1) componente login banale
//2) CredentialService, fa il login e salva token
//3) intercettore, aggiunge token nell'header di ogni request
//4) dentro app.config.ts dico di usare l'intercettore
//5) la request arriva al backend, che con un servizio usa il token per prendere utente associato
