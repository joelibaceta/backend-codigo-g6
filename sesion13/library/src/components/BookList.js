import React, { useEffect } from 'react'

function BookList(props) {
    const [bookList, setBookList] = React.useState([])
    const [newTitle, setNewTitle] = React.useState("")
    const [newYear, setNewYear] = React.useState("")
    const [newPrice, setNewPrice] = React.useState(0)

    const {logoutCallback} = props

    function addBook() {
        console.log("Adding Book")
        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                title: newTitle,
                year: newYear,
                price: newPrice
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            getBooks()
        })
    }

    function isAdmin() {
        let role = localStorage.getItem("role")
        return role == "admin"
    }

    function getBooks() {
        fetch('http://localhost:8000/books')
            .then(response => response.json())
            .then(data => setBookList(data))
    }

    function deleteBook(pk) {
        fetch('http://localhost:8000/book/' + pk, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("token")
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            getBooks()
        })
    }

    function signOut() {
        localStorage.removeItem("token")
        logoutCallback()
    }

    function handleNewTitleChange(event) {
        setNewTitle(event.target.value)
    }
    function handleNewYear(event) {
        setNewYear(event.target.value)
    }
    function handleNewPrice(event) {
        setNewPrice(event.target.value)
    }


    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <h1>Books</h1>
            { isAdmin() ? (
                <div>
                    <fieldset>
                        <legend>Nuevo Libro</legend>
                        <input id="title" value={newTitle} onChange={handleNewTitleChange} placeholder="Title" />
                        <input type="number" value={newYear} onChange={handleNewYear} id="year" placeholder="Year" />
                        <input id="price" value={newPrice} onChange={handleNewPrice} placeholder="Price" />
                        <button onClick={addBook}>Agregar</button>
                    </fieldset>
                </div>
            ) : null}
            
            <div>
                <ul>
                    { bookList.map((book) => {
                        return(
                            <li>
                                {book.title}, {book.year} 
                                { isAdmin() ? (
                                    <button onClick={e => {deleteBook(book.id)}}>x</button>
                                ) : null}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div>
                    <button onClick={signOut}>Cerrar Sesion</button>
            </div>
        </div>
    )
}

export default BookList;