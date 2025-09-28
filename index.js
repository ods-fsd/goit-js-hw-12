import{a as m,S as d,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function h(i){const s="52395117-1f258a4bcd9b4df3bb42e7d0e",o="https://pixabay.com/api/",r={key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(o,{params:r})).data}catch(e){throw console.error("Error fetching images:",e),new Error("Failed to fetch images")}}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){const s=i.map(({webformatURL:o,largeImageURL:r,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
      
      
        <div class="info">
          <ul class="info-list">
            <li class="info-item">
              <h4 class="title-info-item">Likes</h4>
              <p class="info-item-value">${t}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Views</h4>
              <p class="info-item-value">${a}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Comments</h4>
              <p class="info-item-value">${u}</p>
            </li>
            <li class="info-item">
              <h4 class="title-info-item">Downloads</h4>
              <p class="info-item-value">${f}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),p.refresh()}function g(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async i=>{i.preventDefault();const o=i.currentTarget.elements["search-text"].value.trim();if(o===""){n.warning({title:"Caution",message:"Please enter a search query to find images."});return}g(),L();try{const r=await h(o);r.hits.length===0?n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(r.hits)}catch{n.error({title:"Error",message:"Something went wrong with the request. Please try again later."})}finally{w(),i.target.reset()}});
//# sourceMappingURL=index.js.map
