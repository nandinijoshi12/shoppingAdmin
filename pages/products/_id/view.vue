<template>
  <div>
    ok
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    var token = JSON.parse(localStorage.getItem("shToken"));
    this.$axios.get(
      `/${process.env.BASE_URL}/admin/products/${this.$route.params.id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )    
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{

    });
  },
};
</script>

<style>
</style>