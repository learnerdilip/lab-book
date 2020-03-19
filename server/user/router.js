const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");

const router = new Router();

router.post("/signup", (request, response, next) => {
  if (!request.body.email || !request.body.password) {
    return response.send({
      status: "error",
      error: "Missing email or password"
    });
  }
  const hashedPassword = bcrypt.hashSync(request.body.password, 10); //hash password using bcrypt
  const user = { ...request.body, password: hashedPassword };
  // console.log("---USER CREATION working! ", user);

  User.create(user)
    .then(user => {
      response.send(user);
    })
    .catch(e => {
      // console.log(JSON.stringify(e.errors[0].message, null, 2));
      response.send({
        error: true,
        message: "Something went wrong"
      });
    });
});

router.post("/login", async (request, response) => {
  const user = await User.findOne({ email: request.body.email });
  const passwordValid = bcrypt.compareSync(
    request.body.password,
    user.password
  );

  if (passwordValid) {
    const userNew = {
      id: user.id,
      email: user.email,
      name: user.name,
      token: toJWT({ id: user.id })
    };
    return response.send(userNew);
  } else {
    return response.send({ error: true, message: "incorrect password" });
  }
});

module.exports = router;
