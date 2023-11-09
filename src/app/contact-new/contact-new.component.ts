import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ContactsService } from "../contacts.service";

@Component({
  selector: "app-contact-new",
  templateUrl: "./contact-new.component.html",
  styleUrls: ["./contact-new.component.css"],
})
export class ContactNewComponent implements OnInit {
  name: string;
  surname: string;
  second_surname: string;
  phone: string;
  email: string;

  constructor(private router: Router, private contactService: ContactsService) {}

  ngOnInit() {}

  newContact() {
    const contact = {
      name: this.name,
      surname: this.surname,
      second_surname: this.second_surname,
      phone: this.phone,
      email: this.email,
    }
    this.contactService.newContact(contact);
    this.navigateToHome();
  }

    cancelInsert(){
      this.navigateToHome();}

      navigateToHome(){
        this.router.navigate(['/contacts']);
      }

  }
