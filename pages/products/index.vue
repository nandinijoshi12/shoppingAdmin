<template>
  <div>
    <div class="min-h-screen w-full bg-white p-4 shadow-xl">
      <div class="flex flex-row justify-between font-semibold">
        <button class="px-6 py-2 bg-red-200" @click="countlocal++">
          {{ countlocal }}
        </button>
        <p>Products</p>
        <!-- <NuxtLink to="/products/add"> -->
        <button
          @click="showModal = true"
          class="
            mr-2
            mb-2
            rounded-lg
            border-2 border-gray-200
            px-5
            py-2
            text-xs
            font-semibold
            text-gray-400
            hover:cursor-pointer hover:bg-gray-200 hover:text-gray-400
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
        <!-- </NuxtLink> -->
      </div>
      <div v-if="isLoading">getting data...</div>
      <div v-else class="grid w-full grid-cols-4 gap-10">
        <span v-for="(item, index) in items" :key="index">
          <!-- <NuxtLink :to="`/products/${item.prod_id}/view`"> -->
            <div
              class="
                hover:shadow-3xl
                group
                mt-4
                flex
                h-96
                w-72
                flex-col
                space-y-2
                overflow-hidden
                rounded-xl
                bg-white
                text-gray-700
                shadow-lg
              "
            >
              <div class="relative z-20 h-1/2 w-full">
                <img
                  src="https://imgs.search.brave.com/eqGcBtIBQhNfZfLlvLsgKAdmzAaTY-5fugG09w_A1iY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZG92ZS5jb20vY29u/dGVudC9kYW0vdW5p/bGV2ZXIvZG92ZS91/bml0ZWRfc3RhdGVz/X29mX2FtZXJpY2Ev/cGFja19zaG90L2Zy/b250L2hhaXJfY2Fy/ZS93YXNoX2FuZF9j/YXJlL2RvdmVfaW50/ZW5zaXZlX3JlcGFp/cl9zaGFtcG9vXzEy/X296L0RvdmVfSW50/ZW5zaXZlX1JlcGFp/cl9TaGFtcG9vXzEy/X296XzEwMDQ1ODkz/MDgwNTM4LTM5Nzk3/Ni5QTkc"
                  alt=""
                  class="
                    h-full
                    w-full
                    rounded-xl
                    object-cover
                    transition-all
                    duration-100
                    ease-in
                    group-hover:scale-110
                  "
                />
                <div
                  @click.prevent="Remove(item.prod_id)"
                  class="
                    absolute
                    top-2
                    right-3
                    h-6
                    w-6
                    rounded-full
                    bg-red-400
                    hover:bg-red-700
                  "
                ></div>
              </div>
              <div
                class="
                  flex
                  h-1/2
                  w-full
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-xl
                "
              >
                <div class="text-center text-xl font-semibold text-gray-700">
                  {{ item.name }} {{ item.category.slice(0, 6) }}...
                </div>
                <div class="text-xxs font-normal text-gray-700">
                  {{ item.description }}
                </div>
                <div
                  class="
                    mt-1
                    flex
                    w-1/2
                    flex-row
                    justify-between
                    text-base
                    font-normal
                    text-gray-700
                  "
                >
                  <p class="flex flex-row">
                    <span
                      ><svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 76 76"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        baseProfile="full"
                        enable-background="new 0 0 76.00 76.00"
                        xml:space="preserve"
                      >
                        <path
                          fill="#000000"
                          fill-opacity="0.203922"
                          stroke-width="0.2"
                          stroke-linejoin="round"
                          d="M 31.6667,22.1667L 24.5417,22.1667L 28.5,17.4167L 33.25,17.4167L 31.6667,22.1667 Z "
                        />
                        <path
                          fill="#000000"
                          fill-opacity="1"
                          stroke-width="0.2"
                          stroke-linejoin="round"
                          d="M 23.75,30.0833L 28.5,25.3333L 36.6668,25.3333C 35.2467,23.4239 32.8281,22.1667 30.0833,22.1667L 23.75,22.1667L 28.5,17.4167L 53.8333,17.4167L 49.0833,22.1667L 42.3467,22.1667C 43.0138,23.123 43.5339,24.1895 43.8744,25.3333L 53.8333,25.3333L 49.0833,30.0833L 44.2211,30.0833C 43.4528,35.4545 38.8336,39.5833 33.25,39.5833L 32.3176,39.5447L 45.9167,58.5833L 39.5833,58.5833L 25.3333,38.6334L 25.3333,36.4167L 26.9166,36.4167L 30.0833,36.4167C 34.1583,36.4167 37.5141,33.6458 37.9517,30.0833L 23.75,30.0833 Z "
                        /></svg></span
                    >{{ item.price }}
                  </p>
                  <p>{{ item.quantity }}ml</p>
                </div>
                <div class="flex w-3/4 flex-row">
                  <div
                    class="
                      mt-2
                      flex
                      h-6
                      w-20
                      items-center
                      justify-center
                      rounded
                      bg-blue-100
                      p-2
                      text-xs
                    "
                    @click="isOpen = !isOpen"
                  >
                    <p>Size</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mt-1 ml-2 h-3 w-3 text-black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div
                    class="mt-1 flex h-6 w-1/2 flex-row space-x-2 p-2 text-xs"
                  >
                    <div
                      class="flex items-center border bg-yellow-100 px-2 py-2"
                    >
                      XL
                    </div>
                    <div
                      class="flex items-center border bg-yellow-100 px-2 py-2"
                    >
                      XXL
                    </div>
                    <div
                      class="flex items-center border bg-yellow-100 px-2 py-2"
                    >
                      M
                    </div>
                  </div>
                </div>
                <div class="mt-2 flex w-3/4 flex-row justify-between space-x-2">
                  <div
                    class="rounded-sm bg-green-500 py-1 px-6 text-xs text-white"
                  >
                    Buy Now
                  </div>
                  <div class="rounded-sm border py-1 px-6 text-xs">
                    Add to cart
                  </div>
                </div>
                <div class="mt-1 flex w-3/4 flex-row justify-between space-x-2">
                  <div @click="editAction(item)"
                    class="rounded-sm bg-gray-500 py-1 px-6 text-xs text-white cursor-pointer"
                  >
                    Edit
                  </div>
                  <div @click="Remove(item.prod_id)" class="rounded-sm border py-1 px-6 text-xs cursor-pointer">
                    Delete
                  </div>
                </div>
                <div class="mt-1 flex w-3/4 items-end justify-end text-xs">
                  {{ item.ua }}
                </div>
              </div>
            </div>
          <!-- </NuxtLink> -->
        </span>
      </div>
      <Modal v-if="showModal" @close="showModal = false">
        <template v-slot:title> Add New product </template>
        <template v-slot:body>
         <div>
          <AddProductForm @closKarModal="showModal = false"></AddProductForm> 
         </div> 
        </template>
      </Modal>
      <!-- edit modal -->
      <Modal v-if="showEditModal" @close="showEditModal = false" @click="editAction(item)">
        <template v-slot:title> Edit product </template>
        <template v-slot:body>
         <div>
          <EditProductForm :selectedProduct="selectedProduct" @closKarModal="showEditModal = false"></EditProductForm> 
         </div> 
        </template>
      </Modal>
    </div>
  </div>
