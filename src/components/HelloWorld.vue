<template>
  <div class="hello">
    <div><label>name</label> <input v-model="user.name" type="text" /></div>

    <div><label>email</label> <input v-model="user.email" type="text" /></div>

    <button @click="submit">submit</button>
<p>
      <button @click="fetchData">loaddata</button>


  <ul>
    <li v-for="u in users">{{u.name}}</li>
    </ul>
  </p>

  </div>
</template>
/* https://vuehttp-3366a-default-rtdb.firebaseio.com/ */
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        email: "",
        name: "",
      },
      users: [],
    };
  },

  methods: {
    submit() {
      this.$http.post("", this.user).then(
        (res) => console.log("res", res),
        (error) => console.log("error", error)
      );
      console.log(this.user);
    },

    async fetchData() {
      let res = await this.$http.get("");

      let data = await res.json();

      let arr = [];

      this.users = data;
      console.log("getdata", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
