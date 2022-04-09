let Sha = $("#BSha1");
let Md5 = $("#BMD5");

function Convert_Sha1() {
  let input = $("#input").val();
  let output = $("#output");
  var encoded = sha1(input);
  output.val(encoded);
}
function Convert_Md5() {
  let input = $("#input").val();
  let output = $("#output");
  var encoded = md5(input);
  output.val(encoded);
}

Sha.on("click", () => {
  Convert_Sha1();
});

Md5.on("click", () => {
  Convert_Md5();
});
