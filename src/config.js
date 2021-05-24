const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-prod-serverlessdeploymentbucket-odomzi5eu4hd",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://64eo67jixc.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pPp2aOJuY",
    APP_CLIENT_ID: "7nloerpoqtu2pq0kou40o19tsd",
    IDENTITY_POOL_ID: "us-east-1:abd3a638-0c67-48e3-ac12-896a21dd161e",
  },
};

export default config;
