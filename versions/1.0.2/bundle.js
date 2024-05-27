(()=>{"use strict";var e=[],t=0,l=!1,s=function(){for(var t=document.querySelector(".multiple-issues-upload__dropbox-input").files,l=document.querySelector(".multiple-issues-upload__dropbox"),s=0,a=Array.from(t);s<a.length;s++){var u=a[s];e.push(i(u))}l.classList.add("multiple-issues-upload__dropbox-disabled"),r()},a=function(t,l){var s=document.createElement("div");s.className="multiple-issues-upload__card",s.dataset.index=String(l);var a=document.createElement("div");a.className="multiple-issues-upload__card-thumbnail",a.setAttribute("data-hystmodal","#preview-modal");var i=document.createElement("img");return i.className="image-fit",i.src=URL.createObjectURL(t),a.append(i),s.append(a),s.append(function(t){var l=document.querySelector(".multiple-issues-upload").dataset.issuesCount,s=""+(t+1+Number(l));e[t].name&&(s=s+". "+e[t].name);var a=document.createElement("div");return a.className="multiple-issues-upload__card-title-segment",a.innerHTML="<a href=\"\" class=\"multiple-issues-upload__card-button multiple-issues-upload__card-button_type_move-left\"> <img class=\"image-fit\" src=\"data:image/svg+xml;utf8,<?xml version='1.0' encoding='iso-8859-1'?>\x3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\x3e<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg fill='%23000000' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' \\t width='800px' height='800px' viewBox='0 0 29.771 29.771'\\t xml:space='preserve'><g>\\t<path d='M29.771,14.886c0,1.657-1.344,3-3,3H11.486l4.506,4.505c1.172,1.172,1.172,3.071,0,4.243\\t\\tc-0.586,0.586-1.354,0.879-2.122,0.879s-1.534-0.293-2.12-0.878L0,14.885L11.745,3.138c1.173-1.172,3.071-1.171,4.243,0\\t\\tc1.172,1.172,1.172,3.071,0,4.243l-4.505,4.506h15.289C28.427,11.886,29.771,13.229,29.771,14.886z'/></g></svg>\" alt=\"Передвинуть влево\"> </a> <h3 class=\"multiple-issues-upload__card-title\"></h3> <a href=\"\" class=\"multiple-issues-upload__card-button multiple-issues-upload__card-button_type_move-right\"> <img class=\"image-fit\" src=\"data:image/svg+xml;utf8,<?xml version='1.0' encoding='iso-8859-1'?>\x3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\x3e<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg fill='%23000000' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' \\t width='800px' height='800px' viewBox='0 0 29.774 29.773'\\t xml:space='preserve'><g>\\t<path d='M29.774,14.889L18.026,26.636c-0.586,0.585-1.354,0.878-2.121,0.878c-0.766,0-1.535-0.293-2.121-0.879\\t\\tc-1.172-1.171-1.172-3.071,0-4.243l4.505-4.505H3c-1.656,0-3-1.343-3-3s1.344-3,3-3h15.286l-4.506-4.506\\t\\tc-1.172-1.171-1.172-3.071,0-4.242c1.172-1.172,3.071-1.172,4.243,0L29.774,14.889z'/></g></svg>\" alt=\"Передвинуть вправо\"> </a> <a href=\"\" data-hystmodal=\"#multipleIssuesModal\" class=\"multiple-issues-upload__card-button multiple-issues-upload__card-button_type_edit\"> <img class=\"image-fit\" src=\"data:image/svg+xml;utf8,<?xml version='1.0' encoding='iso-8859-1'?>\x3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\x3e<svg fill='%23000000' height='800px' width='800px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' \\t viewBox='0 0 456.645 456.645' xml:space='preserve'><g>\\t<g>\\t\\t<path d='M431.466,25.209c-33.61-33.61-88.01-33.615-121.625,0L32.192,302.859c-1.947,1.944-3.437,4.59-4.054,7.431L0.371,438.469\\t\\t\\tc-1.08,4.984,0.447,10.176,4.054,13.782c3.61,3.611,8.806,5.132,13.782,4.054l128.18-27.768c2.869-0.621,5.506-2.129,7.431-4.054\\t\\t\\tl277.649-277.649C464.998,113.302,464.998,58.742,431.466,25.209z M34.623,422.053l17.013-78.537l61.524,61.523L34.623,422.053z\\t\\t\\t M143.211,392.664l-79.199-79.199L307,70.477l79.199,79.2L143.211,392.664z M410.254,125.621l-2.842,2.842l-79.199-79.2\\t\\t\\tl2.842-2.842c21.864-21.864,57.31-21.887,79.199,0C432.088,68.257,432.088,103.786,410.254,125.621z'/>\\t</g></g></svg>\" alt=\"Изменить\"/> </a> <a href=\"\" class=\"multiple-issues-upload__card-button multiple-issues-upload__card-button_type_delete\"> <img class=\"image-fit\" src=\"data:image/svg+xml;utf8,<?xml version='1.0' encoding='iso-8859-1'?>\x3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\x3e<svg fill='%23000000' height='800px' width='800px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' \\t viewBox='0 0 455 455' xml:space='preserve'><g>\\t<g>\\t\\t<g>\\t\\t\\t<path d='M227.5,0C101.761,0,0,101.75,0,227.5C0,353.239,101.75,455,227.5,455C353.239,455,455,353.25,455,227.5\\t\\t\\t\\tC455.001,101.761,353.251,0,227.5,0z M227.5,425.001c-108.902,0-197.5-88.599-197.5-197.5S118.599,30,227.5,30\\t\\t\\t\\tS425,118.599,425,227.5S336.402,425.001,227.5,425.001z'/>\\t\\t\\t<path d='M321.366,133.635c-17.587-17.588-46.051-17.589-63.64,0L227.5,163.86l-30.226-30.225\\t\\t\\t\\tc-17.588-17.588-46.051-17.589-63.64,0c-17.544,17.545-17.544,46.094,0,63.64L163.86,227.5l-30.226,30.226\\t\\t\\t\\tc-17.544,17.545-17.544,46.094,0,63.64c17.585,17.586,46.052,17.589,63.64,0l30.226-30.225l30.226,30.225\\t\\t\\t\\tc17.585,17.586,46.052,17.589,63.64,0c17.544-17.545,17.544-46.094,0-63.64L291.141,227.5l30.226-30.226\\t\\t\\t\\tC338.911,179.729,338.911,151.181,321.366,133.635z M300.153,176.062l-40.832,40.832c-2.813,2.813-4.394,6.628-4.394,10.606\\t\\t\\t\\tc0,3.979,1.581,7.793,4.394,10.606l40.832,40.832c5.849,5.849,5.849,15.365,0,21.214c-5.862,5.862-15.351,5.863-21.214,0\\t\\t\\t\\tl-40.832-40.832c-2.929-2.929-6.768-4.394-10.606-4.394s-7.678,1.464-10.606,4.394l-40.832,40.832\\t\\t\\t\\tc-5.861,5.861-15.351,5.863-21.213,0c-5.849-5.849-5.849-15.365,0-21.214l40.832-40.832c2.813-2.813,4.394-6.628,4.394-10.606\\t\\t\\t\\tc0-3.978-1.581-7.793-4.394-10.606l-40.832-40.832c-5.849-5.849-5.849-15.365,0-21.214c5.864-5.863,15.35-5.863,21.214,0\\t\\t\\t\\tl40.832,40.832c5.857,5.858,15.355,5.858,21.213,0l40.832-40.832c5.863-5.862,15.35-5.863,21.213,0\\t\\t\\t\\tC306.001,160.697,306.001,170.213,300.153,176.062z'/>\\t\\t</g>\\t</g></g></svg>\" alt=\"Удалить\"> </a> ",a.querySelector(".multiple-issues-upload__card-title").innerText=s,a}(l)),s},i=function(e,t,l){return void 0===t&&(t=""),void 0===l&&(l=""),{file:e,name:t,description:l,status:!1,onload:"unload"}},u=function(t){t.preventDefault();var l=t.target.closest(".multiple-issues-upload__card"),s=Number(l.dataset.index);e.splice(s,1),r()},o=function(t,l){var s,a;t.preventDefault();var i=t.target.closest(".multiple-issues-upload__card"),u=Number(i.dataset.index);l?(s=[e[u+1],e[u]],e[u]=s[0],e[u+1]=s[1]):(a=[e[u-1],e[u]],e[u]=a[0],e[u-1]=a[1]),r()},d=function(e){var t=e.querySelector(".multiple-issues-upload__card-button_type_delete"),l=e.querySelector(".multiple-issues-upload__card-button_type_edit"),s=e.querySelector(".multiple-issues-upload__card-button_type_move-right"),a=e.querySelector(".multiple-issues-upload__card-button_type_move-left");e.querySelector(".multiple-issues-upload__card-thumbnail").addEventListener("click",v),t.addEventListener("click",u),l.addEventListener("click",m),s.addEventListener("click",(function(e){e.preventDefault(),o(e,1)})),a.addEventListener("click",(function(e){e.preventDefault(),o(e,0)}))},r=function(){document.querySelector(".multiple-issues-upload__field").classList.remove("multiple-issues-upload__field_disabled");var t=document.querySelector(".multiple-issues-upload__list");t.innerHTML="";for(var s=0,i=0,u=e;i<u.length;i++){var o=u[i],r=a(o.file,s);"loading"===o.onload?r.classList.add("multiple-issues-upload__card_onload_loading"):"error"===o.onload?r.classList.add("multiple-issues-upload__card_onload_error"):"success"===o.onload&&r.classList.add("multiple-issues-upload__card_onload_successful"),e[s].card=r,t.append(r),d(r),s++}l&&document.querySelectorAll(".multiple-issues-upload__card-button_type_move-right, .multiple-issues-upload__card-button_type_move-left").forEach((function(e){e.classList.add("multiple-issues-upload__card-button_type_move-block")}))},n=function(){for(var t=document.querySelector(".multiple-issues-upload__add-button").files,l=0,s=Array.from(t);l<s.length;l++){var a=s[l];e.push(i(a))}r()},c=function(){var l=document.querySelector(".edit-modal__namespace"),s=document.querySelector(".edit-modal__description"),a=t;e[a].name=l.value,e[a].description=s.value,r()},p=function(t){return s=void 0,a=void 0,u=function(){var s,a,i,u,o,d,r,n,c,p,m,_,v,b,f,g;return function(e,t){var l,s,a,i,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(d){return function(o){if(l)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(u=0)),u;)try{if(l=1,s&&(a=2&o[0]?s.return:o[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,o[1])).done)return a;switch(s=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,s=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!((a=(a=u.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],s=0}finally{l=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,d])}}}(this,(function(h){switch(h.label){case 0:l=!0,document.querySelector(".multiple-issues-upload__error").textContent="",document.querySelectorAll(".multiple-issues-upload__card-button_type_move-right, .multiple-issues-upload__card-button_type_move-left").forEach((function(e){e.classList.add("multiple-issues-upload__card-button_type_move-block")})),document.querySelectorAll(".multiple-issues-upload__card-button").forEach((function(e){e.classList.add("multiple-issues-upload__card-button-block")})),document.querySelectorAll(".multiple-issues-upload__card-thumbnail").forEach((function(e){e.classList.add("multiple-issues-upload__card-thumbnail-block")})),document.querySelector(".multiple-issues-upload__top-buttons").classList.add("multiple-issues-upload__top-buttons-block"),document.querySelector(".multiple-issues-upload__submit-button").disabled=!0,(s=document.querySelector(".multiple-issues-upload__lds-roller_disabled")).classList.add("multiple-issues-upload__lds-roller"),a=!0,i=0,u=e,h.label=1;case 1:return i<u.length?(o=u[i]).status?[3,3]:(o.card.classList.add("multiple-issues-upload__card_onload_loading"),o.onload="loading",(d=document.createElement("form")).setAttribute("method","post"),d.setAttribute("action","/action/manageAddIssue"),d.enctype="multipart/form-data",(r=document.createElement("input")).type="text",r.name="serialId",r.value=String(t),(n=document.createElement("input")).type="text",n.name="name",n.value=o.name,(c=document.createElement("input")).type="text",c.name="description",c.value=o.description,(p=document.createElement("input")).type="file",p.name="image",(m=new DataTransfer).items.add(o.file),p.files=m.files,p.setAttribute("data-limit","2097152"),(_=document.createElement("button")).type="submit",(v=document.createElement("input")).type="hidden",v.name="submit",v.value="add",(b=document.createElement("input")).type="hidden",b.name="publish",b.value=document.querySelector(".multiple-issues-upload__publication-input:checked").value,(f=document.createElement("input")).type="hidden",f.name="numberOrder",f.value="checked",d.append(r),d.append(n),d.append(c),d.append(p),d.append(_),d.append(v),d.append(b),d.append(f),[4,window.acomicsLegacyClient.sendFormAndParseHtml(d)]):[3,4];case 2:if(g=h.sent(),!function(e,t){if(e.status)return!0;if(e.card.classList.remove("multiple-issues-upload__card_onload_loading"),e.card.classList.remove("multiple-issues-upload__card_onload_error"),e.card.classList.remove("multiple-issues-upload__card_onload_successful"),t.querySelector("#error")){var l=t.querySelector("#error p");return e.card.classList.add("multiple-issues-upload__card_onload_error"),document.querySelector(".multiple-issues-upload__error").textContent=l.textContent,e.onload="error",!1}return e.card.classList.add("multiple-issues-upload__card_onload_successful"),e.status=!0,e.onload="success",!0}(o,g))return a=!1,[3,4];h.label=3;case 3:return i++,[3,1];case 4:return s.classList.remove("multiple-issues-upload__lds-roller"),a?location.href=document.querySelector(".multiple-issues-upload").dataset.successRedirectUrl:(y=document.querySelectorAll(".multiple-issues-upload__card-button"),w=document.querySelector(".multiple-issues-upload__submit-button"),x=document.querySelector(".multiple-issues-upload__top-buttons"),document.querySelectorAll(".multiple-issues-upload__card-thumbnail").forEach((function(e){e.classList.remove("multiple-issues-upload__card-thumbnail-block")})),w.disabled=!1,w.textContent="Повторить попытку",y.forEach((function(e){e.classList.remove("multiple-issues-upload__card-button-block")})),x.classList.remove("multiple-issues-upload__top-buttons-block")),[2]}var y,w,x}))},new((i=void 0)||(i=Promise))((function(e,t){function l(e){try{d(u.next(e))}catch(e){t(e)}}function o(e){try{d(u.throw(e))}catch(e){t(e)}}function d(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(l,o)}d((u=u.apply(s,a||[])).next())}));var s,a,i,u},m=function(l){l.preventDefault();var s=l.target.closest(".multiple-issues-upload__card"),a=Number(s.dataset.index),i=document.querySelector(".edit-modal__img"),u=document.querySelector(".edit-modal__namespace"),o=document.querySelector(".edit-modal__description");i.src=URL.createObjectURL(e[a].file),u.value=e[a].name,o.value=e[a].description,t=a},_=function(){var t=document.querySelector(".preview-modal__container");t.innerHTML="";for(var l=0,s=e;l<s.length;l++){var a=s[l],i=document.createElement("img");i.src=URL.createObjectURL(a.file),i.alt="Предпросмотр",i.className="preview-modal__image",t.append(i)}},v=function(t){t.preventDefault();var l=t.target.closest(".multiple-issues-upload__card"),s=Number(l.dataset.index),a=document.querySelector(".preview-modal__container");a.innerHTML="";var i=document.createElement("img");i.src=URL.createObjectURL(e[s].file),i.alt="Предпросмотр",i.className="preview-modal__image",a.append(i)};new HystModal({linkAttributeName:"data-hystmodal"}),function(){var e,t,l=document.querySelector(".multiple-issues-upload");e=l,(t=document.createElement("section")).className="multiple-issues-upload__container",t.innerHTML='<div class="multiple-issues-upload__dropbox"> <label class="multiple-issues-upload__dropbox-label">Перетащите страницы вашего комикса сюда</label> <input type="file" class="multiple-issues-upload__dropbox-input" data-limit="2097152" accept="image/png, image/jpeg" multiple="multiple" name="files"> </div> <div class="multiple-issues-upload__field multiple-issues-upload__field_disabled"> <div class="multiple-issues-upload__button multiple-issues-upload__top-buttons"> <input type="file" name="inner_files" data-limit="2097152" accept="image/png, image/jpeg" class="multiple-issues-upload__add-button" multiple="multiple"> <label>Перетащите страницы вашего комикса сюда</label> </div> <div class="multiple-issues-upload__list"> </div> <label class="multiple-issues-upload__section-label">Режим публикации</label> <div class="multiple-issues-upload__publication"> <input name="publication" type="radio" value="instant" class="multiple-issues-upload__publication-input" id="multiple-issues-upload__publish-immediately" checked="checked"> <label for="multiple-issues-upload__publish-immediately" class="multiple-issues-upload__publication-label">Сразу</label> <input name="publication" type="radio" value="auto" class="multiple-issues-upload__publication-input" id="multiple-issues-upload__publish-auto"> <label for="multiple-issues-upload__publish-auto" class="multiple-issues-upload__publication-label">Автопубликация</label> </div> <div class="multiple-issues-upload__bottom-buttons"> <div class="multiple-issues-upload__lds-roller_disabled"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div> <button class="multiple-issues-upload__button multiple-issues-upload__submit-button">Опубликовать</button> <button data-hystmodal="#preview-modal" class="multiple-issues-upload__button multiple-issues-upload__preview-button">Предпросмотр</button> </div> <div class="multiple-issues-upload__error"></div> </div> <div class="hystmodal" id="multipleIssuesModal" aria-hidden="true"> <div class="hystmodal__wrap"> <div class="hystmodal__window" role="dialog" aria-modal="true"> <div class="edit-modal"> <div class="edit-modal__img-container"> <img src="data:," alt="Примеры" class="edit-modal__img"> </div> <div class="edit-modal__text"> <div class="edit-modal__name-field"> <h3 class="edit-modal__name">Редактирование выпуска</h3> <button data-hystclose class="edit-modal__close"></button> </div> <hr> <label for="edit-modal__namespace" class="edit-modal__label">Название выпуска:</label> <textarea name="description" id="edit-modal__namespace" class="edit-modal__namespace edit-modal__textarea" cols="0" rows="0"></textarea> <label for="edit-modal__description" class="edit-modal__label">Описание:</label> <textarea name="description" id="edit-modal__description" class="edit-modal__description edit-modal__textarea" cols="0" rows="0"></textarea> <button data-hystclose class="edit-modal__button">Сохранить</button> </div> </div> </div> </div> </div> <div class="hystmodal" id="preview-modal" aria-hidden="true"> <div class="hystmodal__wrap"> <div class="hystmodal__window preview-modal" role="dialog" aria-modal="true"> <div class="preview-modal__container"> </div> </div> </div> </div> ',e.append(t);var a=document.querySelector(".multiple-issues-upload__dropbox-input"),i=document.querySelector(".multiple-issues-upload__add-button"),u=document.querySelector(".edit-modal__button"),o=document.querySelector(".multiple-issues-upload__preview-button"),d=document.querySelector(".multiple-issues-upload__submit-button");a.addEventListener("change",s),i.addEventListener("change",n),u.addEventListener("click",c),o.addEventListener("click",_),d.addEventListener("click",(function(){return p(Number(l.dataset.comicId))}))}()})();