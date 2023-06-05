function changeSelect(selectIndex){
    if(selectIndex==0) {
        let item1 = document.getElementById("label_inner_shop")
        let item2 = document.getElementById("label_external_shop")
        item1.style.color = "#f53e2d"
        item2.style.color = "#fff"
    } else {
        let item1 = document.getElementById("label_inner_shop")
        let item2 = document.getElementById("label_external_shop")
        item1.style.color = "#fff"
        item2.style.color = "#f53e2d"
    }
}