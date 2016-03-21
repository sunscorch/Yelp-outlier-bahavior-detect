    function process_data(d) {
       var count_star = [0,0,0,0,0];
     for(var i = 0; i < d.length; i++)
     {    switch(true) {
            case (d[i].star >= 0 && d[i].star <= 1):
                count_star[0]++;
            case (d[i].star > 1 && d[i].star <= 2):
                count_star[1]++;
            case (d[i].star > 2 && d[i].star <= 3):
                count_star[2]++;
            case (d[i].star> 3 && d[i].star <= 4):
                count_star[3]++;
            case (d[i].star > 4 && d[i].star <= 5):
                count_star[4]++;
     }
        }
    
        if(count_star[0] || count_star[1] || count_star[2] || count_star[3] || count_star[4]) {
           pie_chart(count_star);    
        
        }
            
    }

    function map_data(d){
         data1 = 
          [
        {
          name:   'one star',
          number:    d[0]},
         
        {
          name:   'two star',
          number:    d[1]},
        
        {
          name:   'three star',
          number:    d[2]},
        
        {
          name:   'four star',
          number:    d[3]},
        {
          name:   'five star',
          number:    d[4]},
        
         ];
        
        }
        
    

    function pie_chart(d) {
        map_data(d);
        showpie(data1);
    }


    function showpie(data1){
    var width = 200,
    height = 200,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.svg.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.number; });

var vis = d3.select("#pie_chart")
    .data([data1])
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



  var g = vis.selectAll(".arc")
      .data(pie)
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .attr("fill", function(d,i) { return color(i); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d,i) { return data1[i].name; });

}

