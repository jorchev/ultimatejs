class User {
    static #url = 'https://jsonplaceholder.typicode.com/users';
    static #users = [];
    static #ul = document.createElement('ul');
    static #form = document.createElement('form');

    static async getAll() {
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw response;
            this.#users = await response.json();
            return this.#users;
        } catch (error) {
            console.log('Error', e);
        }
    }

    static renderUser(u) {
        let li = document.createElement('li');
        li.innerText = u.name;
        return li;
    }

    static render() {
        let users = this.#users;
        users.forEach(u => this.#ul.appendChild(this.renderUser(u)));

        return this.#ul;
    }

    static onSubmit(e) {
        e.preventDefault();
    }

    static renderForm() {
        // onSubmit, initialValues, error, html
        this.#form.onsubmit = this.onSubmit;
        this.#form.innerHTML = '';

        return this.#form;
    }

}


async function main() {
    const users = await User.getAll();
    const template = User.render();
    const form = User.renderForm();
    document.body.insertAdjacentElement('afterbegin', template);
    document.body.insertAdjacentElement('afterbegin', form);
}

main();