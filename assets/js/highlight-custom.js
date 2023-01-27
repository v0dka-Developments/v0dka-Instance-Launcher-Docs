//Ref: https://highlightjs.readthedocs.io/en/latest/index.html
//Initialise highlight js on <pre></code> blocks
hljs.initHighlighting();


function i_love_vodka() {
    $('.docs-wrapper').addClass('shake_me');
}


document.addEventListener('selectionchange', function () {
    var selection = document.getSelection();
    var selectedText = selection ? selection.toString() : null;
    if (['v0dka'].includes(selectedText)) {
        // Add if you selected my name

        $('.docs-wrapper').addClass('vodka_meme');
        setTimeout(function () {
            $('.docs-wrapper').removeClass('vodka_meme');
        }, 4500);

    }
});



/* ====== Mark Plugin ======= */
/*  Ref: https://github.com/julmot/mark.js/ */

$(function () {

    // easter egg
    $("#easter-egg").hide();
    $("#learning-linux-show-me-answer").click(function () {

        if ($("#easter-egg").is(":visible")) {
            $("#easter-egg").hide();
        } else {
            $("#easter-egg").show();
        }
    })


    // the input field
    let $input = $("input[type='search']"),
        // clear button
        $clearBtn = $("button[data-search='clear']"),
        // prev button
        $prevBtn = $("button[data-search='prev']"),
        // next button
        $nextBtn = $("button[data-search='next']"),
        // the context where to search
        $content = $(".docs-content"),
        // jQuery object to save <mark> elements
        $results,
        // the class that will be appended to the current
        // focused element
        currentClass = "current",
        // top offset for the jump (the search bar)
        offsetTop = 50,
        // the current index of the focused element
        currentIndex = 0;

    /**
     * Jumps to the element matching the currentIndex
     */
    function jumpTo() {
        if ($results.length) {
            let position,
                $current = $results.eq(currentIndex);
            $results.removeClass(currentClass);
            if ($current.length) {
                $current.addClass(currentClass);
                position = $current.offset().top - offsetTop;
                window.scrollTo(0, position - 70);
            }
        }
    }

    /**
   *  Search function
   *  
   */
    function search(user_value) {
        let searchVal = user_value;
        $content.unmark({
            done: function () {
                $content.mark(searchVal, {
                    separateWordSearch: true,
                    done: function () {
                        $results = $content.find("mark");
                        currentIndex = 0;
                        jumpTo();
                    }
                });
            }
        });
    }

    /**
     *  jump the user to result
     * 
     */

    function user_jump() {
        if ($results.length) {
            currentIndex += $(this).is($prevBtn) ? -1 : 1;
            if (currentIndex < 0) {
                currentIndex = $results.length - 1;
            }
            if (currentIndex > $results.length - 1) {
                currentIndex = 0;
            }
            jumpTo();
        }
    }
    /**
     * if the user presses enter we 
     * jump through the list of options
     */

    $('input').keypress(function (e) {
        if (e.which == 13) {
            user_jump();
            return false;   // fucking javascript!
        }
    });

    /**
     * Searches for the entered keyword in the
     * specified context on input
     */
    $input.on("input", function () {
        let user_value = this.value;
        console.log(user_value)
        if (user_value == "vodka is god") {

            $('#secretmodal').modal('show');
            $content.unmark();
            $input.val("").focus();
        } else {
            search(user_value)
        }

    });

    /**
     * Clears the search
     */
    $clearBtn.on("click", function () {
        $content.unmark();
        $input.val("").focus();
    });

    /**
     * Next and previous search jump to
     */
    $nextBtn.add($prevBtn).on("click", function () {
        user_jump();
    });
});


$("#pacman").hide();