</template>
  
<script>
import AddProductForm from "../../components/Forms/Products/Add.vue";
import EditProductForm from "../../components/Forms/Products/Edit.vue";
export default {
  layout: "default",
  data() {
    return {
      show: false,
      showEditModal: false,
      selectedProduct: null,
      showModal: false,
      isLoading: false,
      ghe_products: null,
      countlocal: 0,
      items: [],
    };
  },
  components: {
    AddProductForm,
    EditProductForm
  },
  created() {
    this.isLoading = true;
    this.$store
      .dispatch("products/getAll")
      .then((response) => {
        this.isLoading = false;
        // this.ghe_products=this.$store.state.products.allProducts;
        this.items = this.$store.state.products.allProducts;
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error);
      });
  },
  methods: {
    editAction(product){
      console.log('ok',product);
      this.selectedProduct = product;
      console.log('ok2',this.selectedProduct);
      this.showEditModal= true;
    },
    showForm() {
      console.log("show form madhe aahat");
    },
    Remove(id) {
      console.log("Has entered into remove function!", id);
      //get Index of the item
      this.$store.dispatch('products/delete', id)
      .then((response)=>{
        console.log("then executed");
      })
      .catch((error)=>{
        console.log("error aala aahe");
      })
    },
  },
};
</script>
  
<style></style>
  