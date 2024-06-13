import { Invoice } from "./classes/invoice.js";
import { LsitTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const form = document.querySelector('.new-item-form');
const ul = document.querySelector('ul');
const list = new LsitTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
