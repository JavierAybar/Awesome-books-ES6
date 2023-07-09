import getTime from './modules/datatime.js';

// book management
import BookList from './modules/handler_books.js';

// handles page content change
import handleNavItemClick, { navItems } from './modules/navigation_function.js';

// Add event for each item
navItems.forEach((link) => link.addEventListener('click', handleNavItemClick));

getTime();

const book = new BookList();

console.log(book);
