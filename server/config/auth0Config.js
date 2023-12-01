import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "dev-d3g607yop0b5788m.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
