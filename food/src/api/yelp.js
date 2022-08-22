import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer hveCeaaJnNz4n6TFyDpwXgGV2pgspMBUTpZQ-S2j5770WlMnK87MWCYNXCnyDLWyuWluFyYzXSQYyb1qQoTnaNhWvEe_UrwrvqqKq0Op4njkA8JzbdRzaWMwZWEDY3Yx",
  },
});
