(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2cynK",total:"Cart_total__3_UY0",actions:"Cart_actions__1MVnK","button--alt":"Cart_button--alt__3Mmjv",button:"Cart_button__1vGic"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__hpF8K",summary:"CartItem_summary__H2nEe",price:"CartItem_price__PGW5d",amount:"CartItem_amount__1tstV",actions:"CartItem_actions__16ND6"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3F3Gb",icon:"HeaderCartButton_icon__2WU8B",badge:"HeaderCartButton_badge__kpSYC",bump:"HeaderCartButton_bump__15xxG"}},,,function(e,t,n){e.exports={meal:"MealsItems_meal__1SyYa",description:"MealsItems_description__22ElT",price:"MealsItems_price__3chNj"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2S32S",modal:"Modal_modal__3SPe7","slide-down":"Modal_slide-down__2gmHE"}},function(e,t,n){e.exports={header:"Header_header__3u7Lv","main-image":"Header_main-image__1xjUJ"}},,,,function(e,t,n){e.exports={card:"Card_card__OGorq"}},function(e,t,n){e.exports={meals:"MealList_meals__3Bf6E","meals-appear":"MealList_meals-appear__2FI29"}},function(e,t,n){e.exports={form:"MealItemForm_form__PSOob"}},function(e,t,n){e.exports={input:"MealItemInput_input__3Qwnl"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__38VtD"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(2),s=n(4),o=n.n(s),l=n(11),m=n.n(l),u=n(1),d=n.n(u),j=n(8),b=n.n(j),O=n(0);function x(e){return Object(O.jsx)("div",{className:m.a.backdrop,onClick:e.onClick})}function p(e){return Object(O.jsx)("div",{className:m.a.modal,children:Object(O.jsx)("div",{children:e.children})})}var h=document.getElementById("overlays");var _=function(e){return Object(O.jsxs)(u.Fragment,{children:[b.a.createPortal(Object(O.jsx)(x,{onClick:e.onClick}),h),b.a.createPortal(Object(O.jsx)(p,{children:e.children}),h)]})},f=d.a.createContext((function(){return{items:[],totalamount:0,AddToCart:function(e){},removecart:function(e){}}})),v=n(5),C=n.n(v),g=function(e){var t="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:C.a["cart-item"],children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("div",{className:C.a.summary,children:[Object(O.jsx)("span",{className:C.a.price,children:t}),Object(O.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(O.jsxs)("div",{className:C.a.actions,children:[Object(O.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(O.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})};var N=function(e){var t=Object(u.useContext)(f),n="$".concat(t.totalamount.toFixed(2)),a=t.items.length>0;function c(e){t.RemoveItem(e)}function i(e){t.AddItem(Object(r.a)(Object(r.a)({},e),{},{amount:1}))}var s=Object(O.jsx)("ul",{className:o.a["cart-items"],children:t.items.map((function(e){return Object(O.jsx)(g,{name:e.name,price:e.price,amount:e.amoun,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.is)}))});return Object(O.jsxs)(_,{onClick:e.onClick,children:[s,Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:o.a.total,children:[Object(O.jsx)("span",{children:"Total Amount"}),Object(O.jsx)("span",{children:n})]}),Object(O.jsxs)("div",{className:o.a.actions,children:[Object(O.jsx)("button",{className:o.a["button--alt"],onClick:e.onClick,children:"Cancel"}),a&&Object(O.jsx)("button",{className:o.a.button,children:"Order"})]})]})]})},y=n(12),k=n.n(y),I=n.p+"static/media/meals.2971f633.jpg",A=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},M=n(7),w=n.n(M);var F=function(e){var t=Object(u.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(u.useContext)(f),s=r.items.reduce((function(e,t){return e+t.amount}),0),o="".concat(w.a.button," ").concat(a?w.a.bump:""),l=r.items;return Object(u.useEffect)((function(){if(1!==r.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[l]),Object(O.jsxs)("button",{className:o,onClick:e.onClick,children:[Object(O.jsx)("span",{className:w.a.icon,children:Object(O.jsx)(A,{})}),Object(O.jsx)("span",{children:"Your Cart"}),Object(O.jsx)("span",{className:w.a.badge,children:s})]})};var H=function(e){return Object(O.jsxs)(u.Fragment,{children:[Object(O.jsxs)("header",{className:k.a.header,children:[Object(O.jsx)("h1",{children:"ReactMeals"}),Object(O.jsx)(F,{onClick:e.onClick})]}),Object(O.jsx)("div",{className:k.a["main-image"],children:Object(O.jsx)("img",{src:I,alt:"A Full Of Delicious Food"})})]})},B=n(16),D=n.n(B);var S=function(e){return Object(O.jsx)("div",{className:D.a.card,children:e.children})},E=n(17),R=n.n(E),T=n(18),G=n.n(T),P=n(19),V=n.n(P),Y=d.a.forwardRef((function(e,t){return Object(O.jsxs)("div",{className:V.a.input,children:[Object(O.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(O.jsx)("input",Object(r.a)({ref:t},e.input))]})}));var z=function(e){var t=Object(u.useRef)();return Object(O.jsxs)("form",{className:G.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5||e.OnAddToCart(c)},children:[Object(O.jsx)(Y,{label:"Amount",ref:t,input:{id:"amount_"+e.itemid,type:"number",defaultValue:1,step:1,min:1,max:5}}),Object(O.jsx)("button",{children:" +ADD"})]})},J=n(10),K=n.n(J);var L=function(e){var t=Object(u.useContext)(f);return Object(O.jsxs)("li",{className:K.a.meal,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("div",{className:K.a.description,children:e.description}),Object(O.jsx)("div",{className:K.a.price,children:e.price})]}),Object(O.jsx)("div",{children:Object(O.jsx)(z,{itemid:e.id,OnAddToCart:function(n){t.AddItem({name:e.name,price:e.price,amount:n,id:e.id}),console.log(n)}})})]})},U=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}];var q=function(){var e=U.map((function(e){return Object(O.jsx)(L,{name:e.name,description:e.description,price:e.price,id:e.id},e.id)}));return Object(O.jsx)("section",{className:R.a.meals,children:Object(O.jsx)(S,{children:Object(O.jsx)("ul",{children:e})})})},W=n(20),$=n.n(W);var Q=function(){return Object(O.jsxs)("section",{className:$.a.summary,children:[Object(O.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(O.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(O.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})};var X=function(){return Object(O.jsxs)(u.Fragment,{children:[Object(O.jsx)(Q,{}),Object(O.jsx)(q,{})]})},Z=n(13),ee={items:[],totalamount:0};function te(e,t){if("ADD"===t.type){var n,a=e.totalamount+t.item.amount*t.item.price,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var s=Object(r.a)(Object(r.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Z.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalamount:a}}if(t.type="REMOVE"){var o,l=e.items.findIndex((function(e){return e.id===t.id})),m=e.items[l],u=e.totalamount-m.price;if(1===m.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(r.a)(Object(r.a)({},m),{},{amount:m.amount-1});(o=Object(Z.a)(e.items))[l]=d}return{items:o,totalamount:u}}return ee}var ne=function(e){var t=Object(u.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],r={items:a.items,totalamount:a.totalamount,AddItem:function(e){c({type:"ADD",item:e})},RemoveItem:function(e){c({type:"REMOVE",id:e})}};return Object(O.jsx)(f.Provider,{value:r,children:e.children})};var ae=function(){var e=Object(u.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)(ne,{children:[n&&Object(O.jsx)(N,{onClick:function(){a(!1)}}),Object(O.jsx)(H,{onClick:function(){a(!0)}}),Object(O.jsx)("main",{children:Object(O.jsx)(X,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.4659add5.chunk.js.map