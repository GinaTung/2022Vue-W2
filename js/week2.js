import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.min.js';

//燈入及登入狀態、取得產品列表
const site='https://vue3-course-api.hexschool.io/v2';
const api_path='yuling202202';

const app = createApp({
    data(){
        return{
            products:[],
            tempProduct:{}

        }
    },
    methods:{
        checkLogin(){
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            axios.defaults.headers.common['Authorization'] = token;
            console.log(token)

            const url =`${site}/api/user/check`;
            axios.post(url)
            .then(()=>{
               this.getProducts();
               this.gety();
            })

        },
        getProducts(){
            const url =`${site}/api/${api_path}/admin/products/all`;
            axios.get(url)
            .then((res)=>{
                this.products =res.data.products;
                console.log(Object.values(this.products))//物件轉陣列
                Object.values(this.products).forEach((item)=>{
                    console.log(item)

                })
            })
            
        },
        addProduct() {

            const product = {
              data: {
                title: '[賣]動物園造型衣服99',
                category: '衣服8',
                origin_price: 500,
                price: 300,
                unit: '個',
                description: 'Sit down please 名設計師設計',
                content: '這是內容',
                is_enabled: 1,
                imageUrl: 'https://images.unsplash.com/photo-1573662012516-5cb4399006e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
    
              }
            }
      
            // #6 新增一個產品
            axios.post(`${url}/api/${path}/admin/product`, product)
              .then((res) => {
                console.log(res.data)
              })
              .catch((error) => {
                console.dir(error)
              })
          }
        
    },
    mounted(){
        this.checkLogin();
    }
    
})
addProductBtn.addEventListener('click', addProduct)
    
app.mount('#app');