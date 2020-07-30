var minDate = common_parseTime("11-03-2020");
var maxDate = common_parseTime("11-03-2020");
var _parameters = {
    currentPage: 1,
    startDate: minDate,
    endDate: maxDate,
    minDate: minDate,
    maxDate: maxDate,
    type: "numconf"
};


var page1;
var page2;
var page3;


$(document).ready(function () {
    d3.csv(common_datasource).then(function (data) {
        data.forEach(function (d) {
            if (common_parseTime(d.date) < minDate) {
                minDate = common_parseTime(d.date);
            }
            if (common_parseTime(d.date) > maxDate) {
                maxDate = common_parseTime(d.date);
            }
        });
        console.log("Get minDate and maxDate");
        console.log(minDate);
        console.log(maxDate);
        _parameters = {
            currentPage: 1,
            startDate: minDate,
            endDate: maxDate,
            minDate: minDate,
            maxDate: maxDate,
            type: "numconf"
        };


        $(".page1").hide();
        $(".page2").hide();
        $(".page3").hide();

        $(".page1").load("page1.html", function () {
            page1 = new Page1(this, _parameters);
            return true;
        });
        $(".page2").load("page2.html", function () {
            page2 = new Page2(this, _parameters);
            return true;
        });
        $(".page3").load("page3.html", function () {
            page3 = new Page3(this, _parameters);
            return true;
        });

        $(".page2").hide();
        $(".page3").hide();
        $(".page1").show();

        $('#pagination-here').bootpag({
            total: 3,           // total pages
            page: 1,            // default page
            maxVisible: 3,      // visible pagination
            leaps: true         // next/prev leaps through maxVisible
        }).on("page", function (event, num) {
            $("#content").html("Page " + num); // or some ajax content loading...

            if (num == 1) {
                page1.trigger(_parameters);
                $(".page2").hide();
                $(".page3").hide();
                $(".page1").show();
                page1.trigger(_parameters);
            }
            if (num == 2) {
                page2.trigger(_parameters);
                $(".page2").show();
                $(".page3").hide();
                $(".page1").hide();
                page2.trigger(_parameters);
            }
            if (num == 3) {
                page3.trigger(_parameters);
                $(".page1").hide();
                $(".page2").hide();
                $(".page3").show();
                page3.trigger(_parameters);
            }

            $(this).bootpag({ total: 3, maxVisible: 3 });
        });



    }).catch(function () {
        console.log("error loading file canadacovid19.csv, please press F5 and try again");
    });






});

