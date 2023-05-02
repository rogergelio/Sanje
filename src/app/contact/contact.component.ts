import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  user = {name: '', email: '', message: ''}; 

  onSubmit() {
    if (!this.user.name || !this.user.email || !this.user.message) {
      alert('¡Llena todos los campos!');
      return;
    }else{
      console.log("Gracias usuario "+this.user.name)
    }
}
}