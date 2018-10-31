PennController.ResetPrefix(null);
// TODO: replace with wherever images end up
// PennController.AddHost("https://files.lab.florianschwarz.net/ibexfiles/LING300DB");

// TODO: add consent form

var consentForm = ["consent", "Form", {html: {include: "SONAconsentForm.html"}}];

// TODO: add a line to instructions page that says make sure to get through the entire experiment (to the final page)
// in order to receive credit for participation

// TODO: have a friend take it timed

PennController("consent",
    newHtml("consentForm", "SONAconsentForm.html")
        .print()
)

// INSTRUCTIONS
PennController( "instructions" ,
    defaultText
        .print()
    ,
    newText("intro1", "In this experiment, you will see a collection of picture-sentence pairs. For each pair,")
    ,
    newText("intro2", "you will be asked to decide whether the sentence accurately describes the picture above it.")
    ,
    newText("intro3", "You can press T for true and F for false. Try to make the best judgement possible.")
    ,
    newText("intro4", "In order to receive credit for your participation, be sure not to exit until you are told")
    ,
    newText("intro5", "that the experiment has ended. Press the space bar to begin.")
    ,
    newKey("numeric", " ")
        .wait()                 // start when space is pressed
)
.setOption("hideProgressBar", true); // Do not show the progress bar on first screen


// TEST TRIALS
PennController.Template(  // Trials generated from design.csv from chunk_includes
  row => PennController( "trial" ,
    defaultImage
        // .settings.size(720, 250)
        .settings.center()
    ,
    defaultText
        .settings.size(100, 25)
        .settings.center()
        .print()
    ,
    newText("instruct", "Press T for true and F for false.")
    ,
    newImage("image", "https://files.lab.florianschwarz.net/ibexfiles/LING300DB/" + row.picture)
        .print()
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
  .log("ID", PennController.GetURLParameter("id"))
  // TODO: see URL method for handling submissions tutorial
);


// OLD IBEX SYNTAX FOR EARLY SENDING OF RESULTS
var manualSendResults = true;
var items = [["send", "__SendResults__", {}]];
var shuffleSequence = seq("consent", "instructions", rshuffle("trial"), "send", "end");

// TODO: add debriefing

// TODO: add comments

// FINAL SCREEN
PennController( "end" ,
    newText("end", "This is the end of the experiment. Thanks for your participation!")
        .print()
    ,
    newTimer("ever", 1)                     // Dummy timer
        .wait()                             // Will wait forever (never started)
)
.setOption("countsForProgressBar", false);