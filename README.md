# To open / close registrations change:

- client/secure/components/applications/ApplicationFormSingle.js: const openRegistration = true/false;
- client/front/components/users/SignUp.js: const openRegistration = true/false;

# Add new year / round

- server/methods/applicationMethods.js:37 -> name: "ArtEx 20xx"
- server/methods/userMethods.js:151 -> name: "ArtEx 20xx"
