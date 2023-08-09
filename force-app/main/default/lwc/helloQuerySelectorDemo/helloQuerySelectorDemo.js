import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    users = ['John', 'Jane', 'Jenny'];

    fetchDetails() {
        const elem = this.template.querySelector('h1');
        elem.style.marginBottom="100px";
        elem.style.border = "1px solid red";

        const userElements = this.template.querySelectorAll('.user');
        console.log(elem.innerText);
        Array.from(userElements).forEach(e => {
            console.log(e.innerText);
            e.setAttribute('title', e.innerText);
        });

        ///lwc:manual
        const divElem = this.template.querySelector(".child");
        divElem.innerHTML = '<p>hello world</p>';
    }
}
