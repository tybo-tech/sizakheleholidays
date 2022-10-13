import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMPANY_EMIAL } from 'src/app/utils/constants';
import { Email } from 'src/app/utils/email.model';
import { EmailService } from 'src/app/utils/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // <app-add-customer [user]="user">
  name = '';
  email = '';
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
