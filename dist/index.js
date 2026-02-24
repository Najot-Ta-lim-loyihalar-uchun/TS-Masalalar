// TypeScript – CRUD bo‘yicha 10 ta amaliy mashq
// Ushbu mashqlar TypeScript’da type, interface, union va function’lar bilan ishlashni mustahkamlash
// uchun mo‘ljallangan. Har bir mashqda faqat oddiy array va function’lardan foydalaning.
let users = [
    { id: 1, name: "Murodiljon", role: "admin" },
    { id: 2, name: "Muhammadamin", role: "user" },
];
/* Add */
function addUser(user) {
    let newID = users.length + 1;
    users.push({ id: newID, ...user });
    return users;
}
// console.log(addUser({ id: 3, name: "Sherdorbek", role: "user" }));
/* Get */
function findUser(getSer) {
    return users.find((item) => item.id === getSer.id || item.name === getSer.name);
}
function updateUser(getSer, updateUser) {
    return users.map((item) => {
        let { id, name, role } = item;
        return id === getSer.id || name === getSer.name
            ? {
                ...item,
                name: updateUser.name || name,
                role: updateUser.role || role,
            }
            : item;
    });
}
console.log(updateUser({ id: 2 }, { role: "admin" }));
/* Delete */
function deleteUser(getSer) {
    return users.filter((item) => item.id !== getSer.id);
}
const products = [
    { id: 1, title: "Smartphone", price: 299.99 },
    { id: 2, title: "Laptop", price: 799.99 },
    { id: 3, title: "Headphones", price: 49.99 },
    { id: 4, title: "Smartwatch", price: 149.99 },
    { id: 5, title: "Tablet", price: 399.99 },
];
console.log(products);
/* Add */
function addProduct(newProduct) {
    let newID = products.length + 1;
    products.push({ id: newID, ...newProduct });
    return products;
}
// console.log(addProduct({ title: "Laptop", price: 999.99 }));
/* get */
function getProduct(productID) {
    return products.filter((item) => item.id === productID);
}
function UpdatePrice(NewPrice) {
    return products.map((item) => item.id === NewPrice.id ? { ...item, price: NewPrice.price } : item);
}
// console.log(UpdatePrice({ id: 2, price: 56.3 }));
function DeleteProduct(id) {
    return products.filter((item) => item.id !== id);
}
const students = [
    { id: 1, name: "Alice", status: "active" },
    { id: 2, name: "Bob", status: "inactive" },
    { id: 3, name: "Charlie", status: "active" },
    { id: 4, name: "David", status: "inactive" },
    { id: 5, name: "Eve", status: "active" },
];
console.log(students);
let todos = [
    { id: 1, title: "Learn TypeScript", completed: false },
    { id: 2, title: "Write CRUD exercises", completed: true },
];
/* AddTodo */
function addTodo(todo) {
    const newID = todos.length + 1;
    todos.push({ id: newID, ...todo });
    return todos;
}
/* ToggleTodo */
function toggleTodo(id) {
    return todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
}
/* DeleteTodo */
function deleteTodo(id) {
    return todos.filter((todo) => todo.id !== id);
}
let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
];
/* AddBook */
function addBook(book) {
    const newID = books.length + 1;
    books.push({ id: newID, ...book });
    return books;
}
/* GetBooks */
function getBooks() {
    return books;
}
/* UpdateAuthor */
function updateAuthor(id, author) {
    return books.map((book) => (book.id === id ? { ...book, author } : book));
}
/* DeleteBook */
function deleteBook(id) {
    return books.filter((book) => book.id !== id);
}
let employees = [
    { id: 1, name: "John", salary: 5000 },
    { id: 2, name: "Jane", salary: 6000 },
];
/* AddEmployee */
function addEmployee(employee) {
    const newID = employees.length + 1;
    employees.push({ id: newID, ...employee });
    return employees;
}
/* UpdateSalary */
function updateSalary(id, salary) {
    return employees.map((emp) => (emp.id === id ? { ...emp, salary } : emp));
}
/* DeleteEmployee */
function deleteEmployee(id) {
    return employees.filter((emp) => emp.id !== id);
}
let categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
];
/* AddCategory */
function addCategory(category) {
    const newID = categories.length + 1;
    categories.push({ id: newID, ...category });
    return categories;
}
/* RenameCategory */
function renameCategory(id, name) {
    return categories.map((cat) => (cat.id === id ? { ...cat, name } : cat));
}
/* DeleteCategory */
function deleteCategory(id) {
    return categories.filter((cat) => cat.id !== id);
}
let orders = [
    { id: 1, status: "new" },
    { id: 2, status: "paid" },
];
/* AddOrder */
function addOrder(order) {
    const newID = orders.length + 1;
    orders.push({ id: newID, ...order });
    return orders;
}
/* UpdateOrderStatus */
function updateOrderStatus(id, status) {
    return orders.map((ord) => (ord.id === id ? { ...ord, status } : ord));
}
/* DeleteOrder */
function deleteOrder(id) {
    return orders.filter((ord) => ord.id !== id);
}
let comments = [
    { id: 1, text: "Great post!" },
    { id: 2, text: "Very helpful, thanks!" },
];
/* AddComment */
function addComment(comment) {
    const newID = comments.length + 1;
    comments.push({ id: newID, ...comment });
    return comments;
}
/* UpdateComment */
function updateComment(id, text) {
    return comments.map((com) => (com.id === id ? { ...com, text } : com));
}
/* DeleteComment */
function deleteComment(id) {
    return comments.filter((com) => com.id !== id);
}
let authUsers = [
    { id: 1, email: "user1@example.com", status: "loggedOut" },
    { id: 2, email: "user2@example.com", status: "loggedIn" },
];
/* AddAuthUser */
function addAuthUser(user) {
    const newID = authUsers.length + 1;
    authUsers.push({ id: newID, ...user });
    return authUsers;
}
/* UpdateAuthStatus */
function updateAuthStatus(id, status) {
    return authUsers.map((user) => (user.id === id ? { ...user, status } : user));
}
/* DeleteAuthUser */
function deleteAuthUser(id) {
    return authUsers.filter((user) => user.id !== id);
}
export {};
//# sourceMappingURL=index.js.map