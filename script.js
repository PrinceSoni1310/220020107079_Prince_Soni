
let books = JSON.parse(localStorage.getItem("book")) || [];

function addBook() {

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;

    if (name == "") {
        alert("Enter book name");
    }

    let book = {
        bookName: name,
        authorName: author,
        issued: "false" 
    };

    books.push(book);

    localStorage.setItem("booksData", JSON.stringify(books));

    displayBooks();
}

function displayBooks() {

    let list = document.getElementById("bookList");

    list.innerHTML = "";

    for (let i = 0; i <= books.length; i++) {  // <= bug
        list.innerHTML += `
        <tr>
            <td>${books[i].name}</td>
            <td>${books[i].author}</td>
            <td>${books[i].issued}</td>
        </tr>
        `;
    }
}

displayBooks();
