PennController.ResetPrefix(null);
// TODO: replace with wherever images end up
PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/");

// TODO: add consent form

// INSTRUCTIONS
PennController( "instructions" ,
    defaultText
        .print()
    ,
    newText("intro1", "Welcome. You will see four patches of different colors aligned horizontally.")
    ,
    newText("intro2", "You have 1 second to select the color whose name is shown above the line of patches.")
    ,
    newText("intro3", "Place your fingers above the numeric keys 1, 2, 3 and 4 on your keyboard.")
    ,
    newText("intro4", "Press the space bar to begin.")
    ,
    newKey("numeric", " ")
        .wait()                 // start when space is pressed
)
.setOption("hideProgressBar", true); // Do not show the progress bar on first screen


// TEST TRIALS
PennController.Template(  // Trials generated from design.csv from chunk_includes
  row => PennController( "trial" ,
    defaultImage
        .settings.size(250, 250)
    ,
    defaultText
        .settings.size(100, 25)
        .settings.center()
        .print()
    ,
    newText("instruct", "Press T for true and F for false.")
    ,
    newImage("image", row.picture)
    ,
    newText("sentence", row.sentence)
        .settings.css("font-size", "large")
    ,
    newKey("key", "tf")
        .settings.log()  // log response
        .wait()
  )
  // log the label, sentence, and image file name
  .log("label", row.label)
  .log("sentence", row.sentence)
  .log("image", row.picture)
);


// OLD IBEX SYNTAX FOR EARLY SENDING OF RESULTS
var manualSendResults = true;
var items = [["send", "__SendResults__", {}]];
var shuffleSequence = seq("instructions", rshuffle("trial"), "send", "end");

// TODO: add debriefing

// FINAL SCREEN
PennController( "end" ,
    newText("end", "This is the end of the experiment. Thanks for your participation!")
        .print()
    ,
    newTimer("ever", 1)                     // Dummy timer
        .wait()                             // Will wait forever (never started)
)
.setOption("countsForProgressBar", false);