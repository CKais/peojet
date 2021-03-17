var text ;

    (function (){
      var position = window.location.href.indexOf('?');
      if(position!=-1){
        var fin_url = window.location.href.substr(position + 1);
        fin_url = fin_url.replace("name="," ");
        fin_url = fin_url.split("+");
        // if(fin_url!=" "){
          text = "<table><tr>";
          for (let index = 0; index < fin_url.length; index++) {
          text += "<th>"+ fin_url[index]+"</th>";
          }
          text += "</tr></table>";
          document.getElementById("test").innerHTML = text;
        // }
      }
    })();