// javascript for navigation
const showMenuHandler = () => {
        let menuBar = document.getElementById('menu-bar');
        let hamBurger = document.getElementById('ham-burger');
        let cancel = document.getElementById('cancel');
  
        menuBar.classList.add('block');
        menuBar.classList.remove('hidden');
        hamBurger.classList.add('hidden');
        cancel.classList.add('block');
        cancel.classList.remove('hidden');
}
const hideMenuHandler = () => {
        let menuBar = document.getElementById('menu-bar');
        let hamBurger = document.getElementById('ham-burger');
        let cancel = document.getElementById('cancel');
      
        menuBar.classList.add('hidden');
        menuBar.classList.remove('block');
        hamBurger.classList.add('block');
        hamBurger.classList.remove('hidden');
        cancel.classList.add('hidden');
        cancel.classList.remove('block');
}
// end

function hideTable(pens) {
    console.log(pens)
    var comptable = document.getElementById('complete');
    var pentable = document.getElementById('pen');
    var listp = document.getElementById('activePen');
    var listc = document.getElementById('activeCom');
    if (pens == "p") {
        pentable.classList.remove('hidden');
        comptable.classList.add('hidden');
        listp.classList.add('text-[#FFB53B]');
        listp.classList.remove('text-[#616161]');
        listp.classList.add('border-b-[#FFB53B]');
        listp.classList.add('border-b-[3px]');
        listp.classList.add('pb-[14px]');
        listp.classList.add('font-bold');
        listc.classList.remove('text-[#FFB53B]');
        listc.classList.add('text-[#616161]');
        listc.classList.remove('border-b-[#FFB53B]');
        listc.classList.remove('border-b-[3px]');
        listc.classList.remove('pb-[14px]');
        listc.classList.remove('font-bold');
    } else if (pens == "c") {
        comptable.classList.remove('hidden');
        pentable.classList.add('hidden');
        listc.classList.add('text-[#FFB53B]');
        listc.classList.remove('text-[#616161]');
        listc.classList.add('border-b-[#FFB53B]');
        listc.classList.add('border-b-[3px]');
        listc.classList.add('pb-[14px]');
        listc.classList.add('font-bold');
        listp.classList.remove('text-[#FFB53B]');
        listp.classList.add('text-[#616161]');
        listp.classList.remove('border-b-[#FFB53B]');
        listp.classList.remove('border-b-[3px]');
        listp.classList.remove('pb-[14px]');
        listp.classList.remove('font-bold');
    } else {
        console.log('not a click p and c')
    }
}
function showMore(show) {
    var showcomptable = document.getElementById('showComplete');
    // console.log(showcomptable);
    var showpentable = document.getElementById('showPending');
    //    console.log(showpentable);
    if (show == "showComplete") {
        showcomptable.classList.remove("max-h-[640px]");
    } else if (show == "showPending") {
        showpentable.classList.remove("max-h-[640px]");
    } else {
        console.log("--")
    }
}
