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
        <!-- Users Table -->
        <table v-if="users" id="usersTable">
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
                <tr v-for="user in users" :key="user.userID">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.userAge }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userPwd }}</td>
                    <td>{{ user.userRole }}</td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
        <br>
        <br>
        <!-- Products Table -->
        <table v-if="products" id="productsTable">
            <!-- Table headers for products -->
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Image</th>
                
                </tr>
            </thead>
            <tbody id="productsTableBody">
                <tr v-for="product in products" :key="product.prodID">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td>{{ product.prodAmount }}</td>
                    <td>{{ product.prodDesc }}</td>
                    <td>
                        <img class="img-fluid w-25" :src="product.imageURL" :alt="product.prodName"/>
                        <button>edit</button>
                        <button>delete</button>
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
            showAddProductBtn: false,
            showAddUserBtn: false,
            usersData: null,
            productsData: null
        };
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        users() {
            return this.$store.state.users
        },
    },
    methods: {
        showUsersTable() {
            this.showUsers = true;
            this.showProducts = false;
            this.showAddProductBtn = false;
            this.showAddUserBtn = false;
              
        },
        showProductsTable() {
            this.showUsers = false;
            this.showProducts = true;
            this.showAddProductBtn = false;
            this.showAddUserBtn = false;
           
        },
        addProduct() {
            // Add product functionality
        },
        addUser() {
            // Add user functionality
        },
        sortEdition() {
            // Sort by edition functionality
        },
        sortTitle() {
            // Sort by title functionality
        },
        sortPrice() {
            // Sort by price functionality
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts'),
        this.$store.dispatch('fetchUsers')
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