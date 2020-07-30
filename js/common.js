var common_provincesList = ["British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "Newfoundland and Labrador", "New Brunswick", "Nova Scotia", "Prince Edward Island", "Yukon", "Northwest Territories", "Nunavut", "Repatriated travellers"];
const common_Canada = "Canada";
const common_parseTime = d3.timeParse("%d-%m-%Y");
const common_formatTime = d3.timeFormat("%d-%m-%Y");
const common_formatTime2 = d3.timeFormat("%d-%b-%Y");
const common_formatnumber = d3.format(",");
const common_datasource = "https://health-infobase.canada.ca/src/data/covidLive/covid19.csv";

function getProvinceIndex(provinceName) {
    for (var i = 0; i < common_provincesList.length; i++) {
        if (provinceName == common_provincesList[i]) {
                return i;
        }
    }
    return -1;
};
