const { json } = require("body-parser");
const express = require("express");

const app = express();

const fetch = require("node-fetch");

app.get("/", function (req, res) {
  console.log("fetch data in home page");
  res.send("home page");
});

//login route
app.get("/login", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });

  console.log("Response ", response);
  const newResponse = response.requests;
  const login = newResponse.filter((e) => e.name == "User/login")
  
  const userData = login.map((e) => {
    const user = e.data;
    const userResponse = user.filter((e) => {
      if (e.key == "username" && e.value == "1412") {
        res.json({ message: "login successfull", key: e.key, value: e.value });
      } else {
        res.json({ message: "error in logging" });
      }
    });
    return userResponse;
  });

  res.json(userResponse);
});

//user logout
app.post("/logout", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "POST",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const logout = newResponse.filter((e) => e.name == "User Logout");
  res.json(logout);
});

//get state
app.get("/getstate", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const getState = newResponse.filter((e) => e.name == "Get State List");
  res.json(getState);
});

//post state

app.post("/poststate", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "POST",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const postState = newResponse.filter((e) => e.name == "Create State");
  res.json(postState);
});

//get District
app.get("/getdistrict", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const getDistrict = newResponse.filter((e) => e.name == "Get District List");
  res.json(getDistrict);
});

//post district

app.post("/postdistrict", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "POST",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const postdistrict = newResponse.filter((e) => e.name == "Create District");
  res.json(postdistrict);
});

//get Child

app.get("/getchild", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const getChild = newResponse.filter(
    (e) => e.name == "Get Child Profile List"
  );
  res.json(getChild);
});

//post child

app.post("/postchild", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "POST",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const postchild = newResponse.filter((e) => e.name == "Create Child Profile");
  res.json(postchild);
});

app.post("/logout", async (req, res) => {
  console.log("user login page");
  const url = "https://www.getpostman.com/collections/66c45e6146e3d7cbe41b";
  const options = {
    method: "POST",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: "oh no response",
      });
    });
  console.log("Response ", response);
  const newResponse = response.requests;
  const logout = newResponse.filter((e) => e.name == "User Logout");
  res.json(logout);
});

app.listen(3000, function () {
  console.log("the server os running at port 3000");
});
