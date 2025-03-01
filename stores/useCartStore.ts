import axios from 'axios';

export const useCartStore = defineStore("cart", () => {
    const cartItems = ref<any[]>([])
    const cart:any = ref()
    const total:any = ref(0)
    const userStore = useUserStore();
    const delivery = ref(0)

    const totalSum = computed(() => {
        return cartItems.value.reduce((t, item:any) => {
            return t + item.price * item.count;
        }, 0);
    });

    const get = async () => {
        const {data} = await axios.get(`/api/v1/public/cart/user-profiles/${userStore.profile.id}`)
        cart.value = data
        cartItems.value = data.items
        total.value = data.items.length
    }

    const getDelivery = async () => {
        try {
            const {data} = await axios.get("/api/v1/public/company/delivery")
            console.log(data)
            delivery.value = data.value
        }catch(e) {
            console.log(e)
        }
    }

    const hasItem = (product: any) => {
        return cartItems.value.some((cartItem:any) => cartItem.productId === product.id);
    }

    const incrementCart = async (product: any) => {
        console.log(product)
        const pr = cartItems.value.find(p => p.id === product.id);
        if (product.count >= product.productCount){
            return;
        }

        product.count++;

        try {
            const model = {
                "productId": product.productId,
                "cartId": cart.value.id,
                "count": product.count,
            }

            const {data} = await axios.post(`/api/v1/public/cartitem/`, model);
            console.log(data)
            await get()

            if (pr) {
                pr.value.count = product.count;   // cartItems.value = data
            } else{
                cartItems.value.push(product)
            }
        }catch(err){
            console.log(err)
        }
    }

    const decrementCart = async(product: any) => {
        console.log(product)
        const pr = cartItems.value.find(p => {
            return p.id === product.id
        } );
        console.log(pr)
        product.count--;

        if (product.count == 0){
            try {
                await axios.delete(`/api/v1/public/cartitem/${pr.id}`);
                cartItems.value = cartItems.value.filter(p => p.productId !== product.id);
                await get()
            }catch(err){
                console.log(err)
            }
            return;
        }

        if (pr) {
            const model = {
                "productId": product.productId,
                "cartId": product.cartId,
                "count": product.count,
            }
            await axios.post(`/api/v1/public/cartitem/`, model);
        }
    }

    const increment = async (product: any) => {



        const pr = cartItems.value.find(p => p.id === product.id);
        if (product.count >= product.productCount) {
            return;
        }

        product.count++;

        try {
            const model = {
                "productId": product.id,
                "cartId": cart.value.id,
                "count": product.count,
            }

            const {data} = await axios.post(`/api/v1/public/cartitem/`, model);
            await get()

            if (pr) {
                pr.value.count = product.count;   // cartItems.value = data
            } else{
                cartItems.value.push(product)
            }
        }catch(err){
            console.log(err)
        }
    }

    const decrement = async (product: any) => {
        if (product.count < 0){
            console.warn("dasasdasdas")
            return;
        }

        const pr = cartItems.value.find(p => {
            return p.productId === product.id
        } );
        product.count--;

        if (product.count == 0){
            try {
                await axios.delete(`/api/v1/public/cartitem/${pr.id}`);
                cartItems.value = cartItems.value.filter(p => p.productId !== product.id);
                await get()
            }catch(err){
                console.log(err)
            }
            return;
        }

        if (pr) {
            const model = {
                "productId": pr.productId,
                "cartId": cart.value.id,
                "count": product.count,
            }
            console.log(model)
            const {data} = await axios.post(`/api/v1/public/cartitem/`, model);
            await get()
        }
    }

    const deleteCart = async (productId: number) => {
        console.log(productId)
        const product = cartItems.value.find(p => p.id == productId);
        console.log(product)
        if (product) {
            try {
                await axios.delete(`/api/v1/public/cartitem/${productId}`);
                cartItems.value = cartItems.value.filter(p =>{
                    console.log(p)
                    return p.id !== productId;
                })
                await get();
            } catch (error) {
                console.error('Ошибка при удалении товара:', error);
            }
            return;
        } else {
            console.log('Товар не найден в корзине');
        }

        console.log(productId)
        if (product) {
            await axios.delete(`/api/v1/public/cartitem/${productId}`);
            cartItems.value = cartItems.value.filter(p => p.id === productId);
        }
    }

    return {
        cart,
        cartItems,
        total,
        totalSum,
        delivery,
        hasItem,
        increment,
        incrementCart,
        decrement,
        decrementCart,
        deleteCart,
        get,
        getDelivery
    }
})