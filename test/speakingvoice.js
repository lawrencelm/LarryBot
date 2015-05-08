        //Their code
      var voicelist = responsiveVoice.getVoices();

      var vselect = $("#voiceselection");

      $.each(voicelist, function() {
        vselect.append($("<option />").val(this.name).text(this.name));
      });

    // Yours
      $('#isPlaying').on('click', function() {
        $('#r').text(window.speechSynthesis.speaking)
      })