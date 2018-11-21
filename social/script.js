function post() {
    let text = document.getElementById('wr').value;
    var div = document.createElement('div');
    // var hr = document.createElement('hr');
      div.className = "wr";
    
    //   hr.className = 'hr'
      div.appendChild(document.createTextNode(text));
      if (text.length === 0) {
        alert("write text");
      } else {
        document.body.appendChild(div);
      }
      document.getElementById('wr').reset();
    
    //   document.body.appendChild(hr);
        };