
<img width="432" alt="Screenshot 2024-01-23 at 10 53 48" src="https://github.com/Astronaut828/RegEx-Form-Validation/assets/125616425/a8f4fbf2-1cc5-4346-8aa8-3368e26f8560">

# RegEx Form Validation Project

This is a simple project for creating a user registration form with input validation using regular expressions (RegEx). The form includes fields for username, email, password, telephone, and profile slug, and each field has specific validation requirements.

## Project Structure

The project consists of the following files:

- `index.html`: The HTML file containing the user registration form.
- `styles.css`: The CSS file for styling the form.
- `validation.js`: The JavaScript file for performing input validation using RegEx.

## Form Fields and Validation Rules

1. **Username:**
   - Input Field: `<input type="text" name="username" placeholder="username">`
   - Validation Rule: Username must contain 5 - 12 characters.

2. **Email:**
   - Input Field: `<input type="text" name="email" placeholder="email">`
   - Validation Rule: Email must be a valid address, e.g., me@mydomain.com.

3. **Password:**
   - Input Field: `<input type="password" name="password" placeholder="password">`
   - Validation Rule: Password must be alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters.

4. **Telephone:**
   - Input Field: `<input type="text" name="telephone" placeholder="telephone">`
   - Validation Rule: Telephone must be a valid US telephone number (10 digits).

5. **Profile Slug:**
   - Input Field: `<input type="text" name="slug" placeholder="profile slug">`
   - Validation Rule: Slug must contain only lowercase letters, numbers, and hyphens and be 8 - 20 characters.

## How to Use

1. Clone or download this repository to your local machine.
2. Open `index.html` in a web browser to access the user registration form.
3. Fill out the form fields, and the validation rules will be applied.
4. If any field does not meet the validation criteria, an error message will be displayed.

## Customization

You can customize the form's appearance by modifying the `styles.css` file. Additionally, you can update the validation rules by editing the `validation.js` file to suit your specific requirements.

Feel free to use this project as a starting point for implementing RegEx-based form validation in your web applications. Happy coding!
