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
        }
    },
    mounted(){
        this.checkLogin();
    }
})
app.mount('#app');