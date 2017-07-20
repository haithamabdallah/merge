Chart.defaults.global = {

  // Boolean - Whether to animate the chart
  animation: true,

  // Number - Number of animation steps
  animationSteps: 60,

  // String - Animation easing effect
  animationEasing: "easeOutBack",

  // Boolean - If we should show the scale at all
  showScale: true,

  // Boolean - If we want to override with a hard coded scale
  scaleOverride: false,

  // ** Required if scaleOverride is true **
  // Number - The number of steps in a hard coded scale
  scaleSteps: null,
  // Number - The value jump in the hard coded scale
  scaleStepWidth: null,
  // Number - The scale starting value
  scaleStartValue: null,

  // String - Colour of the scale line
  scaleLineColor: "rgba(0,0,0,.1)",

  // Number - Pixel width of the scale line
  scaleLineWidth: 1,

  // Boolean - Whether to show labels on the scale
  scaleShowLabels: true,

  // Interpolated JS string - can access value
  scaleLabel: "<%=value%>",

  // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
  scaleIntegersOnly: true,

  // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: false,

  // String - Scale label font declaration for the scale label
  scaleFontFamily: "'Roboto', sans-serif",

  // Number - Scale label font size in pixels
  scaleFontSize: 12,

  // String - Scale label font weight style
  scaleFontStyle: "normal",

  // String - Scale label font colour
  scaleFontColor: "#808080",

  // Boolean - whether or not the chart should be responsive and resize when the browser does.
  responsive: true,

  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio: true,

  // Boolean - Determines whether to draw tooltips on the canvas or not
  showTooltips: true,

  // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
  customTooltips: false,

  // Array - Array of string names to attach tooltip events
  tooltipEvents: ["mousemove", "touchstart", "touchmove"],

  // String - Tooltip background colour
  tooltipFillColor: "rgba(0,0,0,0.8)",

  // String - Tooltip label font declaration for the scale label
  tooltipFontFamily: "'Roboto', sans-serif",

  // Number - Tooltip label font size in pixels
  tooltipFontSize: 12,

  // String - Tooltip font weight style
  tooltipFontStyle: "normal",

  // String - Tooltip label font colour
  tooltipFontColor: "#fff",

  // String - Tooltip title font declaration for the scale label
  tooltipTitleFontFamily: "'Roboto', sans-serif",

  // Number - Tooltip title font size in pixels
  tooltipTitleFontSize: 14,

  // String - Tooltip title font weight style
  tooltipTitleFontStyle: "bold",

  // String - Tooltip title font colour
  tooltipTitleFontColor: "#fff",

  // Number - pixel width of padding around tooltip text
  tooltipYPadding: 6,

  // Number - pixel width of padding around tooltip text
  tooltipXPadding: 6,

  // Number - Size of the caret on the tooltip
  tooltipCaretSize: 8,

  // Number - Pixel radius of the tooltip border
  tooltipCornerRadius: 6,

  // Number - Pixel offset from point x to tooltip edge
  tooltipXOffset: 10,

  // String - Template string for single tooltips
  tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

  // String - Template string for multiple tooltips
  multiTooltipTemplate: "<%= value %>",

  // Function - Will fire on animation progression.
  onAnimationProgress: function() {},

  // Function - Will fire on animation completion.
  onAnimationComplete: function() {}
};

// BEGIN POLAR DATA ============================================

