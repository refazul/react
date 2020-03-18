const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNiNDA0MzgzODQ0YjQ2MzEyNzY5YmI5MjllY2VjNTdkMGFkOGUzYmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTA2Nzk1NDY4OTU4Mi1oOTNkcmgyaGlxc2hyOGwwdnZ1NzNpdHFzbmsxY2V1by5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwNjc5NTQ2ODk1ODItaDkzZHJoMmhpcXNocjhsMHZ2dTczaXRxc25rMWNldW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTM2NDY1NDg1MDQ3NDA3ODU5MjciLCJlbWFpbCI6InRhbGhhanViYWVyMDE4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiakswT0VsYWdQVjNuV3dzX1pGS3lZQSIsIm5hbWUiOiJUYWxoYSBKdWJhZXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1ReFpzUG82UVEtNC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BS0YwNW5DQm9FTnBxYkJTbGtyVmNXYXhYdGFqWE10NEd3L3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJUYWxoYSIsImZhbWlseV9uYW1lIjoiSnViYWVyIiwibG9jYWxlIjoiZW4tR0IiLCJpYXQiOjE1ODQzNTkxOTMsImV4cCI6MTU4NDM2Mjc5MywianRpIjoiOWZlZTE4NzcxN2E1Y2JjZmY2NWE2M2ZiNDk4MDc5YmRjNDdmMDMwYyJ9.D5pjr46EYnfy1q78i7kcc9oanCEGuu5ChT3fkHvDbP2A_uGLxHJKG3PXbto3oexBypikBD6s6hwah69bynY64n9j1Z6bF5i2F5NerXxkwl34_2xEODhMehEa0zbDZc_QUTfr6ARu5818oAJ7NnEpxKS3BnmODKZsk_Kh5XDnlYC1WzSq0Org_-6aSjb6-yqe3La34dJ-pUue2lzzcG63dKqqYHq0MTb5ltHqIAh79lVIJ3R4X9J0dbLxNqRERyPCDciJiB-hiryAttJMuAXzorgNJsRrcnNocHsYOmFXGZ7q5_7EvTAculGJaqnQ-dSMULwn5FjXo_GYbVaQtmyOSA",
      audience: "1067954689582-h93drh2hiqshr8l0vvu73itqsnk1ceuo.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
  console.log(payload);
}
verify().catch(console.error);