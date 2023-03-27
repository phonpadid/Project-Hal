import{r as u,m as p,o as s,c as l,e,p as m,t as c,y as x,i as h,h as v,g as _}from"./index.19f23562.js";import{b as w}from"./BodyHelpers.3f8f51e2.js";const b={class:"base-form flex justify-center items-center"},g={class:"w-[800px] min-h-[500px] px-16 pt-4 flex flex-col"},y=e("i",{class:"far fa-long-arrow-left"},null,-1),D=e("span",{class:"ml-2"},"Career Detail",-1),M=[y,D],j={class:"w-[300px] flex items-center justify-center rounded-full overflow-hidden h-[300px] bg-gray-200"},H=["src"],B={class:"text-xl mt-4 font-bold"},G={class:"text-justify mt-4 text-base"},V=x('<div class="w-full flex flex-col min-h-[80px] mt-4"><h1 class="text-xl font-bold">Joined</h1><div class="w-full flex h-[40px] mt-4"><div class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200"><img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80" alt=""></div><div class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200"><img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80" alt=""></div><div class="w-[40px] mr-2 h-[40px] overflow-hidden rounded-full bg-gray-200"><img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80" alt=""></div></div></div>',1),A={__name:"CareerDetail",setup(C){const i=h(),r=v(),d=_(),t=u({});function n(){const o=r.params.career_id;d.dispatch("data-resources/listing",{actionUri:`variable/${o}`,options_request:w([{type:"career"}])}).then(a=>{a.code===200&&(t.value=a.data,console.log(t.value))}).catch(a=>{console.log(a)})}function f(){i.push({name:"activity.index"}).catch(()=>{})}return p(()=>{n()}),(o,a)=>(s(),l("div",b,[e("div",g,[e("div",{onClick:f,class:"w-full text-blue-600 mb-6 hover:cursor-pointer hover:text-blue-600 text-3xl"},M),e("div",j,[t.value.image_logo?(s(),l("img",{key:0,class:"w-full h-full object-cover",src:t.value.image_logo.url,alt:""},null,8,H)):m("",!0)]),e("h1",B,c(t.value.name),1),e("p",G,c(t.value.description),1),V])]))}};export{A as default};
