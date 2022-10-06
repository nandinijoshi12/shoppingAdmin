<template>
  <div>
    <div class="h-screen bg-white shadow-xl p-4">
      <div class="font-semibold">Dashboard</div>
      <div class="min-h-screen w-full bg-slate-200 p-3">
        <!-- end of nav -->
        <div class="h-auto flex flex-row justify-around space-x-4 py-5">
          <div class="h-full w-full flex flex-col items-center space-y-5">
            <div class="h-56 w-56 p-12 bg-gray-300 rounded-full">
              <button class="px-6 py-2 bg-red-200" @click="increament()">{{countlocal}}</button>
            </div>
            <div class="h-96 w-full bg-gray-300 rounded-lg">2</div>
          </div>
          <div class="w-full">
            <div class="h-full w-full flex flex-col items-center space-y-5">
            <div class="h-56 w-full p-12 bg-gray-300 rounded-lg">
              the number is {{countlocal}}
            </div>
            <div class="h-96 w-full bg-gray-300 rounded-lg">4</div>
          </div>
          </div>
          <div class="w-full"><div class="h-full w-full p-12 bg-gray-300 rounded-lg">
            <div>5</div>
          </div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      isLoading: false,
      ghe_data:null,
      countlocal: 0,
    };
  },
  created(){
        // this.countlocal=this.$store.state.count
        // console.log(this.$store);
        this.countlocal=this.$store.getters['MALA_DATA_DE']
      },
  methods:{
    // getapi(){
    //   this.$axios.post(`${process.env.BASE_URL}/allproducts`, {data:formData})
    //   .then((response)=>{
    //     this.ghe_data=response;
    //     console.log(response);
    //   })
    //   .catch((error)=>{
    //     console.log(error);
    //   })
    // },
    increament(){
      this.$store.commit('CHANGE_COUNT', ++this.countlocal)

    }
  }
};
</script>

<style></style>
