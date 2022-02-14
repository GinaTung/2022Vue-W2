import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.min.js';

//燈入及登入狀態、取得產品列表
const site='https://vue3-course-api.hexschool.io/v2';
const path='yuling202202';

const app = createApp({
    data(){
        return{
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            //console.log(this.user)
            const url =`${site}/admin/signin`;
            axios.post(url,this.user)
            .then((res) =>{
                console.log(res)
                const {token ,expired} =res.data;
                console.log(token,expired)
                document.cookie =`hexToken=${token}; expires=${new Date(expired)};`;
                window.location='https://ginatung.github.io/JS2022-W3/week3';
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
})
app.mount('#app');