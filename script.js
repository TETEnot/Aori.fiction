(function() {
    if ("Notification" in window) {
      var permission = Notification.permission;
  
      if (permission === "denied" || permission === "granted") {
        return;
      }
  
      Notification
        .requestPermission()
        .then(function() {
          var notification = new Notification("Hello, world!");
        });
    }
  })();

function makeClick() {
    alert('警告 ここから自己責任になります。');
}
