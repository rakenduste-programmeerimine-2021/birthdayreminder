const jwt = require("jsonwebtoken")

const jwtAuth = (req, res, next) => {
  try {
    if (!req.headers["authorization"]) throw Error("Access denied");

    // Authorization: Bearer token. Split will give us the token
    const accesToken = req.headers.authorization.split(" ")[1]

    const decoded = jwt.verify(accesToken, process.env.JWT_SECRET)
    req.user = decoded

    // This console.log can be seen in the Docker backend container's log
    // console.log(req.user)

    next()

  } catch (e) {
    return res.status(401).send({ error: e.message })
  }
}

module.exports = jwtAuth