    console.log("annyang setup");

    function sleep(miliseconds) {
             var currentTime = new Date().getTime();

             while (currentTime + miliseconds >= new Date().getTime()) {
             }
    }

    var tpw = 1000; //average time to say a single word
    var fwt = 6000; //how long it usually takes to say the first word (it's longer than the following words)

    function getTiming(speechLog) {
              var pp = 0;//(speechLog.match(new RegExp(". ", "g")) || []).length;
              var cp = (speechLog.match(/,/g) || []).length

              var nw = speechLog.split(' ').length; //number of words said

              var total_tpw = nw + pp + cp - 1; //total number of pauses or words

              console.log(pp + ' periods, ' + cp + ' commas ' + ', ' + nw + ' words and ' + total_tpw + ' total tpw');

              var extra = 200; //extra milliseconds required by word
                              //used to add extra time for particularly long sentences that tend to be underestimated by my formula

              if(total_tpw >= 100) {
                total_tpw += extra;
              }

              var timing = fwt + (tpw)*(total_tpw); //estimated time it will take for larry bot to say something (in milliseconds)
    }

    function anyCommand(command) {
              annyang.pause();
              var speechLog = "I'm sorry. I do not understand what you meant by " + command;
              responsiveVoice.speak(speechLog, 'UK English Male');
              console.log(speechLog);

              if(window.speechSynthesis.speaking != true) {
                console.log(window.speechSynthesis.speaking)
              }

              var pp = 0;//(speechLog.match(/./g) || []).length
              var cp = (speechLog.match(/,/g) || []).length

              var nw = speechLog.split(' ').length; //number of words said
              console.log(pp + 'periods, ' + cp + ' commas ' + ' and ' + nw + ' words');

              var timing = fwt + (tpw)*(nw + pp + cp - 1); //estimated time it will take for larry bot to say something (in milliseconds)
              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function setUpMeeting1(date, time) {
              //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
              annyang.pause();

              var speechLog = "Awesome! I am scheduling a meeting for " + date + time + ". Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!";
              responsiveVoice.speak(speechLog, 'UK English Male');
              window.open("mailto:lawrence@lawrencemurata.com?subject=Let's meet!&body=Hello Lawrence! Can we meet on " + date + " at " + time + "?");

              console.log(speechLog);

              var pp = 0;//(speechLog.match(/./g) || []).length
              var cp = (speechLog.match(/,/g) || []).length
              console.log(pp + 'periods and ' + cp + ' commas');

              var nw = speechLog.split(' ').length; //number of words said

              var timing = fwt + (tpw)*(nw + pp + cp - 1); //estimated time it will take for larry bot to say something (in milliseconds)
              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }


    function setUpMeeting2(date, time, ampm) {
              //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
              annyang.pause();

              var speechLog = "Awesome! I am scheduling a meeting for " + date + " " + time + " " + ampm + ". Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!";
              responsiveVoice.speak(speechLog, 'UK English Male');
              window.open("mailto:lawrence@lawrencemurata.com?subject=Let's meet!&body=Hello Lawrence! Can we meet on " + date + " at " + time + " " + ampm + "?");

              console.log(speechLog);

              var pp = 0;//(speechLog.match(/./g) || []).length
              var cp = (speechLog.match(/,/g) || []).length
              console.log(pp + 'periods and ' + cp + ' commas');

              var nw = speechLog.split(' ').length; //number of words said

              var timing = fwt + (tpw)*(nw + pp + cp - 1); //estimated time it will take for larry bot to say something (in milliseconds)
              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function setUpMeeting3(dateTime) {
              //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
              annyang.pause();

              var speechLog = "Awesome! I am scheduling a meeting for " + dateTime + ". Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!";
              responsiveVoice.speak(speechLog, 'UK English Male');
              window.open("mailto:lawrence@lawrencemurata.com?subject=Let's meet!&body=Hello Lawrence! Can we meet on " + dateTime + "?");

              console.log(speechLog);

              var pp = 0;//(speechLog.match(/./g) || []).length
              var cp = (speechLog.match(/,/g) || []).length
              console.log(pp + 'periods and ' + cp + ' commas');

              var nw = speechLog.split(' ').length; //number of words said

              var timing = fwt + (tpw)*(nw + pp + cp - 1); //estimated time it will take for larry bot to say something (in milliseconds)
              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function findAvailability() {
              //Awesome! I am scheduling a meeting for Monday 7 pm. Please send him the email I set up for you in order to confirm the meeting. Excited to meet you soon!
              annyang.pause();

              var speechLog = "I'm checking his schedule. Hold on... On Mondays, Wednesdays and Fridays, he is usually free from 10 am to 11 am, from noon to 12 45 or anytime after 2 15 pm. On Tuesdays and Thursdays, he is free from 11 40 am to 1 pm or anytime after 2 10 pm. He is usually free during weekends as well. Let me know if you want to set up a meeting and the date and time of the meeting. You can, for example, say 'Larry Bot, set up a meeting with Lawrence on Monday at 6 pm'";
              responsiveVoice.speak(speechLog, 'UK English Male');

              console.log(speechLog);

              var pp = 0;//(speechLog.match(new RegExp(".", "g")) || []).length;
              var cp = (speechLog.match(/,/g) || []).length;

              var nw = speechLog.split(' ').length; //number of words said
              console.log(pp + ' periods, ' + cp + ' commas ' + ' and ' + nw + ' words');


              var timing = fwt + (tpw)*(nw + pp + cp - 1); //estimated time it will take for larry bot to say something (in milliseconds)
              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function navigateWebsite(section, sentence) {
              annyang.pause();

              var speechLog = sentence;
              responsiveVoice.speak(speechLog, 'UK English Male');
              window.location.href = 'http://lawrencemurata.com/#' + section;


              console.log(speechLog);

              var timing = getTiming(speechLog);

              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function socialMedia(keywordString, followingAdding) {
              annyang.pause();

              var speechLog = followingAdding + " Lawrence on " + keywordString;

              responsiveVoice.speak(speechLog,'UK English Male');
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


              console.log(speechLog);

              var timing = getTiming(speechLog);

              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function simple(query) {
              annyang.pause();

              var speechLog = query;

              responsiveVoice.speak(speechLog,'UK English Male');

              console.log(speechLog);

              var timing = getTiming(speechLog);

              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function simpleOpen(query, open) {
              annyang.pause();

              var speechLog = query;

              responsiveVoice.speak(speechLog,'UK English Male');
              window.open(open);


              console.log(speechLog);

              var timing = getTiming(speechLog);

              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function joke(query) {
              annyang.pause();

              var speechLog = "Whats the object-oriented way to become wealthy? Inheritance";

              var randomnumber = Math.floor(Math.random()*11); //random number from 0 to 10
              //going to use this to implement multiple jokes. all CS jokes
              responsiveVoice.speak("Whats the object-oriented way to become wealthy?",'UK English Male');
              responsiveVoice.speak("Inheritance",'UK English Male');

              console.log(speechLog);

              var timing = getTiming(speechLog);

              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

    function hi() {
              annyang.pause();

              var speechLog = 'Hello. Welcome to Lawrence\'s website. I am Larry Bot, Lawrence\'s smart personal assistant. I am still under construction, so I am afraid I won\'t be very helpful for now. Once I am ready for the outside world, I will be a smart robot that will help you find information and do any tasks you need.';

              responsiveVoice.speak(speechLog, 'UK English Male');

              console.log(speechLog);

              var timing = getTiming(speechLog);

              window.setTimeout("annyang.resume()", timing); //time it according to size of string
    }

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
              setUpMeeting1(date, time);
            },

            '(Larry) (Bot) (set up a) meeting with Lawrence on *date at *time *ampm':function(date, time, ampm) {
              setUpMeeting2(date, time, ampm);
            },

            '(Larry) (Bot) (set up a) meeting (with Lawrence) on *date at *time':function(date, time) {
              setUpMeeting1(date, time);
            },

            '(Larry) (Bot) (set up a) meeting with Lawrence *dateTime':function(dateTime) {
              setUpMeeting3(dateTime);
            },

            '(Larry) (Bot) when is Lawrence free':function() {
              findAvailability();
            },

            "(Larry) (Bot) when's Lawrence available":function() {
              findAvailability();
            },

            "(Larry) (Bot) when's Lawrence free":function() {
              findAvailability();
            },

            '(Larry) (Bot) when is Lawrence available':function() {
              findAvailability();
            },

            "(Larry) (Bot) what is Lawrence's schedule":function() {
              findAvailability();
            },

            '(Larry) (Bot) Go to who I am':function() {
              navigateWebsite('one', "Sure! Here is a description about Lawrence. Let me know if you want more information.");
            },

            '(Larry) (Bot) Go to intro':function() {
              navigateWebsite('cta', "Okay! Here is the intro. Let me know if you want more information.");
            },

            '(Larry) (Bot) Go to what I do':function() {
              navigateWebsite('two', "Great! Here is what Lawrence does. Let me know if you want more information.");
            },

            '(Larry) (Bot) Go to projects':function() {
              navigateWebsite('work', "Awesome! Here are Lawrence's projects. Check them out. Let me know if you want more information.");
            },

            '(Larry) (Bot) Go to contact':function() {
              navigateWebsite('contact', "Of course! Feel free to reach out to Lawrence. You can also ask me to email or call him. If you need, I can help you find a time to meet. Let me know if you want more information.");
            },

            '(Larry) (Bot) Go to press':function() {
              navigateWebsite('press', "Cool! Here is the press section. Let me know if you want more information.");
            },

            'Add Lawrence on *name':function(keywordString) {
              socialMedia(keywordString, "Adding");
            },

            'Follow Lawrence on *name':function(keywordString) {
              socialMedia(keywordString, "Following");
            },

            '42':function() {
                simple("42 is the Answer to the Ultimate Question of Life, the Universe and Everything.");
            },

            'fuck (you)':function() {
              simple("watch your language!");
            },

            'What is (Nano-engineered) Chips (for Wearables)':function() {
              simple("Developed flexible chips using polyamide substrates (for flexible boards) with metal circuits (E-Beam Evaporation) in the Stanford Nanotechnology Laboratory, experimenting and researching different designs, methods and materials to study and develop flexible chips for wearable computers. In addition to optimizing results for the chips, this independent project also resulted in low-cost products for wearables.");
            },

            'How old is Lawrence?':function() {
              simple("Lawrence is 20 years old");
            },

            'How are you (doing) (today)?':function() {
              simple("I am doing well. Thanks for asking!");
            },

            'Email Lawrence':function() {
              simpleOpen("Perfect! I have just set up the email message for you. Depending on the browser you are using, you might need to allow pop-ups.", 'mailto:lawrence@lawrencemurata.com?subject=Hi&body=Write your email here! - Larry Bot');
            },

            'Call Lawrence':function() {
              simpleOpen("Great! I am calling Lawrence for you.", 'tel:6503903867');
            },

            "Give me Lawrence's resume":function() {
              simpleOpen("Here is his resume! Let me know if you have any questions.", 'http://resume.lawrencemurata.com/');
            },

            '(Larry) (Bot) tell me a joke': function() {
              joke();
            },

          'Larry Bot': function() {
            hi();
          },

        '(Larry Bot) What is OneTune': function() {
          simple("OneTune is the world's free, open music platform. It lets you listen to and collect millions of organized songs for free, no matter where you live or what language you speak. Go to OneTune.fm to have access to over 5 million songs, with zero ads, 100% free.");
        },

        '(Larry Bot) What is SmartBox': function() {
          simple("SmartBox is, like me, a web-based personal assistant. It recognizes what the you need and connects you to the right service. It can process language, recognize voice and measure your brain activity (through our hardware BrainBox, which measures your body’s resistance) to understand your needs. Hungry? Ask SmartBox to bring you food. Stressed? When BrainBox measures high levels of stress, it plays calm songs. (arduino, javascript, node.js, several APIs)");
        },

        'Hello (Lawrence)': function() {
          hi();
        },

        '(Larry Bot) Hello (Larry Bot)': function() {
          hi();
        },

        '(Larry Bot) Hi (Larry Bot)': function() {
          hi();
        },

        'Hello (Larry)': function() {
          hi();
        },


        'Hi (Larry)': function() {
          hi();
        },

        'Hi (Lawrence)': function() {
          hi();
        },

        'Steve Jobs (Steve Jobs)': function() {
          simple("Did you mean God?");
        },

        'Sorry I did not understand (what you meant by) *command': function(command) {
          //do nothing. it means that it is listening to its own voice
        },

        'Larry (Bot) *keyword':function(command) {
            anyCommand(command);
           //implement question-answering NLP here
            //also use Parse for backend so I can store all the data and learn on that data
            //temporary solution for "listening to himself" bug
          },

        '*anything': function(command) {
              anyCommand(command);
         }

         /*,

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