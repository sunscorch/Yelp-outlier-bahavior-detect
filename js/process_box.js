function process_box() {
var trace1 = {
  y: data_box[0],
  type: 'box',
  name: 'selected month'
};
    
var trace1_1 = {
  y: data_box1[1],
  type: 'box',
  boxpoints: false,
  name: 'total month'
};

var trace2 = {
  y: data_box[1],
  type: 'box',
  boxpoints: false,
  name: 'selected review_count'
};

var trace2_1 = {
  y: data_box1[0],
  type: 'box',
  boxpoints: false,
  name: 'total review_count'
};  
var trace3 = {
  y: data_box[2],
  type: 'box',
  boxpoints: false,
  name: 'selected stars'
};
var trace3_1 = {
  y: data_box1[2],
  type: 'box',
  boxpoints: false,
  name: 'total stars'
};

var trace4 = {
  y: data_box[3],
  type: 'box',
  boxpoints: false,
  name: 'selected freinds'
};
var trace4_1 = {
  y: data_box1[3],
  type: 'box',
  boxpoints: false,
  name: 'total friend'
};
    
var trace5 = {
  y: data_box[4],
  type: 'box',
  boxpoints: false,
  name: 'selected text_length'
};
var trace5_1 = {
  y: data_box1[4],
  type: 'box',
  boxpoints: false,
  name: 'total text_length '
};

var trace6 = {
  y: data_box[5],
  type: 'box',
  boxpoints: false,
  name: 'selected num_business'
};
var trace6_1 = {
  y: data_box1[5],
  type: 'box',
  boxpoints: false,
  name: 'total num_business '
};

var trace7 = {
  y: data_box[6],
  type: 'box',
  boxpoints: false,
  name: 'selected review_per_bus'
};
var trace7_1 = {
  y: data_box1[6],
  type: 'box',
  boxpoints: false,
  name: 'total review_per_bus '
};
    
var trace8 = {
  y: data_box[7],
  type: 'box',
  boxpoints: false,
  name: 'selected pro_cool'
};
var trace8_1 = {
  y: data_box1[7],
  type: 'box',
  boxpoints: false,
  name: 'total pro_cool '
};
    
var trace9 = {
  y: data_box[8],
  type: 'box',
  boxpoints: false,
  name: 'selected pro_funny'
};
var trace9_1 = {
  y: data_box1[8],
  type: 'box',
  boxpoints: false,
  name: 'total pro_funny '
};
    
var trace10 = {
  y: data_box[9],
  type: 'box',
  boxpoints: false,
  name: 'selected pro_useful'

};
var trace10_1 = {
  y: data_box1[9],
  type: 'box',
  boxpoints: false,
  name: 'total pro_useful '
};
    var layout1 = {
  xaxis: {
    showticklabels: false,
    title:'month & review count'
  },
  boxpoints: false
};
     var layout2 = {
  xaxis: {
    showticklabels: false,
    title:'proportion of three kinds of votes'
  },
 
};
    var layout3 = {
  xaxis: {
    showticklabels: false,
      title:'rating stars'
  },
  width:300,
  height:300,
 showlegend:false
};
var layout4 = {
  xaxis: {
    showticklabels: false,
    title:'freinds count'
  },
  width:300,
  height:300,
 showlegend:false
};
var layout5 = {
  xaxis: {
    showticklabels: false,
    title:'text length'
  },
  width:300,
  height:300,
boxpoints: false,
 showlegend:false
};
var layout6 = {
  xaxis: {
    showticklabels: false,
    title:'number of business'
  },
  width:300,
  height:300,
 showlegend:false
};
var layout7 = {
  xaxis: {
    showticklabels: false,
    title:'review per busniess'
  },
  width:300,
  height:300,
 showlegend:false
};

var data_plot = [trace1, trace1_1,trace2, trace2_1];
var data_plot2 = [trace8, trace8_1,trace9,trace9_1,trace10,trace10_1];
var data_plot3 = [trace3, trace3_1];
var data_plot4 = [trace4, trace4_1];
var data_plot5 = [trace5, trace5_1];
var data_plot6 = [trace6, trace6_1];
var data_plot7 = [trace7, trace7_1];
    
Plotly.newPlot("month", data_plot,layout1);
Plotly.newPlot("comparison",data_plot2,layout2);  
Plotly.newPlot("star",data_plot3,layout3);
Plotly.newPlot("friend",data_plot4,layout4);
Plotly.newPlot("text",data_plot5,layout5);
Plotly.newPlot("nb",data_plot6,layout6);
Plotly.newPlot("rpb",data_plot7,layout7);
}
    