//top left
var barData = {
  labels: ["Slurry", "Phosphate Rock"],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(255,177,193,1)",
    strokeColor: "rgba(255,177,193,1)",
    data: [1000000, 2003000]
  }, {
    label: "My Second dataset",
    fillColor: "rgba(154,208,245,1)",
    strokeColor: "rgba(154,208,245,1)",
    data: [1020000, 3003000]
  }, {
    label: "My third dataset",
    fillColor: "rgba(255,230,170,1)",
    strokeColor: "rgba(255,230,170,1)",
    data: [1700000, 1203000]
  }, {
    label: "My fourth dataset",
    fillColor: "rgba(165,223,223,1)",
    strokeColor: "rgba(165,223,223,1)",
    data: [1700000, 2503000]
  }]
};
var barOptions = {

  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: true,

  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: true,

  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth: 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: false,

  //Boolean - If there is a stroke on each bar
  barShowStroke: true,

  //Number - Pixel width of the bar stroke
  barStrokeWidth: 1,

  //Number - Spacing between each of the X value sets
  barValueSpacing: 50,

  //Number - Spacing between data sets within X values
  barDatasetSpacing: 7,

  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var barCtx = document.getElementById("phosphate").getContext("2d");
var myBarChart = new Chart(barCtx).Bar(barData, barOptions);
//top left

//bottom left
var waterbarData = {
  labels: ["Sidi Cheanne", "merah Lahrach", "Bani Amir", "Transportation"],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(255,177,193,1)",
    strokeColor: "rgba(255,177,193,1)",
    data: [500, 300, 550, 100]
  }, {
    label: "My Second dataset",
    fillColor: "rgba(154,208,245,1)",
    strokeColor: "rgba(154,208,245,1)",
    data: [600, 200, 123, 120]
  }, {
    label: "My third dataset",
    fillColor: "rgba(255,230,170,1)",
    strokeColor: "rgba(255,230,170,1)",
    data: [90, 220, 240, 250]
  }, {
    label: "My fourth dataset",
    fillColor: "rgba(165,223,223,1)",
    strokeColor: "rgba(165,223,223,1)",
    data: [124, 123, 444, 222]
  }]
};
var waterOptions = {
  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: true,

  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: true,

  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth: 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: false,

  //Boolean - If there is a stroke on each bar
  barShowStroke: true,

  //Number - Pixel width of the bar stroke
  barStrokeWidth: 1,

  //Number - Spacing between each of the X value sets
  barValueSpacing: 15,

  //Number - Spacing between data sets within X values
  barDatasetSpacing: 4,

  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var waterbar = document.getElementById("water").getContext("2d");
var mywaterBarChart = new Chart(waterbar).Bar(waterbarData, waterOptions);
//bottom left

//top right
var stackedbardata = {
  labels: ["Slurry", "Phosphate Rock"],
  datasets: [{
    label: "BAU",
    stack: 'Stack 0',
    fillColor: "rgba(255,177,193,1)",
    strokeColor: "rgba(255,177,193,1)",
    data: [1000000, 2003000]
  }, {
    label: "Scenario 01",
    stack: 'Stack 0',
    fillColor: "rgba(154,208,245,1)",
    strokeColor: "rgba(154,208,245,1)",
    data: [1020000, 3003000]
  }, {
    label: "Scenario 02",
    stack: 'Stack 0',
    fillColor: "rgba(255,230,170,1)",
    strokeColor: "rgba(255,230,170,1)",
    data: [1700000, 1203000]
  }, {
    label: "Scenario 03",
    stack: 'Stack 0',
    fillColor: "rgba(165,223,223,1)",
    strokeColor: "rgba(165,223,223,1)",
    data: [1700000, 2503000]
  }]
};
var stackedbaroption = {

  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: true,

  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: true,

  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth: 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: false,

  //Boolean - If there is a stroke on each bar
  barShowStroke: true,

  //Number - Pixel width of the bar stroke
  barStrokeWidth: 1,

  //Number - Spacing between each of the X value sets
  barValueSpacing: 50,

  //Number - Spacing between data sets within X values
  barDatasetSpacing: 7,

  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var stacked = document.getElementById("phosphatetotal").getContext("2d");
var mystackedBarChart = new Chart(stacked).Bar(stackedbardata, stackedbaroption);
//top right


//top right
var stackedbardata2 = {
  labels: ["Slurry", "Phosphate Rock"],
  datasets: [{
    label: "BAU",
    stack: 'Stack 0',
    fillColor: "rgba(255,177,193,1)",
    strokeColor: "rgba(255,177,193,1)",
    data: [1000000, 2003000]
  }, {
    label: "Scenario 01",
    stack: 'Stack 0',
    fillColor: "rgba(154,208,245,1)",
    strokeColor: "rgba(154,208,245,1)",
    data: [1020000, 3003000]
  }, {
    label: "Scenario 02",
    stack: 'Stack 0',
    fillColor: "rgba(255,230,170,1)",
    strokeColor: "rgba(255,230,170,1)",
    data: [1700000, 1203000]
  }, {
    label: "Scenario 03",
    stack: 'Stack 0',
    fillColor: "rgba(165,223,223,1)",
    strokeColor: "rgba(165,223,223,1)",
    data: [1700000, 2503000]
  }]
};
var stackedbaroption2 = {

  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: true,

  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: true,

  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth: 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: false,

  //Boolean - If there is a stroke on each bar
  barShowStroke: true,

  //Number - Pixel width of the bar stroke
  barStrokeWidth: 1,

  //Number - Spacing between each of the X value sets
  barValueSpacing: 50,

  //Number - Spacing between data sets within X values
  barDatasetSpacing: 7,

  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var stacked2 = document.getElementById("phosphatetotal2").getContext("2d");
var mystackedBarChart2 = new Chart(stacked2).Bar(stackedbardata2, stackedbaroption2);
//top right

// var barChartData = {
//             labels: ["January", "February", "March", "April", "May", "June", "July"],
//             datasets: [{
//                 label: 'Dataset 1',
//                 fillColor: "rgba(154,208,245,1)",
//                 data: [1700000, 2503000]
//             }, {
//                 label: 'Dataset 2',
//                 fillColor: "rgba(255,230,170,1)",
//                 data: [1700000, 1203000]
//             }, {
//                 label: 'Dataset 3',
//                 fillColor: "rgba(165,223,223,1)",
//                 data: [1203000, 1700000]
//             }]

//         };
        
//             var ctx = document.getElementById("canvas").getContext("2d");
//             window.myBar = new Chart(ctx, {
//                 type: 'bar',
//                 data: barChartData,
//                 options: {
//                     title:{
//                         display:true,
//                         text:"Chart.js Bar Chart - Stacked"
//                     },
//                     tooltips: {
//                         mode: 'index',
//                         intersect: false
//                     },
//                     responsive: true,
//                     scales: {
//                         xAxes: [{
//                             stacked: true,
//                         }],
//                         yAxes: [{
//                             stacked: true
//                         }]
//                     }
//                 }
//             });


