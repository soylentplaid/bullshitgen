$(document).ready(function() {
    function loadGrammar(name) {
        $("#bullshit_text").html("");

        let g = grammars[name];
        if (name=="bs_bio") {
            g["firstName"] = "Chris";
            g["lastName"] = "Crocetti";
        }
        var grammar = tracery.createGrammar(g);

        $("#grammar").html(grammar.toText());

        for (var i = 0; i < 10; i++) {

            var s = grammar.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#bullshit_text").append(div);
            $("#bullshit_text").append("<hr>");

        }

    }

    setTimeout(function() {
        loadGrammar("bs_mission");

    }, 10);

    $('#grammarSelect').on('change', function() {
        loadGrammar(this.value);
    });

    $('#regenerate').on('click', function() {
        let val = $("#grammarSelect").val();
        loadGrammar(val);
    });
});
