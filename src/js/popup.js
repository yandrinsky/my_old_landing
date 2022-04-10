class Popup{
    constructor() {
        this.popup = document.querySelector(".popup");
        this.popupWrapper = document.querySelector(".popupWrapper");
        this.frame = document.querySelector("#popup__iframe")
        this.popupCloseBtn = document.querySelector("#popup__close");
        this.src = "";
    }
    close(){
        this.popupWrapper.classList.add("hidden");
    }
    open(){
        this.popupWrapper.classList.remove("hidden");
    }
    toggle(){
        this.popupWrapper.classList.toggle("hidden");
    }
    setSrc(src){
        this.src = src;
        this.frame.src =   this.src;
    }
    start(){
        popupCloseBtn.onclick = e => {
            popup.classList.add("hidden");
        }
    }
}
