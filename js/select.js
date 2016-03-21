 //select=[]; // used for push selected dots
        // id=[];
        //Data used in this example
        d3.csv("sample1.csv", function(result){
            dataloaded(result);
            showViz(data);
        })
         function dataloaded(result){
              data = result.map(function(d){
                return {
                    id:             d.user_id,
                    X:              d.x,
                    Y:              d.y,
                    star:           +d.stars,
                    review_count:   +d.review_count,
                    how_long_month: +d.how_long_month,
                    friends:        +d.friends,
                    text_length:    +d.text_length,
                    num_business:   +d.num_business,
                    review_per_bus  :+d.review_per_bus,
                    pro_cool:       +d.pro_cool,
                    pro_funny:      +d.pro_funny,
                    pro_useful:     +d.pro_useful
                }
            })
         }
            
        function showViz(data) {
            //Set the width of the SVG to 600px and set the height
            var svg = d3.select("#viz").attr("width", 500)
                                       .attr("height",500); 
            selected=[];
            // select=[]; // used for push selected dots
            // id=[];
            var width = 600;
            var height = 470;
            //Create a scale to map x,y
            var scaleX = d3.scale.linear().range([10,450]);
            var scaleY = d3.scale.linear().range([10,450]);
        
            //Set the domain to be from 0 to the maximum GDP
//            scaleX.domain([-20.237599253302083,19.175607283884951]);
            scaleX.domain([-23,18]);
            //fff = Math.max(data, function(d) { return d.X; });
            //console.log(fff)
//            scaleY.domain([16.792640838200663,-16.797157361761081]);
            scaleY.domain([17,-17]);
            
            var axisX = d3.svg.axis().scale(scaleX).ticks(0).orient("buttom");
            var axisY = d3.svg.axis().scale(scaleY).ticks(0).orient("left");
            
            //Select the element that will hold the viz
            var selection = d3.select("#viz") 
                //Create virtual elements to be bound to the data
                .selectAll("circle") 
                //Bind each future 'circle' elements with each item in the data
                .data(data, function(d) { return d.id; }); 
            
            //enter -> Operate only in new elements
            selection.enter() 
                //Create a real 'circle' element for each item in the data
                .append("circle") 
                //Set the radius of the circle to 5px, and position the circle according with the GDP on the x axis
                .attr({
                    r: 3,
                    cx: function(d) { return scaleX(d.X) },
                    cy: function(d) { return scaleY(d.Y)}
                });
//                on('mouseover',function(d){
//                     d3.select(this)
//                       .attr("r",10);
//                
//                var tooltip = d3.select("#tooltip");
//                tooltip.select("#user_id").text(d.id);
//               
//               
//                tooltip.style({
//                    'display':'block',
//                    'top':d3.event.y+10,
//                    'left': d3.event.x+10
//                })
//                
//            }).on('mouseout',function(){
//               d3.select(this)
//                .attr("r",3);
//                
//                d3.select("#tooltip").style({
//                    'display': 'none'
//                })
//                 }).on('contextmenu',function(d,i){
//               d3.event.preventDefault();
//                data.splice(i,1);
//                d3.select(this).remove();
//            });
            //console.log(data);
               d3.select("#viz").append("g")
                 .attr("transform","translate(30,445)")
                 .call(axisX);
               d3.select("#viz").append("g")
                 .attr("transform","translate(40,-5)")
                 .call(axisY);
            //end of scatterplot 
   //start to develop group selection part         
            var defaultExtent = [[0, 0], [0,0]];
             select = [];
             id =[];
             
            var brushes = d3.svg.brush()
                              .x(scaleX)
                              .y(scaleY)
                              .extent(defaultExtent)
                              .on("brush", brushed);
            
            svg.append("g")
               .attr("class", "brush").call(brushes).call(brushes.event);
  
        
        }
             
         
        function brushed() {
                    var selected = d3.select(".extent");
                    var sel_x1 = parseInt(selected.attr("x"));
                    var sel_x2 = parseInt(selected.attr("width")) + sel_x1;
                    var sel_y1 = parseInt(selected.attr("y"));
                    var sel_y2 = parseInt(selected.attr("height")) + sel_y1;
	                select = [];
                    id = [];
                    data_box=[];
                    data_box1=[];
                    var n=0;
	               d3.selectAll("circle").each(function(el){
                            n++;
                            var selected_DOM = d3.select(this);
                            
                            var selected_cx = parseInt(selected_DOM.attr("cx"));
                            var selected_cy = parseInt(selected_DOM.attr("cy"));

                            if ((sel_x2 >= selected_cx &&  selected_cx >= sel_x1) && (sel_y2 >= selected_cy &&  selected_cy >= sel_y1)) {
                                
                               // selected_DOM.classed("selected", true);
                                
                            if($.inArray(el['id'],id)==-1){
                            id.push(el['id']);
                            var elem = el;
                            select.push(elem);
                            selected_DOM.classed("selected", true);
                            //console.log(el['id'])
                            //prepare data for box
                            var r = elem.review_count,
                                s = elem.how_long_month,
                                str = elem.star,
                                fds= elem.friends,
                                txt = elem.text_length,
                                nb  = elem.num_business,
                                rpb = elem.review_per_bus,
                                pc  = elem.pro_cool,
                                pf  = elem.pro_funny,
                                pu  = elem.pro_useful,
                            d = data_box[0];//month
                            if (!d) d = data_box[0] = [s];
                            else d.push(s);
                            d1 = data_box[1];//review count
                            if (!d1) d1 = data_box[1] = [r];
                            else d1.push(r); 
                            d2 = data_box[2];//star
                            if (!d2) d2 = data_box[2] = [str];
                            else d2.push(str); 
                                
                            d31 = data_box[3];
                            if (!d31) d31 = data_box[3] = [fds];
                            else d31.push(fds); 
                                
                            d4 = data_box[4];
                            if (!d4) d4 = data_box[4] = [txt];
                            else d4.push(txt); 
                            
                             d5 = data_box[5];
                            if (!d5) d5 = data_box[5] = [nb];
                            else d5.push(nb);
                            
                            d6 = data_box[6];
                            if (!d6) d6 = data_box[6] = [rpb];
                            else d6.push(rpb);
                                
                            d7 = data_box[7];
                            if (!d7) d7 = data_box[7] = [pc];
                            else d7.push(pc);
                            
                            d8 = data_box[8];
                            if (!d8) d8 = data_box[8] = [pf];
                            else d8.push(pf);
                                
                            d9 = data_box[9];
                            if (!d9) d9 = data_box[9] = [pu];
                            else d9.push(pu);
                            }}else {
                                //console.log(1111)
                                selected_DOM.classed("selected", false);
                                    }
                       
                            var total0 = el.review_count;
                            t0 = data_box1[0];
                            if (!t0) t0 = data_box1[0] = [total0];
                            else t0.push(total0);
                            
                            var total1 = el.how_long_month;
                            t1 = data_box1[1];
                            if (!t1) t1 = data_box1[1] = [total1];
                            else t1.push(total1);
                              
                             var total2 = el.star;
                             t2 = data_box1[2];
                            if (!t2) t2 = data_box1[2] = [total2];
                            else t2.push(total2);
                            
                           var total3 = el.friends;
                            t3 = data_box1[3];
                            if (!t3) t3 = data_box1[3] = [total3];
                            else t3.push(total3);
                            
                            var total4 = el.text_length;
                            t4 = data_box1[4];
                            if (!t4) t4 = data_box1[4] = [total4];
                            else t4.push(total4);
                            
                            var total5 = el.num_business;
                            t5 = data_box1[5];
                            if (!t5) t5 = data_box1[5] = [total5];
                            else t5.push(total5);
                            
                            var total6 = el.review_per_bus;
                            t6 = data_box1[6];
                            if (!t6) t6 = data_box1[6] = [total6];
                            else t6.push(total6);
                          
                            var total7 = el.pro_cool;
                            t7 = data_box1[7];
                            if (!t7) t7 = data_box1[7] = [total7];
                            else t7.push(total7);
                       
                            var total8 = el.pro_funny;
                            t8 = data_box1[8];
                            if (!t8) t8 = data_box1[8] = [total8];
                            else t8.push(total8);
                       
                            var total9 = el.pro_useful;
                            t9 = data_box1[9];
                            if (!t9) t9 = data_box1[9] = [total9];
                            else t9.push(total9);
                       
                   }).transition().each('end',
                           function(){
                           n--;
                           if(n===0){
                               
                               if(select.length > 0){
                          
                                   process_data(select);
                                   if(data_box.length >0)
                                   process_box();
                                   d3.select("#selNum").text("There are "+select.length+" elements selected")
                                   console.log(data_box.length)
                               }
                           }});//end of circle
            }