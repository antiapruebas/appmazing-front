import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Router } from '@angular/router';
import { ContactDeleteComponent } from "../contact-delete/contact-delete.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-contact-home",
  styleUrls: ["./contact-home.component.css"],
  templateUrl: "./contact-home.component.html",
})
export class ContactHomeComponent implements OnInit {
  contacts: any = [];
  constructor(private contactsService: ContactsService, private router: Router,  public dialog: MatDialog) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }
  openDetailForm(row: any) {
    this.router.navigate(["/contact", row.id]);
  }

  displayedColumns: string[] = [
    "id",
    "name",
    "surname",
    "second_surname",
    "phone",
    "email",
    "actions",
  ];

  editContactDetail(contact: any) {
    this.router.navigate(['/contact/edit', contact]);
  }

  openDeleteDialog(contactId: number): void{
    this.dialog.open(ContactDeleteComponent, {data: {contactId: contactId}});
  }

  
}

