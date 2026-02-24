// TypeScript – CRUD bo‘yicha 10 ta amaliy mashq
// Ushbu mashqlar TypeScript’da type, interface, union va function’lar bilan ishlashni mustahkamlash
// uchun mo‘ljallangan. Har bir mashqda faqat oddiy array va function’lardan foydalaning.

type ID = number;
type Name = string;

interface Get {
  id?: ID;
  name?: Name;
}

// • 1-mashq: User CRUD UserRole type ("admin" | "user") yarating. User interface (id, name, role).
// Add, Get, Update, Delete funksiyalarini yozing.

type Role = "admin" | "user";

interface User {
  id?: ID;
  name: Name;
  role: Role;
}

let users: User[] = [
  { id: 1, name: "Murodiljon", role: "admin" },
  { id: 2, name: "Muhammadamin", role: "user" },
];

/* Add */
function addUser(user: User): User[] {
  let newID: number = users.length + 1;

  users.push({ id: newID, ...user });
  return users;
}

// console.log(addUser({ id: 3, name: "Sherdorbek", role: "user" }));

/* Get */

function findUser(getSer: Get): User | undefined {
  return users.find(
    (item) => item.id === getSer.id || item.name === getSer.name,
  );
}

// console.log(findUser({ name: "Murodiljon" }));

/* Update */
interface UpdateUser {
  name?: Name;
  role?: Role;
}

function updateUser(getSer: Get, updateUser: UpdateUser) {
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
function deleteUser(getSer: Get): User[] {
  return users.filter((item) => item.id !== getSer.id);
}

// console.log(deleteUser({ id: 2 }));

// • 2-mashq: Product CRUD Product interface (id, title, price). AddProduct, GetProducts,
// UpdatePrice, DeleteProduct funksiyalari.

interface Product {
  id?: number;
  title: string;
  price: number;
}

const products: Product[] = [
  { id: 1, title: "Smartphone", price: 299.99 },
  { id: 2, title: "Laptop", price: 799.99 },
  { id: 3, title: "Headphones", price: 49.99 },
  { id: 4, title: "Smartwatch", price: 149.99 },
  { id: 5, title: "Tablet", price: 399.99 },
];

console.log(products);

/* Add */
function addProduct(newProduct: Product): Product[] {
  let newID: number = products.length + 1;
  products.push({ id: newID, ...newProduct });
  return products;
}

// console.log(addProduct({ title: "Laptop", price: 999.99 }));

/* get */
function getProduct(productID: ID): Product[] {
  return products.filter((item) => item.id === productID);
}

// console.log(getProduct(1));

/* UpdatePrice */

interface UpdateProductPrice {
  id: ID;
  price: number;
}

function UpdatePrice(NewPrice: UpdateProductPrice): Product[] {
  return products.map((item) =>
    item.id === NewPrice.id ? { ...item, price: NewPrice.price } : item,
  );
}

// console.log(UpdatePrice({ id: 2, price: 56.3 }));

function DeleteProduct(id: ID): Product[] {
  return products.filter((item) => item.id !== id);
}

// console.log(DeleteProduct(1));

// • 3-mashq: Student CRUD StudentStatus type ("active" | "inactive"). Student interface (id, name,
// status). CRUD funksiyalar.

type StudentStatus = "active" | "inactive";

interface Student {
  id: ID;
  name: Name;
  status: StudentStatus;
}

const students: Student[] = [
  { id: 1, name: "Alice", status: "active" },
  { id: 2, name: "Bob", status: "inactive" },
  { id: 3, name: "Charlie", status: "active" },
  { id: 4, name: "David", status: "inactive" },
  { id: 5, name: "Eve", status: "active" },
];

console.log(students);

// • 4-mashq: Todo CRUD Todo interface (id, title, completed). AddTodo, ToggleTodo, DeleteTodo.

interface Todo {
  id?: ID;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Write CRUD exercises", completed: true },
];

/* AddTodo */
function addTodo(todo: Todo): Todo[] {
  const newID = todos.length + 1;
  todos.push({ id: newID, ...todo });
  return todos;
}

/* ToggleTodo */
function toggleTodo(id: ID): Todo[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
}

/* DeleteTodo */
function deleteTodo(id: ID): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}

// • 5-mashq: Book CRUD Book interface (id, title, author). AddBook, GetBooks, UpdateAuthor,
// DeleteBook.

interface Book {
  id?: ID;
  title: string;
  author: string;
}

let books: Book[] = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

/* AddBook */
function addBook(book: Book): Book[] {
  const newID = books.length + 1;
  books.push({ id: newID, ...book });
  return books;
}

