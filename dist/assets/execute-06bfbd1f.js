import{S as e}from"./sweetalert2.all-a524a2ae.js";function c(){async function n(t){return await e.fire({width:"250px",text:t??"Apa Anda Yakin?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3b82f6",cancelButtonColor:"#d33",confirmButtonText:"Yakin",cancelButtonText:"Tidak",customClass:{title:"text-lg",popup:"text-sm text-center"}})}async function a(t){await e.fire({width:"250px",icon:"success",text:t??"Data Telah Disimpan!",showConfirmButton:!1,timer:1500,customClass:{title:"text-lg",popup:"text-sm text-center"}})}async function i(t=null){await e.fire({icon:"error",title:"Terjadi Kesalahan.",text:t??"Segera hubungi administrator anda",width:"250px",customClass:{title:"text-lg",popup:"text-sm text-center"}})}async function o(t=null){await e.fire({icon:"error",text:t??"Terjadi Kesalahan, Hubungi Administrator Anda",width:"250px",customClass:{title:"text-lg",popup:"text-sm text-center"}})}return{confirm:n,accepted:a,rejected:i,rejectedSaldo:o}}export{c as u};
