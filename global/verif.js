export const emailVerif = (val) => {
  let test = false;
  const ch = val;
  for (let i = 0; i < ch.length; i++) {
    if (ch[i] === "@") {
      test = true;
      break;
    }
  }
  return test;
};

export const passwordCorrespond = (password, confirmPassword) => (password === confirmPassword) ? true : false;
