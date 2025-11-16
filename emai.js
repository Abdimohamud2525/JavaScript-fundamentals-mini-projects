function maskEmail(email) {
  const indexOfAT = email.indexOf("@");
  const username = email.slice(0, indexOfAT);
  const domain = email.slice(indexOfAT + 1);

  if (username.length <= 2) {
    return username + "*" + "@" + domain;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const start = "*".repeat(username.length - 2);
  return firstChar + lastChar + start + "@" + domain;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));
