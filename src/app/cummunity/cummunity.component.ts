import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMPANY_EMIAL } from '../utils/constants';
import { Email } from '../utils/email.model';
import { EmailService } from '../utils/email.service';

@Component({
  selector: 'app-cummunity',
  templateUrl: './cummunity.component.html',
  styleUrls: ['./cummunity.component.scss']
})
export class CummunityComponent implements OnInit {

   // <app-add-customer [user]="user">
   name = '';
   email = '';
   actionType = 'Volunteer';
   massage = '';
   phone = '';
   address = '';
 
   showLoader = false;
   sent: boolean = false;
   constructor(
     private emailService: EmailService,
     private router: Router,
   ) { }
 
   ngOnInit() {
   }
 
 
   back() {
     this.router.navigate([``]);
   }
 
   sendEmail() {
     const emailToSend: Email = {
       From: this.email,
       Email: COMPANY_EMIAL,
       Subject: this.name + ' Enquiry',
       Message: `${this.massage}  | ${this.email} | ${this.phone}`,
       UserFullName: this.name
     };
     this.showLoader = true;
     this.emailService.sendGeneralTextEmail(emailToSend)
       .subscribe(response => {
         if (response > 0) {
           this.sent = true;
           //Thank you for contacting us we will reply as soon as possible
         }
       });
   }

}
