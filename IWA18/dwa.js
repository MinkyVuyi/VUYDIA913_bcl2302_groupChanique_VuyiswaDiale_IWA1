/**
 * Fetches a list of users from the API.
 *
 * @async
 * @returns {Promise<Array<User>>} - A promise that resolves to an array of user objects.
 */
async function fetchUsers() {
    try {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
  
  /**
   * Represents a user.
   *
   * @typedef {Object} User
   * @property {number} id - The unique identifier of the user.
   * @property {string} name - The name of the user.
   * @property {string} email - The email address of the user.
   */
  
  // Example usage of the fetchUsers function
  fetchUsers()
    .then(users => {
      for (const user of users) {
        console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  