/* GetBooks */
function getBooks(): Book[] {
  return books;
}

/* UpdateAuthor */
function updateAuthor(id: ID, author: string): Book[] {
  return books.map((book) => (book.id === id ? { ...book, author } : book));
}

/* DeleteBook */
function deleteBook(id: ID): Book[] {
  return books.filter((book) => book.id !== id);
}

// • 6-mashq: Employee CRUD Employee interface (id, name, salary). AddEmployee,
// UpdateSalary, DeleteEmployee.

interface Employee {
  id?: ID;
  name: Name;
  salary: number;
}

let employees: Employee[] = [
  { id: 1, name: "John", salary: 5000 },
  { id: 2, name: "Jane", salary: 6000 },
];

/* AddEmployee */
function addEmployee(employee: Employee): Employee[] {
  const newID = employees.length + 1;
  employees.push({ id: newID, ...employee });
  return employees;
}

/* UpdateSalary */
function updateSalary(id: ID, salary: number): Employee[] {
  return employees.map((emp) => (emp.id === id ? { ...emp, salary } : emp));
}

/* DeleteEmployee */
function deleteEmployee(id: ID): Employee[] {
  return employees.filter((emp) => emp.id !== id);
}

// • 7-mashq: Category CRUD Category interface (id, name). AddCategory, RenameCategory,
// DeleteCategory.

interface Category {
  id?: ID;
  name: string;
}

let categories: Category[] = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Books" },
];

/* AddCategory */
function addCategory(category: Category): Category[] {
  const newID = categories.length + 1;
  categories.push({ id: newID, ...category });
  return categories;
}

/* RenameCategory */
function renameCategory(id: ID, name: string): Category[] {
  return categories.map((cat) => (cat.id === id ? { ...cat, name } : cat));
}

/* DeleteCategory */
function deleteCategory(id: ID): Category[] {
  return categories.filter((cat) => cat.id !== id);
}

// • 8-mashq: Order CRUD OrderStatus type ("new" | "paid" | "cancelled"). Order interface (id,
// status). CRUD.

type OrderStatus = "new" | "paid" | "cancelled";

interface Order {
  id?: ID;
  status: OrderStatus;
}

let orders: Order[] = [
  { id: 1, status: "new" },
  { id: 2, status: "paid" },
];

/* AddOrder */
function addOrder(order: Order): Order[] {
  const newID = orders.length + 1;
  orders.push({ id: newID, ...order });
  return orders;
}

/* UpdateOrderStatus */
function updateOrderStatus(id: ID, status: OrderStatus): Order[] {
  return orders.map((ord) => (ord.id === id ? { ...ord, status } : ord));
}

/* DeleteOrder */
function deleteOrder(id: ID): Order[] {
  return orders.filter((ord) => ord.id !== id);
}

// • 9-mashq: Comment CRUD Comment interface (id, text). AddComment, UpdateComment,
// DeleteComment.

interface Comment {
  id?: ID;
  text: string;
}

let comments: Comment[] = [
  { id: 1, text: "Great post!" },
  { id: 2, text: "Very helpful, thanks!" },
];

/* AddComment */
function addComment(comment: Comment): Comment[] {
  const newID = comments.length + 1;
  comments.push({ id: newID, ...comment });
  return comments;
}

/* UpdateComment */
function updateComment(id: ID, text: string): Comment[] {
  return comments.map((com) => (com.id === id ? { ...com, text } : com));
}

/* DeleteComment */
function deleteComment(id: ID): Comment[] {
  return comments.filter((com) => com.id !== id);
}

// • 10-mashq: Auth User CRUD AuthStatus type ("loggedIn" | "loggedOut"). AuthUser interface (id,
// email, status). CRUD.

type AuthStatus = "loggedIn" | "loggedOut";

interface AuthUser {
  id?: ID;
  email: string;
  status: AuthStatus;
}

let authUsers: AuthUser[] = [
  { id: 1, email: "user1@example.com", status: "loggedOut" },
  { id: 2, email: "user2@example.com", status: "loggedIn" },
];

/* AddAuthUser */
function addAuthUser(user: AuthUser): AuthUser[] {
  const newID = authUsers.length + 1;
  authUsers.push({ id: newID, ...user });
  return authUsers;
}

/* UpdateAuthStatus */
function updateAuthStatus(id: ID, status: AuthStatus): AuthUser[] {
  return authUsers.map((user) => (user.id === id ? { ...user, status } : user));
}

/* DeleteAuthUser */
function deleteAuthUser(id: ID): AuthUser[] {
  return authUsers.filter((user) => user.id !== id);
}
