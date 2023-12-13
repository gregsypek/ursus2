(function(){"use strict";var t={3269:function(t,e,s){s(7658);var a=s(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app","data-app":""}},[e("NavBar"),e("router-view"),e("Footer")],1)},o=[],r=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg p-0",staticStyle:{"background-color":"var(--color-light-500)"}},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand btn-logo my-2 me-5",attrs:{to:"/"}},[e("img",{attrs:{src:s(3355),alt:"logo"}})]),t._m(0),e("div",{staticClass:"collapse navbar-collapse justify-content-between my-4 my-lg-0",attrs:{id:"navmenu"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item py-3 px-1"},[e("router-link",{staticClass:"p-3",attrs:{to:"/"}},[t._v("Home")])],1),e("li",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],staticClass:"nav-item py-3 px-1"},[t.loggedIn?e("router-link",{staticClass:"p-3",attrs:{to:"/add-post"}},[t._v("Add post")]):t._e()],1),e("li",{staticClass:"nav-item py-3 px-1"},[e("router-link",{staticClass:"p-3",attrs:{to:"/about"}},[t._v("About")])],1)]),t.loggedIn?e("div",[e("p",{staticClass:"btn m-0 rounded-0"},[t._v("Witaj "+t._s(t.getUserName))]),e("button",{staticClass:"btn btn-login rounded-0",attrs:{type:"button"},on:{click:t.logout}},[t._v(" Logout ")])]):e("div",[e("router-link",{staticClass:"btn btn-login d-block d-lg-inline rounded-0",attrs:{to:"/login"}},[t._v("login")]),e("router-link",{staticClass:"btn btn-register d-block d-lg-inline rounded-0",attrs:{to:"/register"}},[t._v("register")])],1)])],1)])},n=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navmenu"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],l=s(629);const c={...(0,l.Se)(["loggedIn"])};var d={name:"NavBar",computed:{...c,getUserName(){return this.$store.state.user.name?this.$store.state.user.name:this.$store.state.user.email.split("@")[0]}},methods:{logout(){this.$store.dispatch("logout")}}},u=d,m=s(1001),p=(0,m.Z)(u,r,n,!1,null,null,null),f=p.exports,g=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"p-5",staticStyle:{"background-color":"var(--color-dark-500)"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex justify-content-between"},[e("div",{staticClass:"col-lg-6 col-xl-4"},[e("div",{staticClass:"row g-4"},[t._m(0),e("div",{staticClass:"col-lg"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"nav-item"},[t.loggedIn?e("router-link",{staticClass:"nav-link",attrs:{to:"/add-post"}},[t._v("Add Post")]):t._e()],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])]),t._m(1)])]),t._m(2)])])])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg"},[e("div",{staticClass:"logo rounded-2 mt-2"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://www.ursus.com/pl"}},[t._v("www.ursus.com")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-xl-4 mt-2"},[e("p",[t._v("Get our newsletter")]),e("form",{staticClass:"row g-3"},[e("div",{staticClass:"col-auto"},[e("label",{staticClass:"visually-hidden rounded-1",attrs:{for:"inputEmail"}},[t._v("Email")]),e("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Enter your email"}})]),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-light mb-3 px-4 rounded-1",attrs:{type:"submit"}},[t._v(" Subscribe ")])])]),e("ul",{staticClass:"nav nav-icons"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link ps-0 pe-2 py-2",attrs:{href:"#"}},[e("i",{staticClass:"bi bi-facebook"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link p-2",attrs:{href:"#"}},[e("i",{staticClass:"bi bi-instagram"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link p-2",attrs:{href:"#"}},[e("i",{staticClass:"bi bi-snapchat"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link p-2",attrs:{href:"#"}},[e("i",{staticClass:"bi bi-twitter"})])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link p-2",attrs:{href:"#"}},[e("i",{staticClass:"bi bi-youtube"})])])])])}],h={computed:{...c}},C=h,b=(0,m.Z)(C,g,v,!1,null,null,null),y=b.exports,w={name:"App",components:{NavBar:f,Footer:y}},_=w,A=(0,m.Z)(_,i,o,!1,null,null,null),Z=A.exports,x=s(8345),k=s(4635),F=s(6035),P=s(3823),V=function(){var t=this,e=t._self._c;return e("section",{staticClass:"my-5"},[e(F.Z,[this.$route.params.message?e(k.Z,{staticClass:"success",attrs:{"close-text":"Close Alert",color:"green accent-4",green:"",dismissible:""}},[t._v(" "+t._s(this.$route.params.message)+" ")]):t._e(),this.$route.params.warning?e(k.Z,{staticClass:"warning",attrs:{"close-text":"Close Alert",color:"red accent-4",red:"",dismissible:""}},[t._v(t._s(this.$route.params.warning)+" ")]):t._e()],1),e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex row justify-content-center gap-5"},[t._m(0),e("main",{staticClass:"row col-10 col-lg-7 gap-3 gap-lg-3"},[e("h1",{staticClass:"mt-0"},[t._v(" ")]),t.isLoading?[e("h3",{staticClass:"text-center"},[t._v("Loading...")])]:t._l(t.paginatedData,(function(s,a){return e("div",{key:s._id,staticClass:"col-md"},[e("router-link",{staticClass:"card rounded-0 border-0",attrs:{to:{name:"post",params:{id:s._id}}}},[e("img",{staticClass:"card-img-top rounded-0",attrs:{src:`/${s.image}`,alt:s.name}}),e("div",{staticClass:"card-body bg-transparent px-0"},[e("h3",{staticClass:"card-title pt-3"},[t._v(t._s(s.name))]),e("p",{staticClass:"card-text py-3"},[t._v(" "+t._s(s.info.substring(0,150)+"...")+" ")])])])],1)})),e(P.Z,{attrs:{length:t.pageCount},on:{input:t.handlePageChange},model:{value:t.pageNumber,callback:function(e){t.pageNumber=e},expression:"pageNumber"}})],2)])])],1)},$=[function(){var t=this,e=t._self._c;return e("aside",{staticClass:"d-none d-lg-block col-3"},[e("div",{staticClass:"rounded"},[e("h3",[t._v("URSUS")])])])}],R=s(5121);const S="/api/post";class E{static async getAllPost(){const t=await R.Z.get(S);return t.data}static async getPostByID(t){const e=await R.Z.get(`${S}/${t}`);return e.data}static async addPost(t){const e=await R.Z.post(S,t);return e.data}static async updatePost(t,e){const s=await R.Z.patch(`${S}/${t}`,e);return s.data}static async deletePost(t){const e=await R.Z.delete(`${S}/${t}`);return e.data}static async createUser(t){const e=await R.Z.post(`${S}/register`,t);return console.log("🚀 ~ file: api.js ~ line 34 ~ API ~ createUser ~ res",e),e.data}static async loginUser(t){const e=await R.Z.post(`${S}/login`,t);return e.data}}var U={name:"Home",data(){return{isLoading:!0,posts:[],pageNumber:1,size:4}},async created(){this.posts=await E.getAllPost(),this.isLoading=!1},methods:{handlePageChange(t){this.pageNumber=t}},computed:{pageCount(){return Math.ceil(this.posts.length/this.size)},paginatedData(){const t=(this.pageNumber-1)*this.size,e=t+this.size;return this.posts.slice(t,e)}}},O=U,j=(0,m.Z)(O,V,$,!1,null,null,null),B=j.exports,D=s(1828),N=s(3058),I=s(5223),L=s(4437),T=s(4192),G=s(4380),M=s(6904),K=s(5294),H=s(9510),Y=s(5617),J=function(){var t=this,e=t._self._c;return e("section",{staticClass:"my-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex row justify-content-center g-5"},[t._m(0),e("main",{staticClass:"row col-12 col-lg-9 g-5"},[e("div",{staticClass:"col-md"},[e(F.Z,[e(K.Z,{attrs:{"no-gutters":""}},[e(L.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e(N.Z,{staticClass:"p-5 my-5"},[e(I.EB,[t._v("Add New Post")]),e(T.Z),e(M.Z,{ref:"addPostForm",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}},model:{value:t.formValidity,callback:function(e){t.formValidity=e},expression:"formValidity"}},[e(H.Z,{attrs:{label:"Name","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.name,callback:function(e){t.$set(t.post,"name",e)},expression:"post.name"}}),e(H.Z,{attrs:{label:"Price",type:"number","prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.price,callback:function(e){t.$set(t.post,"price",e)},expression:"post.price"}}),e(Y.Z,{attrs:{label:"Info","prepend-icon":"mdi-note-plus",rules:t.infoRules,counter:""},model:{value:t.post.info,callback:function(e){t.$set(t.post,"info",e)},expression:"post.info"}}),e(G.Z,{attrs:{rules:t.rules,"show-size":"",counter:"",multiple:"",label:"Select Image"},on:{change:t.selectFile}}),e(D.Z,{staticClass:"mt-3 me-3",attrs:{type:"submit",disabled:!t.formValidity}},[t._v("Add Post")]),e(D.Z,{staticClass:"mt-3 me-3",attrs:{color:"success"},on:{click:t.validateForm}},[t._v("Validate Form")]),e(D.Z,{staticClass:"mt-3 me-3 btn btn-validation",attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v("Reset Validation")]),e(D.Z,{staticClass:"mt-3 me-3 btn btn-reset",attrs:{color:"error"},on:{click:t.resetForm}},[t._v("Reset")])],1)],1)],1)],1)],1)],1)])])])])},q=[function(){var t=this,e=t._self._c;return e("aside",{staticClass:"d-none d-lg-block col-3"},[e("div",{staticClass:"rounded"},[e("h3",[e("img",{staticClass:"d-none d-xxl-block",attrs:{src:s(3355),alt:"logo"}})])])])}],Q={data(){return{rules:[t=>!!t||"This field is required!"],infoRules:[t=>!!t||"Informations about post are required",t=>t.length>9||"A post info must have more or equal then 10 characters"],post:{name:"",price:"",info:"",image:""},image:"",errorMessage:"",formValidity:!1}},methods:{selectFile(t){console.log("🚀 ~ file: AddPost.vue ~ line 37 ~ selectFile ~ file",t),this.image=t[0]},async submitForm(){const t=new FormData;if(t.append("image",this.image),t.append("name",this.post.name),t.append("price",this.post.price),t.append("info",this.post.info),this.$refs.addPostForm.validate()){const e=await E.addPost(t);this.$router.push({name:"home",params:{message:e.message}})}},resetValidation(){this.$refs.addPostForm.resetValidation()},resetForm(){this.$refs.addPostForm.reset()},validateForm(){this.$refs.addPostForm.validate()}},computed:{isLoggedIn(){return null!=localStorage.getItem("user")}}},z=Q,W=(0,m.Z)(z,J,q,!1,null,null,null),X=W.exports,tt=s(2469),et=function(){var t=this,e=t._self._c;return e("section",{staticClass:"my-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex row justify-content-center g-5"},[e("aside",{staticClass:"d-none d-lg-block col-3"},[e("div",{staticClass:"rounded"},[e("h3",[e("img",{staticClass:"d-none d-xxl-block",attrs:{src:`/${t.post.image}`,width:"100%"}})])])]),e("main",{staticClass:"row col-12 col-lg-9 g-5"},[e("div",{staticClass:"col-md"},[e(F.Z,[e(K.Z,{attrs:{"no-gutters":""}},[e(L.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e(N.Z,{staticClass:"p-5 my-5"},[e(I.EB,[t._v("Edit This Post")]),e(T.Z),e(M.Z,{ref:"editPostForm",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateForm.apply(null,arguments)}},model:{value:t.formValidity,callback:function(e){t.formValidity=e},expression:"formValidity"}},[e(H.Z,{attrs:{label:"Name","prepend-icon":"mdi-note",rules:t.rules},model:{value:t.post.name,callback:function(e){t.$set(t.post,"name",e)},expression:"post.name"}}),e(H.Z,{attrs:{label:"Price",type:"number","prepend-icon":"mdi-view-list",rules:t.rules},model:{value:t.post.price,callback:function(e){t.$set(t.post,"price",e)},expression:"post.price"}}),e(Y.Z,{attrs:{label:"Info",rules:t.infoRules,counter:"","prepend-icon":"mdi-note-plus"},model:{value:t.post.info,callback:function(e){t.$set(t.post,"info",e)},expression:"post.info"}}),e(G.Z,{attrs:{"show-size":"",multiple:"",label:"Select Image"},on:{change:t.selectFile}}),e(tt.Z,{staticClass:"d-block d-xxl-none",attrs:{src:`/${t.post.image}`,width:"120"}}),e(D.Z,{staticClass:"mt-3 me-3",attrs:{type:"submit",disabled:!t.formValidity}},[t._v("Update Post")]),e(D.Z,{staticClass:"mt-3 me-3",attrs:{color:"success"},on:{click:t.validateForm}},[t._v("Validate Form")]),e(D.Z,{staticClass:"mt-3 me-3 btn btn-validation",attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v("Reset Validation")]),e(D.Z,{staticClass:"mt-3 me-3 btn btn-reset",attrs:{color:"error"},on:{click:t.resetForm}},[t._v("Reset")])],1)],1)],1)],1)],1)],1)])])])])},st=[],at={data(){return{rules:[t=>!!t||"This field is required!"],infoRules:[t=>!!t||"Informations about post are required",t=>t.length>9||"A post info must have more or equal then 10 characters"],formValidity:!1,post:{name:"",price:"",info:"",image:""},image:""}},async created(){const t=await E.getPostByID(this.$route.params.id);this.post=t},methods:{selectFile(t){console.log("🚀 ~ file: AddPost.vue ~ line 37 ~ selectFile ~ file",t),this.image=t[0]},async updateForm(){const t=new FormData;if(t.append("image",this.image),t.append("old_image",this.post.image),t.append("name",this.post.name),t.append("price",this.post.price),t.append("info",this.post.info),this.$refs.editPostForm.validate()){const e=await E.updatePost(this.$route.params.id,t);this.$router.push({name:"home",params:{message:e.message}})}},resetValidation(){this.$refs.editPostForm.resetValidation()},resetForm(){this.$refs.editPostForm.reset()},validateForm(){this.$refs.editPostForm.validate()}}},it=at,ot=(0,m.Z)(it,et,st,!1,null,"146aeec4",null),rt=ot.exports,nt=s(4735),lt=s(5234),ct=function(){var t=this,e=t._self._c;return e("section",{staticClass:"my-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex row justify-content-center g-5"},[e("main",{staticClass:"row col-12 g-5"},[e("div",{staticClass:"col-12"},[e("h1",[t._v(t._s(t.post.name))]),e("div",{staticClass:"card rounded-0 border-0"},[e("div",{staticClass:"row gallery gap-lg-5 justify-content-between"},[e("img",{staticClass:"img-fluid rounded-0 col-lg-8",attrs:{src:`/${t.post.image}`,alt:t.post.name}}),e("div",{staticClass:"thumbnails py-2 py-lg-0 rounded-0 border-0 d-flex flex-lg-column justify-content-center align-items-center gap-3 gap-lg-5 col-lg-2"})]),e("div",{staticClass:"d-flex flex-column flex-lg-row mt-5 gap-5 align-items-baseline justify-content-between"},[e("div",{staticClass:"d-flex align-items-center flex-wrap gap-2"},[e("h3",{staticClass:"card-price mb-0 text-left fw-light h5"},[t._v("Cena:")]),e("p",{staticClass:"btn btn-outline-secondary h4 m-0"},[t._v(" "+t._s(t.post.price)+" "),e("span",[t._v("zł")])])]),t.loggedIn?e("div",{staticClass:"buttons col-12 col-lg-4 d-flex gap-3 justify-content-start justify-content-lg-end"},[e(D.Z,{staticClass:"btn btn-light",attrs:{to:{name:"edit-post",params:{id:t.post._id}}}},[t._v("edit")]),e(D.Z,{staticClass:"btn btn-danger",on:{click:function(e){t.dialog=!0}}},[t._v("delete")]),e(nt.Z,{attrs:{persistent:"","max-width":"390"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(N.Z,[e(I.EB,{staticClass:"text-h5 error headline"},[t._v(" Confirm Delete ")]),e(I.ZB,[t._v("Are you sure you want to delete?")]),e(I.h7,[e(lt.Z),e(D.Z,{staticClass:"me-4",attrs:{text:"",color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),e(D.Z,{attrs:{color:"error",text:""},on:{click:function(e){return t.removePost(t.post._id)}}},[t._v(" Confirm Delete ")])],1)],1)],1)],1):t._e()]),e("div",{staticClass:"card-body bg-transparent px-0 col-12 d-flex justify-content-between mt-lg-5"},[e("aside",{staticClass:"d-none d-lg-block col-3"},[e("div",{staticClass:"rounded"},[e("h3",{staticClass:"fs-5"},[t._v(t._s(t.post.name))])])]),e("p",{staticClass:"card-text col-12 col-lg-8 py-3"},[t._v(" "+t._s(t.post.info)+" ")])])])]),e("div",{staticClass:"col-12 d-flex flex-row-reverse"},[e(D.Z,{staticClass:"btn btn-light",attrs:{to:{name:"home"}}},[t._v("← back")])],1)])])])])},dt=[],ut={data(){return{post:{},dialog:!1}},async created(){const t=await E.getPostByID(this.$route.params.id);this.post=t},methods:{async removePost(t){const e=await E.deletePost(t);this.$router.push({name:"home",params:{message:e.message}})}},computed:{...c}},mt=ut,pt=(0,m.Z)(mt,ct,dt,!1,null,"0973adb0",null),ft=pt.exports,gt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"my-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex row justify-content-center g-5"},[t._m(0),e("main",{staticClass:"row col-12 col-lg-9 g-5"},[e("div",{staticClass:"col-md"},[e(F.Z,[e(K.Z,{attrs:{"no-gutters":""}},[e(L.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e(N.Z,{staticClass:"p-5 my-5"},[e(I.EB,[t._v("Create new account")]),e(T.Z),e(M.Z,{ref:"registerForm",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}},model:{value:t.formValidity,callback:function(e){t.formValidity=e},expression:"formValidity"}},[e(H.Z,{attrs:{label:"Name",rules:t.nameRules,required:"","prepend-icon":"mdi-note"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(H.Z,{attrs:{label:"Email",rules:t.emailRules,type:"email",required:"","prepend-icon":"mdi-view-list"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(H.Z,{attrs:{label:"password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",rules:t.passwordRules,required:"",counter:"","prepend-icon":"mdi-note-plus"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(D.Z,{staticClass:"mt-3 me-3",attrs:{type:"submit",disabled:!t.formValidity}},[t._v("Register")]),e(D.Z,{staticClass:"mt-3 me-3",attrs:{color:"success"},on:{click:t.validateForm}},[t._v("Validate Form")]),e(D.Z,{staticClass:"mt-3 me-3 btn btn-validation mx-3",attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v("Reset Validation")]),e(D.Z,{staticClass:"mt-3 me-3 btn btn-reset",attrs:{color:"error"},on:{click:t.resetForm}},[t._v("Reset")]),e("ul",{staticClass:"errors"},t._l(t.errors,(function(s,a){return e("li",{key:a,staticClass:"error"},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"isRegister my-5"},[e("router-link",{attrs:{to:"/login"}},[t._v(" Already have an account? Login. ")])],1)],1)],1)],1)],1)],1)],1)])])])])},vt=[function(){var t=this,e=t._self._c;return e("aside",{staticClass:"d-none d-lg-block col-3"},[e("div",{staticClass:"rounded"},[e("h3",[e("img",{staticClass:"d-none d-xxl-block",attrs:{src:s(3355),alt:"logo"}})])])])}],ht={data(){return{name:"",email:"",password:"",errors:null,showPassword:!1,emailRules:[t=>0!==t.indexOf("@")||"Email should have a username.",t=>t.includes("@")||"Email should include an @ symbol.",t=>t.indexOf(".")-t.indexOf("@")>1||"Email should contain a valid domain.",t=>t.includes(".")||"Email should include a period symbol.",t=>t.indexOf(".")<=t.length-3||"Email should contain a valid domain extension."],nameRules:[t=>!!t||"Name is required"],passwordRules:[t=>!!t||"Password is required",t=>!!t&&t.length>5||"Minimum length is 6"],formValidity:!1}},methods:{register(){this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password}).then((()=>{this.$router.push({name:"home",params:{message:"Congratulations, you've just created your new account"}})})).catch((t=>{this.errors=t.response.data.errors}))},resetValidation(){this.$refs.registerForm.resetValidation()},resetForm(){this.$refs.registerForm.reset()},validateForm(){this.$refs.registerForm.validate()}}},Ct=ht,bt=(0,m.Z)(Ct,gt,vt,!1,null,null,null),yt=bt.exports,wt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"my-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex row justify-content-center g-5"},[t._m(0),e("main",{staticClass:"row col-12 col-lg-9 g-5"},[e("div",{staticClass:"col-md"},[e(F.Z,[e(K.Z,{attrs:{"no-gutters":""}},[e(L.Z,{staticClass:"mx-auto",attrs:{sm:"10"}},[e(N.Z,{staticClass:"p-5 my-5"},[e(I.EB,[t._v("Log in")]),e(T.Z),e(M.Z,{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e(H.Z,{attrs:{label:"Email",type:"email","prepend-icon":"mdi-view-list"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(H.Z,{attrs:{label:"password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password","prepend-icon":"mdi-note-plus"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(D.Z,{staticClass:"mt-3",attrs:{type:"submit"}},[t._v("Login")]),e("div",{staticClass:"errors"},[e("p",{staticClass:"error"},[t._v(t._s(t.error))])]),e("div",{staticClass:"isRegister my-5"},[e("router-link",{attrs:{to:"/register"}},[t._v(" Don't have an account? Register. ")])],1)],1)],1)],1)],1)],1)],1)])])])])},_t=[function(){var t=this,e=t._self._c;return e("aside",{staticClass:"d-none d-lg-block col-3"},[e("div",{staticClass:"rounded"},[e("h3",[e("img",{staticClass:"d-none d-xxl-block",attrs:{src:s(3355),alt:"logo"}})])])])}],At={data(){return{email:"",password:"",error:null,showPassword:!1}},methods:{login(){this.$store.dispatch("login",{email:this.email,password:this.password}).then((()=>{this.$router.push({name:"home",params:{message:"You are logged in!"}})})).catch((t=>{this.error=t.response.data.message}))}}},Zt=At,xt=(0,m.Z)(Zt,wt,_t,!1,null,null,null),kt=xt.exports;a.ZP.use(x.ZP);const Ft=[{path:"/",name:"home",component:B},{path:"/add-post",name:"add-post",component:X,meta:{requiresAuth:!0}},{path:"/post/:id",name:"post",component:ft},{path:"/edit-post/:id",name:"edit-post",component:rt},{path:"/register",name:"register",component:yt},{path:"/login",name:"login",component:kt},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,2775))}],Pt=new x.ZP({mode:"history",base:"/",routes:Ft});Pt.beforeEach(((t,e,s)=>{const a=localStorage.getItem("user");t.matched.some((t=>t.meta.requiresAuth))&&!a&&s("/"),s()}));var Vt=Pt,$t=s(3806);a.ZP.use($t.Z);var Rt=new $t.Z({});a.ZP.use(l.ZP);var St=new l.ZP.Store({state:{user:null},mutations:{SET_USER_DATA(t,e){t.user=e,localStorage.setItem("user",JSON.stringify(e)),R.Z.defaults.headers.common["Authorization"]=`Bearer ${e.token}`,console.log("state.user",t.user)},CLEAR_USER_DATA(){localStorage.removeItem("user"),location.reload()}},actions:{async register({commit:t},e){const s=await E.createUser(e);t("SET_USER_DATA",s)},async login({commit:t},e){const s=await E.loginUser(e);t("SET_USER_DATA",s)},logout({commit:t}){t("CLEAR_USER_DATA")}},getters:{loggedIn(t){return!!t.user}}});a.ZP.config.productionTip=!1,new a.ZP({router:Vt,store:St,created(){const t=localStorage.getItem("user");if(t){const e=JSON.parse(t);this.$store.commit("SET_USER_DATA",e)}R.Z.interceptors.response.use((t=>t),(t=>(console.log(t.response),401===t.response.status&&"add-post"===this.$route.name&&(this.$router.push({name:"home",params:{warning:"You are not authorized to perform this action!"}}),setTimeout((()=>{this.$store.dispatch("logout")}),5e3)),(403===t.response.status&&"post"===this.$route.name||"edit-post"===this.$route.name)&&this.$router.push({name:"home",params:{warning:"You do not have permission to perform this action!"}}),403===t.response.status&&"add-post"===this.$route.name&&this.$router.push({name:"home",params:{warning:"You do not have permission to create posts! Log in as admin!"}}),Promise.reject(t))))},vuetify:Rt,render:t=>t(Z)}).$mount("#app")},3355:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAAsCAMAAAATptcFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxIAAAsSAdLdfvwAAABOUExURUxpcRoaGBoaGBoaGBoaGBoaGBoaGBoaGBoaGBoaGBoaGBoaGOMAFeMAFRoaGBoaGOMAFeMAFeMAFeMAFeMAFeMAFeMAFeMAFRoaGOMAFTtGJO8AAAAYdFJOUwDjHfB3L9HBVECOC26gsJ7oSNMaDIy4KySJ8vEAAAOrSURBVGje3ZnplqsgDIBZArJY0VYd+/4vehHaCgh2mbnnDJNfjTQ1H5AFilAsQ99/ob8h8/X6B1gu56uX86Vmin6V613OY8UojqBt7yxz7SjT9FiXqV6WbXPdpK0WZUhRrkO1LO0fYplSlHrLy3jasdRZXsapH+aUpcryshb6/mvHMtdJsrKcU5bTf3wpYVKsIhl531jfrK2xjnbXDeG8C/18eWHNQ7pVl5tukvHgm0o8Xkqg40souAN2G+s2E4fYJDrSQjU4NKaNefz0LuADyaUxGfiw6mLTeTIeOyy8L112tPPu0O2Jo1sSXeCcMZWF8hiG/g+iLItj6QqD6hUUVjCmbiLORyi5LfY5Cl13V6CChNSbJygmWEYpgm0K2TofV5fxOyiCMSbVpsto1MS+iRdQAudt6DAavfl4UXLL8gaKD2Yeeht+24eH1oRYYkleQMEJ+ZrMnLGdpK8nJJni8i6KxgWUhfKm64wCIR4J+fVVWbA3BiF1ro88DUObrNP4DRQDAIZH3hQCl3bsFZRCzuCgk0zcD5nWcvi5sOcomdh9fnuCIkrGjY5DZdjuXQ6C5WMU6pyT9CihPqsrpVRuU1h4fuyzJ7Hpp1Bu5RoRhcvL8gwFiaa04tmWazxsxD5DwTJswASYruEcJxP7AopNIxKUWY1pXLPaQLaoyD/9oK4ATZMns02gZIz4PlBDUu+fxcrd2FmzMO7soAKiFAFlhRFl85vQ9hMo4ZVMO1lGaRIUGSjU7y+IS2RYKSBWZYJCYlKSZAGE1MLt6yyf6WxOW6hplLZT2CydVw5RFh07t0dBKh7crSGNUXgcOiR5F49JIZrVB8r6W8z1z8yjeGV/mtDxniA4aQljlKBAAkqcA02CxsU5F2QoTqIu2u2A4OucaYmjWVQLtmyELzav2K3NlUNRdpW8kjkYhQkRR2VC7lHCZXC7v1mOknHcDNClPE27ZGzPQcYogQCkVKC9IpQxQG5K5gBYSKZ+86coAblruhg9KpHFwoHJ4bAtkWg6HUvuPoyonDuNQFkUQuOZJSZjTc0910KuHcBKHw1zyF6AvXCOdDkVbG7HmFKKbVNoW0KynXcf4p+J7YHerLvVHK/GBgRD+6rjftuOZ4bVzTh+9eXdxvg330v2xdPXPF2ruqMcx9JJsr+g+m4op3fC5FfLV59FOVWIUrg/qvL/1aHvL224NPPQXuc6/129DNHly3pyrPc/PF9hTuM4VholUVZu5349/fbnU43/3v0D4Q8Wm6UR9mAAAAAASUVORK5CYII="}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,o){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],o=t[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(n=!1,o<r&&(r=o));if(n){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,i,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.d3fa795c.js"}}(),function(){s.miniCssF=function(t){return"css/about.c2b503b1.css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";s.l=function(a,i,o,r){if(t[a])t[a].push(i);else{var n,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+o){n=u;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.setAttribute("data-webpack",e+o),n.src=a),t[a]=[i];var m=function(e,s){n.onerror=n.onload=null,clearTimeout(p);var i=t[a];if(delete t[a],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((function(t){return t(s)})),e)return e(s)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),l&&document.head.appendChild(n)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,s,a,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(s){if(o.onerror=o.onload=null,"load"===s.type)a();else{var r=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=n,o.parentNode&&o.parentNode.removeChild(o),i(l)}};return o.onerror=o.onload=r,o.href=e,s?s.parentNode.insertBefore(o,s.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){i=r[a],o=i.getAttribute("data-href");if(o===t||o===e)return i}},a=function(a){return new Promise((function(i,o){var r=s.miniCssF(a),n=s.p+r;if(e(r,n))return i();t(a,n,null,i,o)}))},i={143:0};s.f.miniCss=function(t,e){var s={443:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};s.f.j=function(e,a){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(s,a){i=t[e]=[s,a]}));a.push(i[2]=o);var r=s.p+s.u(e),n=new Error,l=function(a){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;n.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",n.name="ChunkLoadError",n.type=o,n.request=r,i[1](n)}};s.l(r,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,r=a[0],n=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(l)var d=l(s)}for(e&&e(a);c<r.length;c++)o=r[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(d)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(3269)}));a=s.O(a)})();
//# sourceMappingURL=app.8ddd29b3.js.map