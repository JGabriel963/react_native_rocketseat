module.exports = class Database {
    #storege = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storege[key]
    }

    saveAuthor(author) {
        this.#storege.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storege.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const bookExitsts = this
        .findBookByName(book.name)
        if (!bookExitsts) {
            this.#storege.books.push(book)
        }
    }

    addBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    // Posters
    findPosterByName(posterName) {
        return this.#storege.posters.find(b => b.name === posterName)
    }

    savePoster(poster) {
        const posterExitsts = this
        .findPosterByName(poster.name)
        if (!posterExitsts) {
            this.#storege.posters.push(poster)
        }
    }

    addPosterToStock(postertName, quantity) {
        const poster = this.findPostertByName(postertName)
        poster?.addToStock(quantity)
    }

    removePosterFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    // User
    saveUser(user) {
        const userExists = this.#storege.users.find(u => u.email === user.email)
        if (!userExists) {
            this.#storege.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storege.orders.push(order)
    }

    showStorage() {
        console.table(this.#storege.authors)
        console.table(this.#storege.books)
        console.table(this.#storege.posters)
        console.table(this.#storege.users)
        console.table(this.#storege.orders.map( order => order.data))  
    }
}