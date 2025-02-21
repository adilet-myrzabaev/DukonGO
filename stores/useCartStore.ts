import axios from 'axios';
export const useCartStore = defineStore("cart", () => {
    const cartItems = ref([])
    const cart = ref()
    const total = ref(0)
    const userStore = useUserStore();

    const totalSum = computed(() => {
        const total = cartItems.value.reduce((t, item) => {
            console.log(t, item); // Логируем цену каждого товара
            return t + item.price * item.count; // Суммируем общую стоимость
        }, 0); // Начальное значение аккумулятора — 0

        console.log(total); // Логируем общую сумму
        return total;
    });

    const get = async () => {
        const {data} = await axios.get(`https://manage.dukongo.kg/api/v1/public/cart/user-profiles/${userStore.profile.id}`)
        cart.value = data
        cartItems.value = data.items
        total.value = data.items.length
    }

    const hasItem = (product: any) => {
        return cartItems.value.some(cartItem => cartItem.productId === product.id);
    }

    const increment = async (product: any) => {
        console.log(cart.value)
        const pr = cartItems.value.find(p => p.id === product.id);
        console.log(product)
        if (product.count >= product.productCount){
            return;
        }

        product.count = product.count + 1;
        console.log(product)

        try {
            const model = {
                "productId": product.id,
                "cartId": cart.value.id,
                "count": product.count,
            }

            const {data} = await axios.post(`https://manage.dukongo.kg/api/v1/public/cartitem/`, model);

            if (pr) {
                console.log(data)
                pr.value.count = product.count;   // cartItems.value = data
            } else{
                cartItems.value.push(product)
            }
        }catch(err){
            console.log(err)
        }



    }

    const decrement = async (product: any) => {
        console.log(product)
        console.log(cartItems.value)
        const pr = cartItems.value.find(p => p.id === product.id);
        console.log(pr)
        pr.count = pr.count - 1;
        if (pr.count == 0){
            try {
                const response = await axios.delete(`https://manage.dukongo.kg/api/v1/public/cartitem/${pr.id}`);
                console.log(response)
                cartItems.value = cartItems.value.filter(p => p.productId !== product.id);
            }catch(err){
                console.log(err)
            }
            return;
        }

        if (pr) {
            console.log(product)
            const model = {
                "productId": product.productId,
                "cartId": product.cartId,
                "count": product.count,
            }
            console.log(model)
            const {data} = await axios.post(`https://manage.dukongo.kg/api/v1/public/cartitem/`, model);
            console.log(data)
            // cartItems.value = data
        }
    }

    const deleteCart = async (productId: number) => {
        console.log(productId)
        const product = cartItems.value.find(p => p.id == productId);
        console.log(product)
        if (product) {
            try {
                await axios.delete(`https://manage.dukongo.kg/api/v1/public/cartitem/${productId}`);
                cartItems.value = cartItems.value.filter(p =>{
                    console.log(p)
                    return p.id !== productId;
                })
            } catch (error) {
                console.error('Ошибка при удалении товара:', error);
            }
            return;
        } else {
            console.log('Товар не найден в корзине');
        }

        console.log(productId)
        if (product) {
            await axios.delete(`https://manage.dukongo.kg/api/v1/public/cartitem/${productId}`);
            cartItems.value = cartItems.value.filter(p => p.id === productId);
        }
    }

    return {
        cart,
        cartItems,
        total,
        totalSum,
        hasItem,
        increment,
        decrement,
        deleteCart,
        get
    }
})