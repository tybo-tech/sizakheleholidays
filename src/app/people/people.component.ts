import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  items = [
    {
      Name: 'Sifiso Julian Nxele (Juls)',
      Dp: 'assets/images/man.png',
      Role: 'Chief Executive Officer & Experience Manager',
      Data: 'Julian Nxele is trained in law and has vast experience in the corporate world. He is an avid traveler who relates well with people and always has the well- being of others in mind. Mr. Nxele is a qualified Culture and Nature guide with a passion for South Africa and all its natural wonders. If there is anyone that you would like to have you lead through South Africa, he is the guy.'
    },

    {
      Name: 'Phumlane Julius Sithole (PJ) ',
      Dp: 'assets/images/man.png',
      Role: 'Reservations Manager',
      Data: 'PJ represents the first point of contact at Sizakhele Holidays and is always ready to help a traveler make their dream Africa trip come true. PJ has a background in customer service and is a qualified IT technician.',
    },

    {
      Name: 'Max Thomas Ratau (Max) ',
      Dp: 'assets/images/man.png',
      Role: 'Operations Manager & Experience Manager',
      Data: 'Max Ratua is the big guy with the golden heart. His compassion shows no abounds and he is an absolute hit with everyone that meets him. Max is trained in personal training and has a background in personal security and customer service. We all feel safe when Max is around.',
    },

    {
      Name: 'Nature Mncube (Nay) ',
      Dp: 'assets/images/man.png',
      Role: 'Administration and Finance Officer',
      Data: 'Nature is the friendly lady who does the meticulous paperwork that ensures that our business can function smoothly. Nature has a background in office administration and customer service. She is working to qualify as a bookkeeper. ',
    },

    {
      Name: 'Zanele Sandra Mntambo (Z) ',
      Dp: 'assets/images/man.png',
      Role: 'Health & Safety Technician',
      Data: 'Zanele is a qualified paramedic and firefighter who is entrusted with ensuring that all our guides are prepared for any eventuality and that all activities have been safety checked before adding them to our itineraries.',
    },

    {
      Name: 'Lebogang Makutu (Lebo) ',
      Dp: 'assets/images/man.png',
      Role: 'Meetings, Incentives, Conferences & Events (MICE)',
      Data: 'Lebo is an experienced event coordinator with a background in entertainment and television. She is an expert in guest experience and ensuring that every individual feels’ like they are receiving the world class service for which Sizakhele Holidays is famous. Lebo always go the extra mile and is often an acting Experience Manager during tours and large group events.',
    },
    
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
