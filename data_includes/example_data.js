PennController.ResetPrefix(null);

// CHECK TO MAKE SURE PARTICIPANT REACHED THROUGH SONA
var Parameters = {},
    URLParameters = window.location.search.replace("?", "").split("&");
for (parameter in URLParameters) Parameters[URLParameters[parameter].split("=")[0]] = URLParameters[parameter].split("=")[1];
assert(Parameters.hasOwnProperty("id") == true, "Oops! It looks like you've not reached here through SONA...");

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
.log("ParticipantID", PennController.GetURLParameter("id"))  // log the URL ID to associate responses with participant
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
  .log("ParticipantID", PennController.GetURLParameter("id"))  // log the URL ID to associate responses with participant
);


// OLD IBEX SYNTAX FOR EARLY SENDING OF RESULTS
var manualSendResults = true;
var items = [
    ["send", "__SendResults__", {}],
    ["consent", "Form", {html: {include: "SONAconsentForm.html"}}],
    ["comments", "Form",  {html: {include: "comments.html"}}, "__SendResults__", {
       manualSendResults: true,
       sendingResultsMessage: "Please wait while your answers are being saved.",
       completionMessage: "Your answers have successfully being saved!"
    }],
    ["debriefing", "Message", {html: {include: "debriefing.html"}, transfer:null}],
];
var shuffleSequence = seq("consent", "instructions", rshuffle("trial"), "comments", "debriefing");


// FINAL SCREEN
PennController( "end" ,
    newText("end", "This is the end of the experiment. Thanks for your participation!")
        .print()
    ,
    newTimer("ever", 1)                     // Dummy timer
        .wait()                             // Will wait forever (never started)
)
.setOption("countsForProgressBar", false);