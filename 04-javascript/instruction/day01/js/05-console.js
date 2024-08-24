var firstName = 'John';
var LastName = 'Doe';
var $age = 25;
var _profession = 'Software Engineer';
var is_married = false;
var AUTH_SECRET = 'fkjhgludhgkudrhglkdjhfkgjdfhjg';

console.group('Personal Information 1');
console.log(firstName);
console.warn(LastName);
console.error($age);
console.groupEnd();

console.group('Personal Information 2');
console.log(firstName);
console.warn(LastName);
console.error($age);
console.groupEnd();

console.table(['apples', 'oranges', 'bananas']);
