import{a as S,S as q,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const $="52395117-1f258a4bcd9b4df3bb42e7d0e",B="https://pixabay.com/api/";async function d(o,s){const i={key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return(await S.get(B,{params:i})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more"),E=new q(".gallery a");function y(o){const s=o.map(({webformatURL:i,largeImageURL:t,tags:e,likes:r,views:a,comments:v,downloads:w})=>`
      
      <li class="gallery-item">
        <a href="${t}">
          <img src="${i}" alt="${e}" loading="lazy" />
        </a>
      
      
        <div class="info">
          <ul class="info-list">
            <li class="info-item">
              <h4 class="title-info-item">Likes</h4>
              <p class="info-item-value">${r}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Views</h4>
              <p class="info-item-value">${a}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Comments</h4>
              <p class="info-item-value">${v}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Downloads</h4>
              <p class="info-item-value">${w}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",s),E.refresh()}function I(){f.innerHTML=""}function p(){h.classList.add("visible")}function L(){h.classList.remove("visible")}function b(){g.classList.add("visible")}function u(){g.classList.remove("visible")}const M=document.getElementById("search-form"),P=document.querySelector(".load-more");let l=1,c="",m=0;u();M.addEventListener("submit",async o=>{o.preventDefault();const i=o.currentTarget.elements.searchText.value.trim();if(i===""){n.error({title:"Error",message:"Search query cannot be empty!"});return}c=i,l=1,I(),u(),p();try{const t=await d(c,l);m=t.totalHits,t.hits.length===0?n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again."}):(y(t.hits),t.hits.length<m&&b())}catch(t){n.error({title:"Error",message:`Something went wrong: ${t.message}`})}finally{L()}});P.addEventListener("click",async()=>{l+=1,p(),u();try{const o=await d(c,l);y(o.hits);const s=document.querySelector(".gallery-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}(l-1)*15+o.hits.length>=m?n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}):b()}catch(o){n.error({title:"Error",message:`Something went wrong: ${o.message}`})}finally{L()}});
//# sourceMappingURL=index.js.map
