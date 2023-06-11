const baseUrl = "https://shoppinglistrest2020.azurewebsites.net/api/shoppingitems"

Vue.createApp({
    data() {
        return {
            shoppingItems: [],
            newItem: {id: 0, name: "", amount: 0, price: 0},
            showForm: false,
            showEditForm: false,
            editItem: {name: "", amount: 0, price: 0},
            editId: 0,
            deleteId: 0,
            deleteMessage: "",
            addmessage: "",
            addData: {name: "", price: 0, quantity: 0},
            totalPrice: 0,
            nameFilter: "",
            minPriceFilter: null,
            maxPriceFilter: null
        }
    },
    methods: {
        async getShoppingItems() {
            try {
                const response = await axios.get(baseUrl)
                this.shoppingItems = response.data
            }
            catch (ex) {
                alert(ex.message)
            }
        },
        async filterByName(nameFilter) {
            try {
                const response = await axios.get(`${baseUrl}?nameFilter=${nameFilter}`)
                this.shoppingItems = response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async filterByMinPrice(minPrice) {
            try {
                const response = await axios.get(`${baseUrl}?minPrice=${minPrice}`)
                this.shoppingItems = response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async filterByMaxPrice(maxPrice) {
            try {
                const response = await axios.get(`${baseUrl}?maxPrice=${maxPrice}`)
                this.shoppingItems = response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
       
        async TotalPrice() {
            try {
              const response = await axios.get(baseUrl + "/totalprice");
              this.totalPrice = response.data;
            } catch (ex) {
              alert(ex.message);
            }
        },
        TotalPriceJava(){
            var total = 0
            for (let i = 0; i < this.shoppingItems.length; i++) {
                total += this.shoppingItems[i].price
            }
            this.totalPrice = total
        }
          
    },
   

}).mount("#app")