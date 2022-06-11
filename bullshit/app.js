let options = {
    'firstName': "John",
    'lastName': "Doe"
};
function loadGrammar(elementId, name) {
    $("elementId").html("");

    let g = grammars[name];
    // Override the grammar to inject values generated from outside.
    if (name == "bs_bio") {
        g["firstName"] = options['firstName'];
        g["lastName"] = options['lastName'];
    }
    var grammar = tracery.createGrammar(g);

    var s = grammar.flatten("#origin#");
    console.log(s);
    var div = $("<div/>", {
        html : s
    });

    $(elementId).html(div);

}