(()=>{"use strict";var e={779:(e,t,n)=>{n.r(t)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=["second","minute","hour","day","week","month","year"],t=["秒","分钟","小时","天","周","个月","年"],o={},r=function(e,t){o[e]=t},a=[60,60,24,7,365/7/12,12];function d(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}r("en_US",(function(t,n){if(0===n)return["just now","right now"];var o=e[Math.floor(n/2)];return t>1&&(o+="s"),[t+" "+o+" ago","in "+t+" "+o]})),r("zh_CN",(function(e,n){if(0===n)return["刚刚","片刻后"];var o=t[~~(n/2)];return[e+" "+o+"前",e+" "+o+"后"]}));const s=new class{constructor(){this.URI="http://localhost:3000/api/books"}async getBooks(){return(await fetch(this.URI)).json()}async postBook(e){const t=await fetch(this.URI,{method:"POST",body:e});return await t.json()}async deleteBook(e){return(await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"})).json()}},c=class{constructor(){}async renderBooks(){const e=await s.getBooks(),t=document.getElementById("books-cards");t.innerHTML="",e.forEach((e=>{const n=document.createElement("div");var r,s,c,i;n.innerHTML=`\n            <div class="card m-2">\n                <div class="row me-pd">\n                    <div class="col-md-4">\n                        <img src="http://localhost:3000${e.image_path}" alt="" class="img-fluid"/>\n                    </div>\n                    <div class="col-md-8">\n                        <div class="card-block px-2">\n                            <h4 class="card-title">${e.title}</h4>\n                            <p class="card-text">${e.author}</p>\n                            <a class="btn btn-danger delete" _id="${e._id}">Delete</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="card-footer">\n                    ${r=e.create_at,i=function(e,t){return(+(t?d(t):new Date)-+d(e))/1e3}(r,c&&c.relativeDate),function(e,t){for(var n=e<0?1:0,o=e=Math.abs(e),r=0;e>=a[r]&&r<a.length;r++)e/=a[r];return(e=Math.floor(e))>(0==(r*=2)?9:1)&&(r+=1),t(e,r,o)[n].replace("%s",e.toString())}(i,function(e){return o[e]||o.en_US}(s))}\n                </div>\n            </div>\n            `,t.appendChild(n)}))}async addANewBook(e){await s.postBook(e),this.clearBookForm(),this.renderBooks()}clearBookForm(){document.getElementById("book-form").reset()}renderMessage(e,t,n){const o=document.createElement("div");o.className=`alert alert-${t} message`,o.appendChild(document.createTextNode(e));const r=document.querySelector(".col-md-4"),a=document.querySelector("#book-form");r.insertBefore(o,a),setTimeout((()=>{document.querySelector(".message").remove()}),n)}async deleteBook(e){await s.deleteBook(e),this.renderBooks()}};n(779),document.addEventListener("DOMContentLoaded",(()=>{(new c).renderBooks()})),document.getElementById("book-form").addEventListener("submit",(function(e){const t=document.getElementById("title").value,n=document.getElementById("author").value,o=document.getElementById("isbn").value,r=document.getElementById("image").files,a=new FormData;a.append("title",t),a.append("author",n),a.append("isbn",o),a.append("image",r[0]),(new c).addANewBook(a),(new c).renderMessage("New Book Added","success",2e3),e.preventDefault()})),document.getElementById("books-cards").addEventListener("click",(function(e){e.target.classList.contains("delete")&&((new c).deleteBook(e.target.getAttribute("_id")),(new c).renderMessage("Book Removed","danger",2e3)),e.preventDefault()}))})()})();
//# sourceMappingURL=bundle.js.map