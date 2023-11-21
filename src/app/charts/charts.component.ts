import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"],
})
export class ChartsComponent implements OnInit {
  initialLetter = [];
  contactsByFullName = [];
  emailExtensions = [];
  phonePrefixData = [];
  productsIntialLetter = [];
  productsbyCategory = [];
  stockByCategory = [];
  productsByPrice = [];

  constructor(
    private contactService: ContactsService,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((data) => {
      this.initialLetter = this.calculateInitialLettersData(data);
      this.contactsByFullName = this.calculateContactsByFullNameData(data);
      this.emailExtensions = this.calculateEmailExtensionsData(data);
      this.phonePrefixData = this.generatePhonePrefixData(data);
    });

    this.productService.getProducts().subscribe((data) => {
      this.productsIntialLetter =
        this.calculateProductsInitialLettersData(data);
      this.productsbyCategory = this.calculateProductsByCategoryData(data);
      this.stockByCategory = this.calculateStockByCategoryData(data);
      this.productsByPrice = this.calculateProductsByPriceData(data);
    });
  }

  calculateInitialLettersData(contacts: any[]): any {
    return contacts.reduce((result, contact) => {
      const initial = contact.surname.charAt(0).toUpperCase();
      if (result.find((item) => item.name === initial)) {
        result.find((item) => item.name === initial).value++;
      } else {
        result.push({ name: initial, value: 1 });
      }
      return result;
    }, []);
  }

  calculateContactsByFullNameData(contacts: any[]): any {
    let tempContactsByFullName = [
      {
        name: "Contacts",
        series: [],
      },
    ];
    contacts.forEach((contact) => {
      let fullName = contact.name + contact.surname;
      if (contact.second_surname) {
        fullName = fullName + contact.second_surname;
      }
      const size = fullName.length;
      const range = `${size - (size % 5)} - ${size - (size % 5) + 4} ch .`;
      let existingRange = tempContactsByFullName[0].series.find(
        (item) => item.name === range
      );
      if (existingRange) {
        existingRange.value++;
      } else {
        tempContactsByFullName[0].series.push({ name: range, value: 1 });
      }
    });

    return tempContactsByFullName.map((entry) => {
      return {
        ...entry,
        series: entry.series.sort(
          (a, b) => Number(a.name.split("-")[0]) - Number(b.name.split("-")[0])
        ),
      };
    });
  }

  calculateEmailExtensionsData(contacts: any[]): any {
    let emailExtensionsMap = new Map<string, number>();
    contacts.forEach((contact) => {
      let emailParts = contact.email.split("@");
      if (emailParts.length == 2) {
        const domain = emailParts[1];
        const firstDot = domain.indexOf(".");
        if (firstDot != -1) {
          const extensionFromDot = domain.substring(firstDot);
          if (emailExtensionsMap.has(extensionFromDot)) {
            emailExtensionsMap.set(
              extensionFromDot,
              emailExtensionsMap.get(extensionFromDot) + 1
            );
          } else {
            emailExtensionsMap.set(extensionFromDot, 1);
          }
        }
      }
    });
    let emailExtensions = [];
    emailExtensionsMap.forEach((value, key) => {
      emailExtensions.push({ name: key, value: value });
    });
    return emailExtensions;
  }

  generatePhonePrefixData(contacts: any[]): any {
    let phonePrefixData = [];
    let prefixCounts = {};
    contacts.forEach((contact) => {
      const phonePrefix = contact.phone.substring(0, 1);
      if (prefixCounts[phonePrefix]) {
        prefixCounts[phonePrefix]++;
      } else {
        prefixCounts[phonePrefix] = 1;
      }
    });

    for (let prefix in prefixCounts) {
      if (prefixCounts.hasOwnProperty(prefix)) {
        phonePrefixData.push({ name: prefix, value: prefixCounts[prefix] });
      }
    }

    return phonePrefixData;
  }

  //PRODUCTS

  calculateProductsInitialLettersData(products: any[]): any {
    return products.reduce((result, product) => {
      const initial = product.name.charAt(0).toUpperCase();
      if (result.find((item) => item.name === initial)) {
        result.find((item) => item.name === initial).value++;
      } else {
        result.push({ name: initial, value: 1 });
      }
      return result;
    }, []);
  }

  calculateProductsByCategoryData(products: any[]): any {
    return products.reduce((result, product) => {
      const category = product.category_id.name;
      if (result.find((item) => item.name === category)) {
        result.find((item) => item.name === category).value++;
      } else {
        result.push({ name: category, value: 1 });
      }
      return result;
    }, []);
  }

  calculateStockByCategoryData(products: any[]): any {
    return products.reduce((result, product) => {
      const category = product.category_id.name;
      const existingCategory = result.find((item) => item.name === category);

      if (existingCategory) {
        existingCategory.value += product.stock;
      } else {
        result.push({ name: category, value: product.stock });
      }

      return result;
    }, []);
  }

  calculateProductsByPriceData(products: any[]): any {}
}
