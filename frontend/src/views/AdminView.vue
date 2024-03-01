<template>
    <div>
        <button class="admin-btn" @click="showUsersTable">Users</button>
        <button class="admin-btn" @click="showProductsTable">Products</button>
        <hr class="text-white" />
        <!-- Sort Items -->
        <div class="container d-flex justify-content-start mb-3 mt-5 pt-4">
            <div class="d-flex w-25 ms-3">
                <label for="" class="form-label">Sort by Edition</label>
                <select class="form-select" name="" id="sortEdition" @change="sortEdition">
                    <option value="All">All</option>
                    <option value="Penguin">Pork</option>
                    <option value="Harcourt Brace">SeaFood</option>
                    <option value="Random House">Poultry</option>
                    <option value="Harper Perennial">Lamb</option>
                    <option value="Signet Classics">Classic Sausage</option>
                </select>
            </div>
            <div class="d-flex w-25 ms-3">
                <label for="" class="form-label">Sort Title</label>
                <select class="form-select" name="" id="sortTitle" @change="sortTitle">
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div class="d-flex w-25 ms-3">
                <label for="" class="form-label">Sort Price</label>
                <select class="form-select" name="" id="sortPrice" @change="sortPrice">
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
        </div>
        <div v-if="showAddUserForm">
        <input type="text" v-model="newUser.firstName" placeholder="First Name">
        <input type="text" v-model="newUser.lastName" placeholder="Last Name">
        <input type="number" v-model="newUser.userAge" placeholder="Age">
        <input type="text" v-model="newUser.gender" placeholder="Gender">
        <input type="email" v-model="newUser.emailAdd" placeholder="Email">
        <input type="password" v-model="newUser.userPwd" placeholder="Password">
        <input type="text" v-model="newUser.userRole" placeholder="User Role">
        <button class="admin-btn" @click="addNewUser">Add User</button>
    </div>
        <!-- Users Table -->
        <table v-if="showUsers" id="usersTable">
            <!-- Table headers for users -->
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>User Role</th>
                </tr>
            </thead>
            <!-- Table body for users -->
            <tbody id="usersTableBody">
                <tr v-for="user in usersData" :key="user.id">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.userAge }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userPwd }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>
                        <button @click="editUser(user)">Edit</button> <!-- Call editUser method with user data -->
                        <button @click="deleteUser(user.id)">Delete</button> <!-- Call deleteUser method with user id -->
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Products Table -->
        <table v-if="showProducts" id="productsTable">
            <!-- Table headers for products -->
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Image URL</th>
                </tr>
            </thead>
            <tbody id="productsTableBody">
                <tr v-for="product in productsData" :key="product.id">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td>{{ product.prodAmount }}</td>
                    <td>{{ product.imageURL }}</td>
                    <td>
                        <button @click="editProduct(product)">Edit</button> <!-- Call editUser method with user data -->
                        <button @click="deleteProduct(product.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button v-if="showAddProductBtn" @click="addProduct">Add Product</button>
        <button v-if="showAddUserBtn" @click="addUser">Add User</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showUsers: false,
            showProducts: false,
            showAddProductBtn: true,
            showAddUserForm: true,
            showAddUserBtn: true, // Added variable for showing Add User button
            usersData: [],
            productsData: [],
            newUser: {
                firstName: '',
                lastName: '',
                userAge: null,
                gender: '',
                emailAdd: '',
                userPwd: '',
                userRole: ''
            }
        };
    },
    methods: {
        showUsersTable() {
            this.showUsers = true;
            this.showProducts = false;
            this.showAddProductBtn = false;
            this.showAddUserForm = true;
            // Fetch user data from the backend API
            fetch('https://lca-endmodulenodeproject-1.onrender.com/Users')
                .then(response => response.json())
                .then(data => {
                    this.usersData = data;
                })
                .catch(error => console.error('Error fetching user data:', error));
        },
        showProductsTable() {
            this.showUsers = false;
            this.showProducts = true;
            this.showAddProductBtn = true;
            this.showAddProductForm = true;
            // Fetch product data from the backend API
            fetch('https://lca-endmodulenodeproject-1.onrender.com/Products')
                .then(response => response.json())
                .then(data => {
                    this.productsData = data;
                })
                .catch(error => console.error('Error fetching product data:', error));
        },
        addProduct() {
        },
        addNewUser() {
            fetch('https://lca-endmodulenodeproject-1.onrender.com/Users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.newUser)
            })
                .then(response => response.json())
                .then(data => {
                    this.usersData.push(data);
                    this.newUser = {
                        firstName: '',
                        lastName: '',
                        userAge: null,
                        gender: '',
                        emailAdd: '',
                        userPwd: '',
                        userRole: ''
                    };
                })
                .catch(error => console.error('Error adding new user:', error));
        }
    }
};
</script>
<style scoped>
.admin-btn {
    background-color: indigo;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th,
td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}
th {
    background-color: #F2F2F2;
}
</style>