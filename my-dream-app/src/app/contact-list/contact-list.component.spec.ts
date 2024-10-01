import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  addContact(name: string) {
    const newContact: Contact = { name };
    this.contactService.addContact(newContact).subscribe((contact) => {
      this.contacts.push(contact);
    });
  }

  deleteContact(id: string) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter((c) => c._id !== id);
    });
  }
}
