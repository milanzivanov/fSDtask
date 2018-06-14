$(document).ready(function () {
    "use strict";
    // contextmenu
    let div = $( ".grid-container" );
    let context = $( ".grid-container .wrapper .border-wrapper .grid-wrapper .contextmenu" );
    div.contextmenu(function(e) {
        e.preventDefault();
        context.toggleClass( "open" );
    });

    // close contexmenu on left click
    $(document).on("click", function (e) {
        if (!$(e.target).is(context)) {
            context.removeClass("open");
        }
    });


    // datapicker
    $( "#datepicker, #datepicker2" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        dateFormat: "yy-mm-dd"
    });

    // jqquery grid
    $("#grid").jqGrid({
        colModel: [
            { name: "name", label: "heading1", width: 200 },
            { name: "text", label: "heading2", width: 200, template: "string" },
            { name: "text", label: "heading3", width: 100, template: "string" },
            { name: "text", label: "heading4", width: 100, template: "string" },
            { name: "text", label: "heading5", width: 100, template: "string" },
            { name: "text", label: "heading6", width: 100, template: "string" },
            { name: "text", label: "heading7", width: 100, template: "string" },
            { name: "text", label: "heading9", width: 100, template: "string" },
            { name: "text", label: "heading10", width: 100, template: "string" },
            { name: "text", label: "heading11", width: 100, template: "string" },
            { 
                name: "hedline", 
                label: "boolean", 
                width: 50, 
                template: "booleanCheckbox", 
                firstsortorder: "desc",
                formatter:'checkbox',
                editoptions:{value: "true:false"},
                sorttype: "date"
            },
            { name: "hedline", label: "heading12", width: 50, template: "string" },
            { name: "hedline", label: "heading13", width: 50, template: "string" }
        ],
        data: [
            { id: "1",  invdate: "lorem", name: "lorem1", text: "lorem text1", boolean: false },
            { id: "2", name: "lorem2",  text: "lerem", text: "lorem text2", boolean: true },
            { id: "3", name: "lorem3",  text: "lorem", text: "lorem text3", boolean: true }
        ],

        viewrecords: true,
        iconSet: "fontAwesome",
        idPrefix: "g5_",
        rownumbers: true,
        sortname: "invdate",
        sortorder: "desc",
        threeStateSort: true,
        sortIconsBeforeText: true,
        headertitles: false,
        rowNum: 3,
        // caption: "fSD task"
    });
});



