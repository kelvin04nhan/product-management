// console.log("OKE IM HERE")
// xử lý button status
// thuộc tính tự định nghĩa dấu []
const buttonStatus = document.querySelectorAll("[button-status]")

if(buttonStatus.length > 0) {
    let url = URL(window.location.href);
    console.log(url)

    buttonStatus.forEach(button => {
        button.addEventListener("click", ()=> {
            const status = button.getAttribute("button-status");
            // console.log(status);
            if (status){
                url.searchParams.set("status",status)
            } else {
                url.searchParams.delete("status");
            }
            console.log(url.href);
            window.location.href = url.href;
            
        })
    })
}
// end button status
