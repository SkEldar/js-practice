function post() {
    let text = document.getElementById('wr').value;
    var div = document.createElement('div');
      div.className = "wr";
      div.appendChild(document.createTextNode(text));
      if (text.length === 0) {
        alert("write text");
      } else {
        document.body.appendChild(div);
      }
      document.getElementById('wr').reset();
        };
        function SendPost() {
jQuery.ajax({    
type: "GET", 
url: "http://localhost:8888/tweet", 
data: jQuery("#form").serialize(), 
success: function(html) {
jQuery("body").empty();
}

});

}