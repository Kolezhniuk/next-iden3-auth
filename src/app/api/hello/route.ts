import { auth, resolver, protocol } from "@iden3/js-iden3-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await t();
  return NextResponse.json(res);
}

async function t() {
  const tokenStr =
    "eyJhbGciOiJncm90aDE2IiwiY2lyY3VpdElkIjoiYXV0aFYyIiwiY3JpdCI6WyJjaXJjdWl0SWQiXSwidHlwIjoiYXBwbGljYXRpb24vaWRlbjMtemtwLWpzb24ifQ.eyJpZCI6IjNmMjc0YzI3LTRhM2EtNDA1Zi04YzExLTgzYzg4NmU2OTcyZCIsInR5cCI6ImFwcGxpY2F0aW9uL2lkZW4zLXprcC1qc29uIiwidHlwZSI6Imh0dHBzOi8vaWRlbjMtY29tbXVuaWNhdGlvbi5pby9hdXRob3JpemF0aW9uLzEuMC9yZXNwb25zZSIsInRoaWQiOiJhOGQzZjIwZi1hNmMyLTQyZTQtYTdiNC1hZTMzYjU1MjZjYWIiLCJib2R5Ijp7Im1lc3NhZ2UiOiIiLCJzY29wZSI6W3siaWQiOjExMTU1MTExLCJjaXJjdWl0SWQiOiJjcmVkZW50aWFsQXRvbWljUXVlcnlTaWdWMiIsInByb29mIjp7InBpX2EiOlsiNzI5ODQ5Njc4NDk5OTc0NTg2NjY4MTkwNTM4ODc2NDczMzUwMjE4OTc2MzYwMjgwNjMyOTgzNjYyODk0ODc4NzE3MTQ2MTI0MTg3IiwiNDA0Mzg1NjY4OTA0OTQ2MDc3MzA3MTA0ODg4MzgzMDYyOTUxMjA1ODgyNjE5Nzg3NTcyNDc3OTk2NTA4MzM0MjQzODMwNjM5NjMxNSIsIjEiXSwicGlfYiI6W1siODM0ODAzODE4MzY1NzQyMjk1NjA3NTYzNTY4ODkyOTkzMTM4OTE4MDcwMjU0NzY3ODg0NDMzNzM3OTU4MDIzMTQ0Njc0NzAzNTMyNSIsIjkyODgzMDQwMzk1NDY5MzIwNTQ4ODI4NTE4OTE2OTIxNzA2NzMyMzgwODg3MjQ3MTA2NTcxMzI1MjgyNDc4NTgwMjg4ODY4NjE3NTQiXSxbIjkzOTQ1NTMwMzI0OTMxNzMzNzI0NzM0MjcyOTU1NzkwOTM2MzU0MzU0NTE5MTU0MzUwMjk3NTk4MTExMzU0Mjc2ODcxMzY3NjY4OCIsIjE2OTkzMDcwMDkyMDA0MzI1MDQzMDQ2ODg1NDAxODc3NDE0MDg3MzA5NDkyMjE5OTU2NjA3MTk4NjYwNzE4NTk1MzQ3NjIyMDkxNTMxIl0sWyIxIiwiMCJdXSwicGlfYyI6WyI0NjQ4NDM0NTA1MjIwODQ4ODg2NzA1NzYyNzUyMTI3MDE3NTk2NjA2NDA2MTU5Njg4NTIyNTg2NzEyNDQxNzgyNDczNzg0NDk4MTMwIiwiMTc2MzQ2Njk0MzUwNTk3MTQ0MDI0MTU2MjAwMDQyNjUzNTM2MjkwNjM2OTQzODQ4NTkwNTM1OTY3ODQ3OTA0NjM2ODk5ODYyNDQyODkiLCIxIl0sInByb3RvY29sIjoiZ3JvdGgxNiIsImN1cnZlIjoiYm4xMjgifSwicHViX3NpZ25hbHMiOlsiMSIsIjIyNTIxNjUzNTYxNjIwMjIzOTgyODkwMDY1MTE4NzM3MzAzMjUzMDE0MzE0MzExOTk1ODQ3NzM1MTUwNDg0Njg4Mjg5NzY3NjgxIiwiMjAwNDYyNjQwNzgxNDA4MzI1MDA3NjA0Mjg0NjgxNzE0NDYxMDkxNTM0ODg4MjYyOTg5NjE0Mzc3MTc3NzI0MzI0MDc1ODkzMjU2ODQiLCIxMTE1NTExMSIsIjIyNTQyMjk4NDE5MDY3NDMyNTg3NDk3NDQ4NzcwMjE1NjgyODkzNjg2ODI2NDMyMTU3MDYyMzU4NTE2ODIzNDc5MDcyODkxMTM3IiwiMSIsIjIwMDQ2MjY0MDc4MTQwODMyNTAwNzYwNDI4NDY4MTcxNDQ2MTA5MTUzNDg4ODI2Mjk4OTYxNDM3NzE3NzcyNDMyNDA3NTg5MzI1Njg0IiwiMTc0NjcxNTkxNiIsIjIxMDUyNzU2MDczMTY5MTMzMzE0NjQwODk4ODA1ODM4NDU3NDg1MCIsIjAiLCIxMzc1MTEwNjg0MzczOTk3MTQ4MjY1NzU3MTYwNzQ5NzkwNjc5NTA2NjU2Mjc2MzI0Mzc5NTMxMzQxMTU1NjE5NDE4ODA4Mjk5MzU3MCIsIjAiLCIxIiwiMTg1ODYxMzM3Njg1MTIyMjA5MzY2MjA1NzA3NDU5MTI5NDA2MTk2Nzc4NTQyNjkyNzQ2ODk0NzU1ODU1MDY2NzU4ODExOTg4NzkwMjciLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiXX1dfSwiZnJvbSI6ImRpZDppZGVuMzpwcml2YWRvOm1haW46MlNhajQ3TWVkdGF5cmc0ZXlnS3A1S0JtQlRhaEZRQXczNTNWeUF6WFFmIiwidG8iOiJkaWQ6cG9seWdvbmlkOnBvbHlnb246YW1veToycVE2OEprUmNmM3hySFBRUFdaZWkzWWVWekhQUDU4d1lOeHgybUVvdVIifQ.eyJwcm9vZiI6eyJwaV9hIjpbIjk5Nzk0NjYwNDg0Mjg4MDA2ODY5NTk0NDk3NzE2NjQ1OTg2NDM2NTA1NzY0OTEyNDM4ODgxNjUxNTE3Nzc0MjA4NDY1Nzg2Nzc0MzAiLCIxMzM4NzMzODkzMTc1NjE1OTQ3MjY4OTY0NzcxNTc4NjczODU0MzU3NTU0ODMzMzUwMjc3MzkxNjQ1MTM2MjEyNzEzMjk5MDY1MzkzNyIsIjEiXSwicGlfYiI6W1siNjc4MTQyNDYwNzUxNTA2MzM5ODgyODU3NDcyNzI4NzI4NzU0MzQ3NDc5NDc2OTAyOTQ4MTM3ODAwMjMzNzI3ODY1NzA4NjQyMjM4MyIsIjIwNTM5NDk1MTA1MjUwODI3OTc0MjkxMTI5MDI1MTY4OTcxODM2MzI1MDkwNzY0MTExNTk5OTIzNzgzMDk1MDY3OTgwNjM1OTkzMDI1Il0sWyIxOTAwOTkxNjYwNDE1NjM0MzQ2NjY2OTE1MDA4MDg1NjgxNTUyMDMzNjU2MDE2Mjk4NTUwNzk5MTYwMDA4Nzc1NDA2Mjg5MzY0MjA3NyIsIjkyMjIyNDQ2ODYwMTQyMTk1MDc5MTg3ODYyMDE2OTYwNTY1MjQ0NDIzNTkyMjI4OTM0MTQyMjY4MDA0ODM5NDc5ODc1Njk5ODc3MzAiXSxbIjEiLCIwIl1dLCJwaV9jIjpbIjEzOTA0NDQ5NjA3NjYyNDgwMzM5MTA2NzQ0NjcxNzA0NTQ0MDI5MjE0MjAxMDY3NDU5MzY5MDk4NTU2MTIwMjQxNTczNDQ4MTA1MzQyIiwiMTc3ODI5MjA1OTc5ODk0NzU5MDY1MjcyNDkxOTY3NTUyOTY5MjYwNDQ3MDAxNzI1OTE5MDkyODM3OTc4Nzg5ODUxMzE0NzkyNTUyMTYiLCIxIl0sInByb3RvY29sIjoiZ3JvdGgxNiIsImN1cnZlIjoiYm4xMjgifSwicHViX3NpZ25hbHMiOlsiMjI1MjE2NTM1NjE2MjAyMjM5ODI4OTAwNjUxMTg3MzczMDMyNTMwMTQzMTQzMTE5OTU4NDc3MzUxNTA0ODQ2ODgyODk3Njc2ODEiLCIyMTAzNTI1MTEyNjMzNjM0ODk4MjMzMDQxNjk4MDA2MDkzMDAzMjE5Mzk2MzAzMTIyMTAzOTE4MTI0NTUyNzEyODU4MDE2NjMwNzA0OCIsIjAiXX0";

  const request = {
    id: "5a634ada-4f43-44c4-881a-1f30a6992863",
    thid: "5a634ada-4f43-44c4-881a-1f30a6992863",
    from: "did:polygonid:polygon:amoy:2qQ68JkRcf3xrHPQPWZei3YeVzHPP58wYNxx2mEouR",
    typ: "application/iden3comm-plain-json",
    type: "https://iden3-communication.io/authorization/1.0/request",
    body: {
      reason: "test flow",
      message: "",
      callbackUrl: "http://localhost:3000/api/verify/callback?userId=11111",
      scope: [
        {
          circuitId: "credentialAtomicQuerySigV2",
          id: 11155111,
          query: {
            allowedIssuers: ["*"],
            context:
              "https://raw.githubusercontent.com/anima-protocol/claims-polygonid/main/schemas/json-ld/pol-v1.json-ld",
            credentialSubject: { human: { $eq: true } },
            type: "AnimaProofOfLife",
          },
        },
      ],
    },
    created_time: 1746716132,
  };

  const resolvers = {
    ["privado:main"]: new resolver.EthStateResolver(
      "https://rpc-mainnet.privado.id",
      "0x3C9acB2205Aa72A05F6D77d708b5Cf85FCa3a896"
    ),
  };

  // fetch authRequest from sessionID
  const authRequest = request;

  // EXECUTE VERIFICATION
  const verifier = await auth.Verifier.newVerifier({
    stateResolver: resolvers,
    circuitsDir: "<circuitsDir>",
    ipfsGatewayURL: "https://ipfs-proxy-cache.privado.id",
  });

  const opts = {
    acceptedStateTransitionDelay: 5 * 60 * 1000, // 5 minute
    acceptedProofGenerationDelay: 365 * 24 * 60 * 60 * 1000, // 1 year
  };
  const authResponse = await verifier.fullVerify(
    tokenStr,
    authRequest as protocol.AuthorizationRequestMessage,
    opts
  );
  return authResponse;
}
