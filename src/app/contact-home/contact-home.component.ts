import { Component } from "@angular/core";

export interface Contact {
  id: number;
  name: string;
  surname: string;
  second_surname: string;
  phone: string;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {
    id: 1,
    name: "Antía",
    surname: "Garrido",
    second_surname: "Cañás",
    phone: "66666666",
    email: "antiagarrido@email.es",
  },

  {
    id: 2,
    name: "Juan",
    surname: "Pérez",
    second_surname: "López",
    phone: "55555555",
    email: "juanperez@email.com"
  },
  {
    id: 3,
    name: "María",
    surname: "Gómez",
    second_surname: "Sánchez",
    phone: "77777777",
    email: "mariagomez@email.es"
  },

  {
    id: 4,
    name: "Carlos",
    surname: "Rodríguez",
    second_surname: "Martínez",
    phone: "88888888",
    email: "carlosrodriguez@email.com"
  },

  {
    id: 5,
    name: "Elena",
    surname: "Fernández",
    second_surname: "López",
    phone: "99999999",
    email: "elenafernandez@email.es"
  },

  {
    id: 6,
    name: "Luis",
    surname: "Martínez",
    second_surname: "Sánchez",
    phone: "44444444",
    email: "luismartinez@email.com"
  },

  {
    id: 7,
    name: "Sara",
    surname: "García",
    second_surname: "Vázquez",
    phone: "33333333",
    email: "saragarcia@email.es"
  },

  {
    id: 8,
    name: "Pedro",
    surname: "López",
    second_surname: "Gómez",
    phone: "22222222",
    email: "pedrolopez@email.com"
  },
  {
    id: 9,
    name: "Isabel",
    surname: "Vázquez",
    second_surname: "Sánchez",
    phone: "11111111",
    email: "isabelvazquez@email.es"
  },
  {
    id: 10,
    name: "Miguel",
    surname: "Gómez",
    second_surname: "Pérez",
    phone: "12345678",
    email: "miguelgomez@email.com"
  }

];

@Component({
  selector: "app-contact-home",
  styleUrls: ["./contact-home.component.css"],
  templateUrl: "./contact-home.component.html",
})
export class ContactHomeComponent {
  displayedColumns: string[] = ["id", "name", "surname", "second_surname", "phone", "email"];
  dataSource = ELEMENT_DATA;
}
