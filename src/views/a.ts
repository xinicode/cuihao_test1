import { Vue } from "vue-property-decorator"

import { get } from '../utils/axios';
// import testService from "./service/test.service";

export default class Home extends Vue {

  mounted() {
    this.loginCode();
  }


  test = "123"

  loginCode() {
    console.log("a")
  }

  bbb() {
    console.log("aaaaaa")
  }

  aaaa() { 
    get(
      "/gateway/json",
    ).then((rs) => {
      console.log(rs)
    })
  }

}
