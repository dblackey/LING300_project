var shuffleSequence = seq("consent", "setcounter", "intro", "practice", "init", rshuffle(anyOf(startsWith("critical"), "filler")), "comments", "debriefing");
var showProgressBar = false;

// var Parameters = {},
//     URLParameters = window.location.search.replace("?", "").split("&");
// for (parameter in URLParameters) Parameters[URLParameters[parameter].split("=")[0]] = URLParameters[parameter].split("=")[1];
// assert(Parameters.hasOwnProperty("id") == true, "Oops! It looks like you've not reached here through SONA...");
// var id = Parameters.id;


var defaults = [
    "Question", {
        as: ["Yes", "No"]
    },
    "Message", {
        transfer: "keypress"
    }
];

var items = [
        ["setcounter", "__SetCounter__", { }],
   
    // consent form
    ["consent", "Form", {html: {include: "SONAconsentForm.html"}}],
    
    
    // instructions if using separate html form
//    ["instruct", "Form", {
//        html: { include: "instructions.html"},
//    } ],
    
    // Handling Results / debriefing
    
    ["comments", "Form",  {html: {include: "comments.html"}}, "__SendResults__", {
       manualSendResults: true,
       sendingResultsMessage: "Please wait while your answers are being saved.",
       completionMessage: "Your answers have successfully being saved!"
    }],     
    
    ["debriefing", "Message", {html: {include: "debriefing.html"}, transfer:null}],    
    
    ["intro",
        "Message", {html: "<p>You will be given several paragraphs of text and asked a question after each on your" + 
                          " comprehension. Try to answer as accurately as possible.</p>"+
                          "<p>There will be a practice question before we begin. The experiment should take around 15 minutes.</p>",
                    transfer: "click"}
    ],
    ["practice",
        "Form", {html: "<p style='width:500px'>Jess had a cup of coffee with her breakfast this morning. "+
                          "She knew it was going to be a long day, so she packed a little "+
                          "extra in her lunch. By 3:00, she had had another two cups of coffee. "+
                          "She was exhausted by the time she made it home.</p>"+
                          "<p>How many cups of coffee did Jess have today? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["init",
        "Message", {html: "<p>Let's begin!</p>",
                    transfer: "click"}
    ],
    [["criticalA", 1],  // condition 1
        "Form", {html: "<p style='width:500px'>John had a busy day yesterday, as he met three coworkers. He later went to the park with his kids. Before heading home, "+
                          "he also met a good friend of his.</p>"+
                          "<p>How many times did John meet people? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 1],  // condition 2
        "Form", {html: "<p style='width:500px'>John had a busy day yesterday, as three coworkers met him. He later went to the park with his kids. Before heading home, "+
                          "he also met a good friend of his.</p>"+
                          "<ol><li><p>How many times did John meet people? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    [["criticalA", 2],
        "Form", {html: "<p style='width:500px'>Dave went for a walk in the park. While he was out, he ran into four friends of his. Later that day, he "+
                          "called them to schedule another time to catch up. He also ran into his teacher, Beth, on his way home.</p>"+
                          "<p>How many times did Dave run into friends? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 2],
        "Form", {html: "<p style='width:500px'>Dave went for a walk in the park. While he was out, four friends of his ran into him. Later that day, he "+
                          "called them to schedule another time to catch up. He also ran into his teacher, Beth, on his way home.</p>"+
                          "<p>How many times did Dave run into friends? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 3],
        "Form", {html: "<p style='width:500px'>Mary was going out for a jog when she heard an alarm go off. In all the chaos, she bumped into three lost kids. "+
                "As it turned out, someone had accidently set off the tornado alert. Mary was exhausted by the time she made it home. "+
                  "She bumped into her friend Alison on the way, but told her she couldn’t chat.</p>"+
                  "<p>How many times did Mary bump into people? (Please enter a number)</p>"+
                  "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 3],
        "Form", {html: "<p style='width:500px'>Mary was going out for a jog when she heard an alarm go off. In all the chaos, three lost kids bumped into her. "+
                "As it turned out, someone had accidently set off the tornado alert. Mary was exhausted by the time she made it home. "+
                  "She bumped into her friend Alison on the way, but told her she couldn’t chat.</p>"+
                  "<p>How many times did Mary bump into people? (Please enter a number)</p>"+
                  "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 4],
        "Form", {html: "<p style='width:500px'>Sally spent the entire day watching TV. She didn’t leave the house until late afternoon. While she was out, she came "+
                  "across two friends of hers, who both asked her why she looked like crap. She told them it was just one of those days. On her way back home, she "+
                  "came across her brother, who told her to get back to bed. </p>"+
                  "<p>How many times did Sally come across people? (Please enter a number)</p>"+
                  "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 4],
        "Form", {html: "<p style='width:500px'>Sally spent the entire day watching TV. She didn’t leave the house until late afternoon. While she was out, two friends of hers "+
                  "came across her, who both asked her why she looked like crap. She told them it was just one of those days. On her way back home, she "+
                  "came across her brother, who told her to get back to bed. </p>"+
                  "<p>How many times did Sally come across people? (Please enter a number)</p>"+
                  "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 5],
        "Form", {html: "<p style='width:500px'>Elly spent most of today watching soap operas with her niece, Jocelyn. Before the end of the day, she stopped by the supermarket to pick up some food for dinner. While she was out, she happened upon two of her former roommates. She also happened upon an old friend of hers. When she made it back, she cooked up some pasta for Jocelyn.</p>"+
                       "<p>How many times did Elly happen upon people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 5],
        "Form", {html: "<p style='width:500px'>Elly spent most of today watching soap operas with her niece, Jocelyn. Before the end of the day, she stopped by the supermarket to pick up some food for dinner. While she was out, two of her former roommates happened upon her. She also happened upon an old friend of hers. When she made it back, she cooked up some pasta for Jocelyn.</p>"+
                       "<p>How many times did Elly happen upon people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 6],
        "Form", {html: "<p style='width:500px'>Alex loves to spend sunny days outdoors. As soon as he saw the weather report this morning, he planned a day full of outdoor activities. While he was out for a walk, he stumbled upon three of his neighbors. He also sat by a pond for a while, and while he was there, he stumbled upon his friend, Jeff. Alex was sad to see the day come to an end.</p>"+
                       "<p>How many times did Alex stumble across people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 6],
        "Form", {html: "<p style='width:500px'>Alex loves to spend sunny days outdoors. As soon as he saw the weather report this morning, he planned a day full of outdoor activities. While he was out for a walk, three of his neighbors stumbled across him. He also sat by a pond for a while, and while he was there, he stumbled upon his friend, Jeff. Alex was sad to see the day come to an end.</p>"+
                       "<p>How many times did Alex stumble across people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 7],
        "Form", {html: "<p style='width:500px'>Mary loves hanging out in coffee shops. She met two of her closest friends in one of her favorites last Wednesday. That same day, Mary went to a garden near her neighborhood. She met her dad there to talk about their upcoming trip.</p>"+
                       "<p>How many times did people meet Mary last Wednesday? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 7],
        "Form", {html: "<p style='width:500px'>Mary loves hanging out in coffee shops. Two of Mary’s closest friends met her in one of her favorites last Wednesday. That same day, Mary went to a garden near her neighborhood. She met her dad there to talk about their upcoming trip.</p>"+
                       "<p>How many times did people meet Mary last Wednesday? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 8],
        "Form", {html: "<p style='width:500px'>Alison told her boss she was sick and took the entire day off. She missed an important meeting, but she didn’t care. Unfortunately, she ran into three of her coworkers. She knows now to come up with better excuses to give her boss. She ran into her sister back at home and told her what a mess the day was.</p>"+
                       "<p>How many times did people run into Alison that day? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 8],
        "Form", {html: "<p style='width:500px'>Alison told her boss she was sick and took the entire day off. She missed an important meeting, but she didn’t care. Unfortunately, three of her coworkers ran into her. She knows now to come up with better excuses to give her boss. She ran into her sister back at home and told her what a mess the day was.</p>"+
                       "<p>How many times did people run into Alison that day? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 9],
        "Form", {html: "<p style='width:500px'>Harry had a rough week. It all started off when his girlfriend sent him a text saying it was over. To make matters worse, he bumped into his two aunts. He had to relive the experience over and over. At the end of the week, he bumped into his best friend and went out to have a beer.</p>"+
                       "<p>How many times did people bump into Harry last week? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 9],
        "Form", {html: "<p style='width:500px'>Harry had a rough week. It all started off when his girlfriend sent him a text saying it was over. To make matters worse, his two aunts bumped into him. He had to relive the experience over and over. At the end of the week, he bumped into his best friend and went out to have a beer.</p>"+
                       "<p>How many times did people bump into Harry last week? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 10],
        "Form", {html: "<p style='width:500px'>Austin spent last weekend in New York. While he was there, he came across three of his high school friends. He was happy to get to hear how they had been since he had last seen them. He also came across his high school teacher while exploring Central Park.</p>"+
                       "<p>How many times did people come across Austin in New York? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 10],
        "Form", {html: "<p style='width:500px'>Austin spent last weekend in New York. While he was there, three of his high school friends came across him. He was happy to get to hear how they had been since he had last seen them. He also came across his high school teacher while exploring Central Park.</p>"+
                       "<p>How many times did people come across Austin in New York? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 11],
        "Form", {html: "<p style='width:500px'>Sally went to the county fair last weekend with a couple friends of hers. While she was there, she happened upon two other friends - it was clearly a popular weekend at the fair. Sally had a great time – she ate three hot dogs. She also happened upon her old roommate, Beth.</p>"+
                       "<p>How many times did people happen upon Sally at the fair? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 11],
        "Form", {html: "<p style='width:500px'>Sally went to the county fair last weekend with a couple friends of hers. While she was there, two other friends happened upon her - it was clearly a popular weekend at the fair. Sally had a great time – she ate three hot dogs. She also happened upon her old roommate, Beth.</p>"+
                       "<p>How many times did people happen upon Sally at the fair? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalA", 12],
        "Form", {html: "<p style='width:500px'>Derek works as a doctor at a hospital. Yesterday at work, he stumbled upon two former patients of his. Derek is always thrilled to hear how his former patients are doing. That same day, an old friend of his also stumbled upon him at work. Overall, it was a pretty good day.</p>"+
                       "<p>How many times did people stumble upon Derek that day? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [["criticalB", 12],
        "Form", {html: "<p style='width:500px'>Derek works as a doctor at a hospital. Yesterday at work, two former patients of his stumbled upon him. Derek is always thrilled to hear how his former patients are doing. That same day, an old friend of his also stumbled upon him at work. Overall, it was a pretty good day.</p>"+
                       "<p>How many times did people stumble upon Derek that day? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    [ "filler",  // fillers: non-symmetric
        "Form", {html: "<p style='width:500px'>Jonathan spends a lot of his time eating. He ate three pizzas yesterday. He also drank a glass of OJ, "+
                          "and ate a piece of cake. Other than that, Jonathan didn't do too much yesterday.</p>"+
                          "<p>How many times did Jonathan eat? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Phil went to the mall last weekend to shop for some new shoes. He ended up buying a nice pair of tennis shoes and a new shirt. He bought himself a milkshake too.</p>"+
                       "<p>How many times did Phil buy something? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Andrew spent the entire weekend watching sports on TV. He watched a football game on Saturday afternoon, a basketball game Saturday night, and a baseball game on Sunday. He also watched an episode of his favorite TV show.</p>"+
                       "<p>How many times did Andrew watch sports games? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Jessica is a huge moviegoer. Last week, she watched two movies on Tuesday with her friend Alice, and then watched another movie on Wednesday at the theater down the street from her house. She’s thinking about seeing a couple more movies next week.</p>"+
                       "<p>How many times did Jessica watch a movie? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",  // fillers: singular
        "Form", {html: "<p style='width:500px'>John slept in late this morning, and later met his friend for lunch. He spent the rest of the day taking care of some errands. That night, he met his girlfriend for dinner.</p>"+
                       "<p>How many times did John meet people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Andrea got a puppy for her birthday. She spent the entire week playing with it, and hardly let it leave her side. She took it for a walk every morning from Monday to Friday.</p>"+
                       "<p>How many times did Andrea walk her puppy? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Jennifer started taking courses at her local community college. During her first day of class, she bumped into a middle school classmate of hers. She also bumped into her high school teacher, who had started teaching courses there.</p>"+
                       "<p>How many times did Jennifer bump into people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Katie spent the past week in Europe with her family. While she was there, she came across her daughter’s swim instructor, who was also there for vacation. After chatting for a bit, he offered to give her a free lesson when they were all back home. Katie also came across an old friend of hers.</p>"+
                       "<p>How many times did Katie come across people in Europe? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",  // fillers: plural
        "Form", {html: "<p style='width:500px'>Last month, John and his wife went on a road trip across the country. During the trip, they ran into three friends of theirs. They found it funny how so many of their friends from back home could also be scattered across the country.</p>"+
                       "<p>How many times did John and his wife run into people during their trip? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Alison and Jess spent the afternoon having a picnic in the park. While they were in the park, they bumped into their two college roommates, Andrea and Katherine. Catching up with them made their picnic all the better. They also bumped into another friend of theirs, David. They left the park full and happy to have found their friends.</p>"+
                       "<p>How many times did Alison and Jess bump into people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Jeff and his son went to the amusement park last weekend. They rode all the rides that had recently been opened up. During all their time in line, they stumbled upon two family friends, who were also there for the new rides. They also stumbled upon their neighbor.</p>"+
                       "<p>How many times did Jeff and his son stumble upon people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Zach and his friend Erick spent the weekend by the pool, enjoying the nice weather. While they were there, they happened upon two of their classmates. They also happened upon the teacher of the course. Zach and Erick weren’t so happy to have seen so many people from school during their weekend away. </p>"+
                       "<p>How many times did Zach and Erick happen upon people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'>"}
    ],
    ["end",
        "Message", {html: "<p>This is the end of the experiment. Thanks for your participation! (Press any key to send the results and exit)</p>",
                    transfer: "keypress"}
    ]
    
];


// PennController.ResetPrefix(null);
// // Fetch the images there:
// // TODO: replace with wherever images end up
// // PennController.AddHost("https://www.dropbox.com/home/LING300_dblackey_images/");
// // PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");

// // INSTRUCTIONS
// PennController( "instructions" ,
//     defaultText
//         .print()
//     ,
//     newText("intro1", "Welcome. You will see four patches of different colors aligned horizontally.")
//     ,
//     newText("intro2", "You have 1 second to select the color whose name is shown above the line of patches.")
//     ,
//     newText("intro3", "Place your fingers above the numeric keys 1, 2, 3 and 4 on your keyboard.")
//     ,
//     newText("intro4", "Press 1, 2, 3 or 4 to start.")
//     ,
//     newKey("numeric", "1234ï¿½") // Handle exception: an all-digit string would be evaluated as a charCode
//         .wait()                 // Start when 1, 2, 3 or 4 is pressed (weird character not on keyboard)
// )
// .setOption("hideProgressBar", true); // Do not show the progress bar on first screen


// // TEST TRIALS
// PennController.Template(  // Trials generated from design.csv from chunk_includes
//   row => PennController( "trial" ,
//     defaultImage
//         .settings.size(250, 250)            // Each image in this trial is 250 by 250
//     ,
//     defaultText
//         .settings.size(100, 25)             // Each text has same width as images (100px)
//         .settings.center()                  // Text labels will be centered below images
//     ,
//     newText("sentence", row.sentence)         // Retrieve the color name from the CSV design spreadsheet
//         .settings.css("font-size", "large") // Make it stand out
//         // .settings.bold()
//         .print()
//     ,
//     newImage("image", row.picture + "?raw=1")
//     ,
//     newText("null", "")                     // Dummy, unprinted Text element, automatically selected upon timeout (see below)
//     ,
//     getSelector("patch")
//         .shuffle()                          // Shuffle the images (dummy Text element not part of selector yet)
//         .settings.disableClicks()           // Selection by key, not by click
//         .settings.keys( 49, 50, 51, 52 )    // Charcodes for keys 1, 2, 3 and 4 (all-digit strings would be evaluated as charCodes)
//         .settings.add( getText("null") )    // Add dummy Text element now (after shuffle and key assignment)
//         .settings.frame("solid 2px green")  // Positive visual feedback (green) by default
//         .settings.callback(
//             getSelector("patch").test.selected( getImage("color1") )
//                 .success( getVar("score").set(v=>v+1) )                           // Increment score if color1 was selected
//                 .failure( getSelector("patch").settings.frame("solid 2px red") )  // Red frame otherwise (negative visual feedback)
//         )
//         .settings.log()                     // Log which color was selected
//         .wait()                             // Wait for a selection (dummy Text automatically selected after 1s of no selection)
//         .settings.disable()                 // First selection is definitive
//     ,
//     newTimer("end", 500)                    // Wait 500ms before next trial (so you can see visual feedback frame)
//         .start()
//         .wait()
//   )
//   .log( "color", row.colorText )            // Log which color name was shown
// );


// // OLD IBEX SYNTAX FOR EARLY SENDING OF RESULTS
// var manualSendResults = true;
// var items = [["send", "__SendResults__", {}]];
// var shuffleSequence = seq("instructions", "trial", "send", "end"); // Order of labels reflects order of definition in this script


// // FINAL SCREEN
// PennController( "end" ,
//     newText("end", "This is the end of the experiment. Thanks for your participation!")
//         .print()
//     ,
//     newTimer("ever", 1)                     // Dummy timer
//         .wait()                             // Will wait forever (never started)
// )
// .setOption("countsForProgressBar", false); // No need to 'complete' this screen to fill the progress bar