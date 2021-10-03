
wishList = []

btnSubmit.onclick=function(){
  let anItem = inptItems.value
  wishList.push(anItem)
  lblWishList.value = wishList
}
