    var howImFeeling = 0;
    var bodyStress = 5;

    function emotions(text) {

      var param = {
        apikey: alchemy,//required
        text: encodeURIComponent(text), //req
        outputMode: 'json', //optional
      }

      var sentimentURL = "http://access.alchemyapi.com/calls/text/TextGetTextSentiment" +
                          "?apikey=" + param.apikey + "&text=" + param.text + "&outputMode=" + param.outputMode; 

      console.log(sentimentURL);

      var request = new XMLHttpRequest();

      request.addEventListener('load', function(event){
      //if(this.status !== STATUS_OK) {
        //allback(this.responseText);
      //} else {
        var entry = JSON.parse(this.responseText);
        console.log(entry);
        console.log(entry.docSentiment);
        console.log(entry.docSentiment.score);
        howImFeeling = parseFloat(entry.docSentiment.score);

        expressEmotions();
        //callback(null, entry);
      //}
      });

      request.open('GET', sentimentURL, true);
      request.send();
      console.log(request.status);
      console.log(request.statusText);
      console.log(request.responseText);
    }

    function expressEmotions() {
      if(howImFeeling < 0) {
        bodyStress = 0;
      }
      if(howImFeeling > 0) {
        bodyStress = 100;
      }
      if(howImFeeling == 0) {
        bodyStress = 5;
      }
      changeBody();
    }

    function resetBody() {
      console.log("resetting body");
      howImFeeling = 0;
      bodyStress = 5;
      changeBody();
    }

    function reload_js(src) {
        $('script[src="' + src + '"]').remove();
        $('<script>').attr('src', src).appendTo('body');
    }

    function changeBody() { //reloads the body's javascript file and removes previous one
        reload_js("js/larrybody.js");
    }