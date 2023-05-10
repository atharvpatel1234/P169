AFRAME.registerComponent("marker-handler",{
    init:function(){
        this.el.addEventListener("markerFound",()=>{
            this.handlemarkerfound()

        })
        this.el.addEventListener("markerLost",()=>{
            this.handlemarkerlost()
        })
    },
    handlemarkerfound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"

        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")

        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"rate dish",
                text:"work in progress"
            })
        })

        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for Order",
                text:"Your order will be served soon"
            })
        })
    },
    handlemarkerlost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"


    }
    

})
