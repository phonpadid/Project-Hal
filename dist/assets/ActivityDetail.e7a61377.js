import{r as h,m as x,o,c as l,e as t,p as c,t as i,i as _,h as m,g as p}from"./index.19f23562.js";import{b as v}from"./BodyHelpers.3f8f51e2.js";const g={class:"base-form flex justify-center items-center"},w={class:"w-[800px] min-h-[500px] px-16 pt-4 flex flex-col"},b=t("i",{class:"far fa-long-arrow-left"},null,-1),y=t("span",{class:"ml-2"},"Activity Detail",-1),D=[b,y],j={class:"w-full h-[300px] bg-gray-200"},M=["src"],B={class:"text-xl mt-4 font-bold"},H=t("div",{class:"w-[100px] flex items-center justify-center mt-1 h-[20px] base-color-theme"},[t("p",{class:"m-0 p-0 text-xs text-white"}," 01-Jan-2021 ")],-1),k={class:"text-sm mt-4"},A={class:"w-full flex flex-col min-h-[80px] mt-4"},G=t("h1",{class:"text-xl font-bold"},"Joined",-1),V={class:"w-full flex h-[40px] mt-4"},q={class:"w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200"},C=["src"],E=t("div",{class:"w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200"},[t("img",{class:"w-full h-full object-cover",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",alt:""})],-1),J=t("div",{class:"w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200"},[t("img",{class:"w-full h-full object-cover",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",alt:""})],-1),W={__name:"ActivityDetail",setup(N){const n=_(),r=m(),d=p(),e=h({});function u(){const a=r.params.activity_id;d.dispatch("data-resources/listing",{actionUri:`variable/${a}`,options_request:v([{type:"activity"}])}).then(s=>{s.code===200&&(e.value=s.data)}).catch(s=>{console.log(s)})}function f(){n.push({name:"activity.index"}).catch(()=>{})}return x(()=>{u()}),(a,s)=>(o(),l("div",g,[t("div",w,[t("div",{onClick:f,class:"w-full text-blue-600 mb-6 hover:cursor-pointer hover:text-blue-600 text-3xl"},D),t("div",j,[e.value.image_logo?(o(),l("img",{key:0,class:"w-full h-full object-cover",src:e.value.image_logo.url,alt:""},null,8,M)):c("",!0)]),t("h1",B,i(e.value.name),1),H,t("p",k,i(e.value.description),1),t("div",A,[G,t("div",V,[t("div",q,[e.value.image_logo?(o(),l("img",{key:0,class:"w-full h-full object-cover",src:e.value.image_logo.url,alt:""},null,8,C)):c("",!0)]),E,J])])])]))}};export{W as default};
