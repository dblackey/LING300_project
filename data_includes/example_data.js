PennController.ResetPrefix(null);
// Fetch the images there:
// TODO: replace with wherever images end up
// PennController.AddHost("https://www.dropbox.com/home/LING300_dblackey_images/");
// PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");

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
    newText("intro4", "Press 1, 2, 3 or 4 to start.")
    ,
    newKey("numeric", "1234ï¿½") // Handle exception: an all-digit string would be evaluated as a charCode
        .wait()                 // Start when 1, 2, 3 or 4 is pressed (weird character not on keyboard)
)
.setOption("hideProgressBar", true); // Do not show the progress bar on first screen


// TEST TRIALS
PennController.Template(  // Trials generated from design.csv from chunk_includes
  row => PennController( "trial" ,
    defaultImage
        .settings.size(250, 250)            // Each image in this trial is 250 by 250
    ,
    defaultText
        .settings.size(100, 25)             // Each text has same width as images (100px)
        .settings.center()                  // Text labels will be centered below images
    ,
    newText("sentence", "hiiii")         // Retrieve the color name from the CSV design spreadsheet
        .settings.css("font-size", "large") // Make it stand out
        .print()
        .wait()
    // newImage("image", row.picture + "?raw=1")
  //   getSelector("patch")
  //       .shuffle()                          // Shuffle the images (dummy Text element not part of selector yet)
  //       .settings.disableClicks()           // Selection by key, not by click
  //       .settings.keys( 49, 50, 51, 52 )    // Charcodes for keys 1, 2, 3 and 4 (all-digit strings would be evaluated as charCodes)
  //       .settings.add( getText("null") )    // Add dummy Text element now (after shuffle and key assignment)
  //       .settings.frame("solid 2px green")  // Positive visual feedback (green) by default
  //       .settings.callback(
  //           getSelector("patch").test.selected( getImage("color1") )
  //               .success( getVar("score").set(v=>v+1) )                           // Increment score if color1 was selected
  //               .failure( getSelector("patch").settings.frame("solid 2px red") )  // Red frame otherwise (negative visual feedback)
  //       )
  //       .settings.log()                     // Log which color was selected
  //       .wait()                             // Wait for a selection (dummy Text automatically selected after 1s of no selection)
  //       .settings.disable()                 // First selection is definitive
  //   ,
  //   newTimer("end", 500)                    // Wait 500ms before next trial (so you can see visual feedback frame)
  //       .start()
  //       .wait()
  // )
  // .log( "color", row.colorText )            // Log which color name was shown
  )
);


// OLD IBEX SYNTAX FOR EARLY SENDING OF RESULTS
var manualSendResults = true;
var items = [["send", "__SendResults__", {}]];
var shuffleSequence = seq("instructions", "trial", "send", "end"); // Order of labels reflects order of definition in this script


// FINAL SCREEN
PennController( "end" ,
    newText("end", "This is the end of the experiment. Thanks for your participation!")
        .print()
    ,
    newTimer("ever", 1)                     // Dummy timer
        .wait()                             // Will wait forever (never started)
)
.setOption("countsForProgressBar", false); // No need to 'complete' this screen to fill the progress bar