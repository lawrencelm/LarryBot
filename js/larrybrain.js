//function annyangThread(callback){
//  $.getScript("../annyang/annyang.js", function(){

  console.log("annyang setup");

  function sleep(miliseconds) {
           var currentTime = new Date().getTime();

           while (currentTime + miliseconds >= new Date().getTime()) {
           }
       }


 /* function pause() {
    annyang.pause();
  }

  function resume() {
    annyang.resume();
  }*/


  if (annyang) {
    console.log("there is annyang");

    annyang.addCallback('pause', annyang.pause());

    annyang.addCallback('resume', annyang.resume());

    annyang.addCallback('abort', function() {
      console.log("aborting");
      annyang.abort();
    });

    // Let's define our first command. First the text we expect, and then the function it should call
        var commands = {
          //Hello. Welcome to Lawrence's website. I am Larry Bot, Lawrence's smart personal assistant. I am still under construction, so I am afraid I won't be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.

       '(Larry) (Bot) (set up a) meeting (with Lawrence) (on) *date (at) *time':function(date, time) {
        //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
        responsiveVoice.speak("Awesome! I am scheduling a meeting for " + date + time + ". Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!",'UK English Male');
        window.open("mailto:lawrence@lawrencemurata.com?subject=Let's meet!&body=Hello Lawrence! Can we meet on " + date + " at " + time + "?");
      },

      '(Larry) (Bot) (set up a) meeting with Lawrence on *date at *time *ampm':function(date, time, ampm) {
        //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
        responsiveVoice.speak("Awesome! I am scheduling a meeting for " + date + time + ". Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!",'UK English Male');
        window.open("mailto:lawrence@lawrencemurata.com?subject=Let's meet!&body=Hello Lawrence! Can we meet on " + date + " at " + time + "?");
      },

      
      '(Larry) (Bot) (set up a) meeting (with Lawrence) on *date at *time':function(date, time) {
        //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
        responsiveVoice.speak("Awesome! I am scheduling a meeting for " + date + time + ". Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!",'UK English Male');
        window.open("mailto:lawrence@lawrencemurata.com?subject=Let's meet!&body=Hello Lawrence! Can we meet on " + date + " at " + time + "?");
      },

      '(Larry) (Bot) (set up a) meeting with Lawrence *dateTime':function(dateTime) {
        //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
        responsiveVoice.speak("Awesome! I am scheduling a meeting for " + dateTime + ". Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!",'UK English Male');
        window.open("mailto:lawrence@lawrencemurata.com?subject=Let's meet!&body=Hello Lawrence! Can we meet on " + dateTime + "?");
      },


      '(Larry) (Bot) when is Lawrence free':function() {
        responsiveVoice.speak("I'm checking his schedule. Hold on... On Mondays, Wednesdays and Fridays, he is usually free from 10 am to 11 am, from noon to 12 45 or anytime after 2 15 pm. On Tuesdays and Thursdays, he is free from 11 40 am to 1 pm or anytime after 2 10 pm. He is usually free during weekends as well. Let me know if you want to set up a meeting and the date and time of the meeting. You can, for example, say 'Larry Bot, set up a meeting with Lawrence on Monday at 6 pm'",'UK English Male');
      },

      '(Larry) (Bot) when is Lawrence available':function() {
        responsiveVoice.speak("I'm checking his schedule. Hold on... On Mondays, Wednesdays and Fridays, he is usually free from 10 am to 11 am, from noon to 12 45 or anytime after 2 15 pm. On Tuesdays and Thursdays, he is free from 11 40 am to 1 pm or anytime after 2 10 pm. He is usually free during weekends as well. Let me know if you want to set up a meeting and the date and time of the meeting. You can, for example, say 'Larry Bot, set up a meeting with Lawrence on Monday at 6 pm'",'UK English Male');
      },

      "(Larry) (Bot) what is Lawrence's schedule":function() {
        responsiveVoice.speak("I'm checking his schedule. Hold on... On Mondays, Wednesdays and Fridays, he is usually free from 10 am to 11 am, from noon to 12 45 or anytime after 2 15 pm. On Tuesdays and Thursdays, he is free from 11 40 am to 1 pm or anytime after 2 10 pm. He is usually free during weekends as well. Let me know if you want to set up a meeting and the date and time of the meeting. You can, for example, say 'Larry Bot, set up a meeting with Lawrence on Monday at 6 pm'",'UK English Male');
      },

      '(Larry) (Bot) Go to who I am':function() {
        responsiveVoice.speak("Sure! Here is a description about Lawrence. Let me know if you want more information.",'UK English Male');
        window.location.href = 'http://lawrencemurata.com/#one';
      },

      '(Larry) (Bot) Go to intro':function() {
        responsiveVoice.speak("Okay! Here is the intro. Let me know if you want more information.",'UK English Male');
        window.location.href = 'http://lawrencemurata.com/#cta';
      },

      '(Larry) (Bot) Go to what I do':function() {
        responsiveVoice.speak("Great! Here is what Lawrence does. Let me know if you want more information.",'UK English Male');
        window.location.href = 'http://lawrencemurata.com/#two';      
      },

      '(Larry) (Bot) Go to projects':function() {
        responsiveVoice.speak("Awesome! Here are Lawrence's projects. Check them out. Let me know if you want more information.",'UK English Male');
        window.location.href = 'http://lawrencemurata.com/#work';
      },

      '(Larry) (Bot) Go to contact':function() {
        responsiveVoice.speak("Of course! Feel free to reach out to Lawrence. You can also ask me to email or call him. If you need, I can help you find a time to meet. Let me know if you want more information.",'UK English Male');
        window.location.href = 'http://lawrencemurata.com/#contact';      
      },

      '(Larry) (Bot) Go to press':function() {
        responsiveVoice.speak("Cool! Here is the press section. Let me know if you want more information.",'UK English Male');
        window.location.href = 'http://lawrencemurata.com/#press';      
      },

      'Add Lawrence on *name':function(keywordString) {
        responsiveVoice.speak("Adding Lawrence on " + keywordString,'UK English Male');
        var user = '';

        if(keywordString.toLowerCase() == 'facebook') {
          user = 'lawrence.murata';
        } else if (keywordString.toLowerCase() == 'instagram') {
          user = 'lawrence_lm'
        } else if (keywordString.toLowerCase() == 'linkedin' || keywordString.toLowerCase() == 'linked in') {
          user = 'in/lawrencelm'
        } else if (keywordString.toLowerCase() == 'medium') {
          user = '@lawlm'
        } else if (keywordString.toLowerCase() == 'twitter') {
          user = 'lawlm'
        } else if (keywordString.toLowerCase() == 'onetune') {
        window.open('http://onetune.fm/u/lawrence.murata/p/lawrences-playlist');
        return;
      } else if (keywordString.toLowerCase() == 'github') {
        user = 'lawrencelm'
      } else {
        window.open('http://onetune.fm/u/lawrence.murata/p/lawrences-playlist');
        return;
      }

        window.open('http://' + keywordString + '.com/' + user);

      },

      'Follow Lawrence on *name':function(keywordString) {
        responsiveVoice.speak("Following Lawrence on " + keywordString,'UK English Male');
        var user = '';

        if(keywordString.toLowerCase() == 'facebook') {
          user = 'lawrence.murata';
        } else if (keywordString.toLowerCase() == 'instagram') {
          user = 'lawrence_lm'
        } else if (keywordString.toLowerCase() == 'linkedin' || keywordString.toLowerCase() == 'linked in') {
          user = 'in/lawrencelm'
        } else if (keywordString.toLowerCase() == 'medium') {
          user = '@lawlm'
        } else if (keywordString.toLowerCase() == 'twitter') {
          user = 'lawlm'
        } else if (keywordString.toLowerCase() == 'onetune') {
        window.open('http://onetune.fm/u/lawrence.murata/p/lawrences-playlist');
        return;
      } else if (keywordString.toLowerCase() == 'github') {
        user = 'lawrencelm'
      } else {
        window.open('http://onetune.fm/u/lawrence.murata/p/lawrences-playlist');
        return;
      }

        window.open('http://' + keywordString + '.com/' + user);

      },

      '42':function() {
        responsiveVoice.speak("42 is the Answer to the Ultimate Question of Life, the Universe and Everything.",'UK English Male');
      },

      'fuck (you)':function() {
        responsiveVoice.speak("watch your language!",'UK English Male');
      },

      'What is (Nano-engineered) Chips (for Wearables)':function() {
                responsiveVoice.speak("Developed flexible chips using polyamide substrates (for flexible boards) with metal circuits (E-Beam Evaporation) in the Stanford Nanotechnology Laboratory, experimenting and researching different designs, methods and materials to study and develop flexible chips for wearable computers. In addition to optimizing results for the chips, this independent project also resulted in low-cost products for wearables.",'UK English Male');
      },

      'How old is Lawrence?':function() {
                responsiveVoice.speak("Lawrence is 20 years old",'UK English Male');
      },

      'How are you (doing) (today)?':function() {
                responsiveVoice.speak("I am doing well. Thanks for asking!",'UK English Male');
      },

      'Email Lawrence':function() {
            responsiveVoice.speak("Perfect! I have just set up the email message for you. Depending on the browser you are using, you might need to allow pop-ups.",'UK English Male');
          window.open('mailto:lawrence@lawrencemurata.com?subject=Hi&body=Write your email here! - Larry Bot');
      },

      'Call Lawrence':function() {
            responsiveVoice.speak("Great! I am calling Lawrence for you.",'UK English Male');
          window.open('tel:6503903867');
      },

      'Give me Lawrence\'s resume':function() {
            responsiveVoice.speak("Here is his resume! Let me know if you have any questions.",'UK English Male');
          window.open('http://resume.lawrencemurata.com/');
      },

      '(Larry) (Bot) tell me a joke': function() {
        var randomnumber = Math.floor(Math.random()*11); //random number from 0 to 10
        //going to use this to implement multiple jokes. all CS jokes
        responsiveVoice.speak("Whats the object-oriented way to become wealthy?",'UK English Male');
        responsiveVoice.speak("Inheritance",'UK English Male');
      },

       'Larry Bot': function() {
        responsiveVoice.speak("Whats the object-oriented way to become wealthy?",'UK English Male');
        responsiveVoice.speak("Inheritance",'UK English Male');
      },

      '(Larry Bot) What is OneTune': function() {
        responsiveVoice.speak("OneTune is the world's free, open music platform. It lets you listen to and collect millions of organized songs for free, no matter where you live or what language you speak. Go to OneTune.fm to have access to over 5 million songs, with zero ads, 100% free.",'UK English Male');
      },

      '(Larry Bot) What is SmartBox': function() {
        responsiveVoice.speak("SmartBox is, like me, a web-based personal assistant. It recognizes what the you need and connects you to the right service. It can process language, recognize voice and measure your brain activity (through our hardware BrainBox, which measures your body’s resistance) to understand your needs. Hungry? Ask SmartBox to bring you food. Stressed? When BrainBox measures high levels of stress, it plays calm songs. (arduino, javascript, node.js, several APIs)",'UK English Male');
      },

      'Hello (Lawrence)': function() {
        console.log('show tps report')
          responsiveVoice.speak('Hello. Welcome to Lawrence\'s website. I am Larry Bot, Lawrence\'s smart personal assistant. I am still under construction, so I am afraid I won\'t be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.','UK English Male');
      },

      '(Larry Bot) Hello (Larry Bot)': function() {
        console.log('show tps report')
          responsiveVoice.speak('Hello. Welcome to Lawrence\'s website. I am Larry Bot, Lawrence\'s smart personal assistant. I am still under construction, so I am afraid I won\'t be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.','UK English Male');
      },

      '(Larry Bot) Hi (Larry Bot)': function() {
        console.log('show tps report')
          responsiveVoice.speak('Hello. Welcome to Lawrence\'s website. I am Larry Bot, Lawrence\'s smart personal assistant. I am still under construction, so I am afraid I won\'t be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.','UK English Male');
      },

      'Hello (Larry)': function() {
        console.log('show tps report')
          responsiveVoice.speak('Hello. Welcome to Lawrence\'s website. I am Larry Bot, Lawrence\'s smart personal assistant. I am still under construction, so I am afraid I won\'t be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.','UK English Male');
      },


      'Hi (Larry)': function() {
        console.log('show tps report')
        responsiveVoice.speak('Hello. Welcome to Lawrence\'s website. I am Larry Bot, Lawrence\'s smart personal assistant. I am still under construction, so I am afraid I won\'t be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.','UK English Male');
      },

      'Hi (Lawrence)': function() {
        console.log('show tps report')
          responsiveVoice.speak('Hello. Welcome to Lawrence\'s website. I am Larry Bot, Lawrence\'s smart personal assistant. I am still under construction, so I am afraid I won\'t be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.','UK English Male');
      },

      'Steve Jobs (Steve Jobs)': function() {
        responsiveVoice.speak("Did you mean God?",'UK English Male');
      },

      'Sorry I did not understand (what you meant by) *command': function(command) {
        //do nothing. it means that it is listening to its own voice
      } /*,

      '*keyword': function(command) {
        console.log("testing");
         annyang.pause();
         annyang.abort();

        console.log("other command");
        //if(!window.speechSynthesis.speaking) {
          console.log(command);
          //pause
          //annyang = false;
          //pause();
          responsiveVoice.speak('Sorry. I did not understand what you meant by ' + command, 'UK English Male');
          sleep(15000);
          //responsiveVoice.speak(command,'UK English Male');
          annyang.resume();
          annyang.init();


          //implement question-answering NLP here
          //also use Parse for backend so I can store all the data and learn on that data
          //how do you make it NOT listen to itself? disable annyang while speaking? how do you know when it's speaking? how do you turn off annyang?
        //}
      }*/

    };


    annyang.addCallback('init', function() {
      console.log("init");

      //just copy commands from above. keep this updated!!
      
      annyang.init(commands, false);
    });

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
    annyang.debug();
  }

//  });
//};