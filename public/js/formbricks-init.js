
!function () {
  var appUrl = "https://app.formbricks.com";
  var environmentId = "cmf4c674w294yxh01wq2gsl2c";
  var t = document.createElement("script"); t.type = "text/javascript", t.async = !0, t.src = appUrl + "/js/formbricks.umd.cjs", t.onload = function () { window.formbricks ? window.formbricks.setup({ environmentId: environmentId, appUrl: appUrl }) : console.error("Formbricks library failed to load properly. The formbricks object is not available."); }; var e = document.getElementsByTagName("script")[0]; e.parentNode.insertBefore(t, e)
}();

