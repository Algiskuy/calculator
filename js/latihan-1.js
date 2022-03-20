function insert(num) {
  document.form.hasil.value = document.form.hasil.value + num;
}

function equal() {
  const exp = document.form.hasil.value;
  if (exp) {
    document.form.hasil.value = eval(exp);
  }
}

function clean() {
  document.form.hasil.value = "";
}

function back() {
  const exp = document.form.hasil.value;
  document.form.hasil.value = exp.substring(0, exp.length - 1);
}
