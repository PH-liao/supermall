import{
    ADD_COUNTER,
    ADD_TO_CART
}from "./mutation-types"

export default{
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
            //state.cartList.push(payload)
        let oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)

        if(oldProduct){
            //oldProduct.count += 1
            context.commit(ADD_COUNTER,payload),
            resolve('当前的商品数量加1')
        }else{
             payload.count = 1;
            context.commit(ADD_TO_CART,payload)
            resolve('添加新的商品')

        }
      })

    }

}