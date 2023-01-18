// New component
class Counter extends HTMLElement {
    constructor() {
        super();
        console.log(import.meta.env.VITE_SOME_KEY) // 123
        console.log(import.meta.env.DB_PASSWORD) // undefined

        
        this.innerHTML = /*html*/`
            <button>Clicks : ${count}</button>
        `;

        let btn = this.querySelector("button");

        // State
        btn.onclick = () => {
            btn.innerHTML = "Clicks : " + ++count;
        };
    }
}

var count = 0;

customElements.define("click-counter", Counter);
