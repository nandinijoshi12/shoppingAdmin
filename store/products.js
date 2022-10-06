export const strict = false
export const state = () => ({
    allProducts:[]
});

export const mutations = {
    SET_PRODUCTS(state, data){
        state.allProducts=data.data
    },
    ADD_PRODUCT(state, data){
        state.allProducts.unshift(data)
    },
    EDIT_PRODUCT(state, data){
        console.log('ok1',data);
        console.log('ok1',state.allProducts);
        var index =state.allProducts.findIndex(item => item.prod_id == data.data[0].prod_id); 
        Object.assign(state.allProducts[index], data.data[0]);
        console.log(index);
        // state.first.second[action.someId].fourth = action.someValue  
    },
    REMOVE_PRODUCT(state, data){
        console.log("mutateee", data);
        
        var index =state.allProducts.findIndex(item => item.prod_id == data.data.prod_id);
        console.log(index);
        state.allProducts.splice(index, 1);
    }
}

export const getters = {
    
}

export const actions = {
    getAll(context, data){
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.get(`${process.env.BASE_URL}admin/products/allprod`,  
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                context.commit("SET_PRODUCTS", response);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })       
    },
    add(context, formMadhunAalelaData){
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.post(`${process.env.BASE_URL}admin/products/add`, 
            formMadhunAalelaData, 
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                context.commit("ADD_PRODUCT", response.data.data[0]);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })       
    },
    updateProd(context, alelaNavaData){
        console.log('Ala ');
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.put(`${process.env.BASE_URL}admin/products/edit?prod_id=${alelaNavaData.prod_id}`,  
            alelaNavaData.formChaPurnaData,
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                context.commit("EDIT_PRODUCT", response.data);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })    
    },
    delete(context, ithlaId){
        console.log('Ala id');
        var token = JSON.parse(localStorage.getItem("shToken"));
        return new Promise((resolve, reject) =>{
            // axios
            this.$axios.post(`${process.env.BASE_URL}admin/products/remove`,
            {prod_id:ithlaId}, 
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response =>{
                console.log(response.data);
                context.commit("REMOVE_PRODUCT", response.data);
                resolve(response);
            })
            .catch(err =>{
                reject(err);
            })
        })    
    },
}