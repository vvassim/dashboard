


               var jsoo={"data":" "}
               var jsontab;
               var ministere=[];
               var structureniv2=[]
            var  sumobj=[];        
               
                   
    $(document).ready(function(){
 var tab=false;
                $.getJSON("bailleur.json", function (data) {
                a=Object.keys(data);
               var string="<tr>";
                    for(var i=0;i<Object.keys(data[a][0]).length;i++){ 
                            string += "<th>" + Object.keys(data[a][0])[i] + "</th>" ;      
                    }
                    string +="</tr>"
                    $("#tab_head_data").append(string);
                    $("#tab_head_data_cp").append(string);
                $.each(data[a], function (k, v) {
                    var string="<tr>";
                    for(var i=0;i<Object.values(v).length;i++){ 
                        var d = Object.values(v)[i];
                        if(i==0)
                            string += "<td>" + d + "</td>" ;   
                        else
                            string += "<td id='ff'>" + d.replace(/,/g, ".") + "</td>" ;    
                    }
                    string +="</tr>"
                    $("#tab_body_data").append(string);
                    $("#tab_body_data_cp").append(string);
                });
                    var table = $('#tab').DataTable({
       dom: 'Bfrtip',
        buttons: [
            {
                extend: 'colvis',
                collectionLayout: 'fixed two-column'
            }
        ]
                    });
                    table.draw();
                    var tab = $('#ta').DataTable({
                    paging: false
                    }); 
                    tab.draw();
                    
     
                       
       $.fn.dataTable.ext.search.push(
          
    function( settings, data, dataIndex ) {
        
        var mini = $('#ministere').val()+'';
        var sct= $('#sct').val()+'';
        var strn2= $('#struniv2').val()+'';
        var strn3= $('#struniv3').val()+'';
        var bf= $('#bf').val()+'';
        var fe= $('#fe').val()+'';
        
        var tabmi = mini.split(',');
        var tabsct = sct.split(',');
        var tabstr2 = strn2.split(',');
        var tabstr3 = strn3.split(',');
        var tabbf = bf.split(',');
        var tabfe = fe.split(',');
       
        
        var minist = data[1];
        var secteur = data[10];
        var struniv2= data[4];
        var struniv3 = data[7];
        var bf1=data[11];
        var fe1=data[14];
        
        var c=data[17].split('/');
        c.reverse();
        var aux=c[2];
        c[2]=c[1];
        c[1]=aux;
         for(var i=1; i<c.length;i++){
         if(parseInt(c[i])<10)
             c[i]="0"+c[i]
        };
        var v="20"+c.join('/');
        var deb = new Date(v);
        var verifdate=true;
        
        if($('#max').val()!="" && $('#min').val()!=""){
          
            var maxdate=new Date($('#max').val());
            
            var mindate=new Date($('#min').val());
            
            if(mindate<=deb && deb<=maxdate){
                verifdate=true;
            }
            else
                verifdate=false;
        }
       
        var verif1 =true;
        var verif2 =true;
        var verif3 =true;
        var verif4 =true;
        var verif5 =true;
        var verif6 =true;
        
        for(var i=0;i<tabmi.length;i++){
        if ( minist == tabmi[i])
        {
            verif1=true;
            break;
        }
        else if (tabmi[i]=="null"){
             verif1=true;
        }
        else
        verif1=false;
        }
        
        if(tabsct[0] !='null'){
           
         for(i=0;i<tabsct.length;i++){
        if ( secteur == tabsct[i])
        {
            verif2=true;
            break;
        }
        else if (tabsct[i]=="null"){
             verif2=true;
        }
        else
        verif2=false;
        } 
        }
        
        if(tabstr2[0] !='null'){
         
         for(i=0;i<tabstr2.length;i++){
        if ( struniv2 == tabstr2[i])
        {
            verif3=true;
            break;
        }
        else if (tabstr2[i]=="null"){
             verif3=true;
        }
        else
        verif3=false;
        } 
        }
        
           if(tabstr3[0] !='null'){
           
         for(i=0;i<tabstr3.length;i++){
        if ( struniv3 == tabstr3[i])
        {
            verif4=true;
            break;
        }
        else if (tabstr3[i]=="null"){
             verif4=true;
        }
        else
        verif4=false;
        } 
        }
        
           if(tabbf[0] !='null'){
           
         for(i=0;i<tabbf.length;i++){
        if ( bf1 == tabbf[i])
        {
            verif5=true;
            break;
        }
        else if (tabbf[i]=="null"){
             verif5=true;
        }
        else
        verif5=false;
        } 
        }
        
           if(tabfe[0] !='null'){
           
         for(i=0;i<tabfe.length;i++){
        if ( fe1 == tabfe[i])
        {
            verif6=true;
            break;
        }
        else if (tabfe[i]=="null"){
             verif6=true;
        }
        else
        verif6=false;
        } 
        }
        return verif1 && verif2 && verif3 && verif4 && verif5 && verif6 && verifdate
    }
);
                    
        

                     $("#ministere,#bf,#fe,#sct,#struniv2,#struniv3,#datetimepicker7,#datetimepicker6").on(" change keyup dp.change ",function(e) {
                      table.draw(); 
        tab.draw(); 
        
      var mini = $('#ministere').val()+'';
        var sct= $('#sct').val()+'';
        var strn2= $('#struniv2').val()+'';
        var strn3= $('#struniv3').val()+'';
        var bf= $('#bf').val()+'';
        var fe= $('#fe').val()+'';
        
        var tabmi = mini.split(',');
        var tabsct = sct.split(',');
        var tabstr2 = strn2.split(',');
        var tabstr3 = strn3.split(',');
        var tabbf = bf.split(',');
        var tabfe = fe.split(',');
         
        if(tabmi[0] !='null'){                 
        jsontab = $('#ta').tableToJSON({
        ignoreHiddenRows:false,
        ignoreColumns:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]        
        });
        }
        
        if(tabsct[0] !='null'){                 
        jsontab = $('#ta').tableToJSON({
        ignoreHiddenRows:false,
        ignoreColumns:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17]        
        });
        }                 
        
        if(tabstr2[0] !='null'){                 
        jsontab = $('#ta').tableToJSON({
        ignoreHiddenRows:false,
        ignoreColumns:[0,1,2,3,5,6,8,9,10,11,12,13,14,15,16,17]        
        });
        }                 
        
        if(tabstr3[0] !='null'){                 
        jsontab = $('#ta').tableToJSON({
        ignoreHiddenRows:false,
        ignoreColumns:[0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17]        
        });
        } 
        
        if(tabbf[0] !='null'){                 
        jsontab = $('#ta').tableToJSON({
        ignoreHiddenRows:false,
        ignoreColumns:[0,1,2,3,4,5,6,8,7,9,10,12,13,14,15,16,17]        
        });
        }                  
        
        if(tabfe[0] !='null'){                 
        jsontab = $('#ta').tableToJSON({
        ignoreHiddenRows:false,
        ignoreColumns:[0,1,2,3,4,5,6,8,7,9,10,11,12,13,15,16,17]        
        });
        }                  
                         
        jsoo.data=jsontab;                   
        firstcolumn=[];
        sumobj=[]; 
         var row={"AbrMin":" ","MtFinanc":" ","MtEng":" ","MtPaie":" "}                   
         var mtfinance=0; 
         var mtfinance=0;   
         var mtpaie=0;                 
        for(var i=0;i<jsontab.length;i++){ 
             firstcolumn[i]=Object.values(jsontab[i])[0];  
                    }  
           firstcolumn=_.uniq(firstcolumn); 
           
        row={"AbrMin":" ","MtFinanc":" ","MtEng":" ","MtPaie":" "}           
        for(var j=0;j<firstcolumn.length;j++){                 
          $.each(jsontab, function (k, v) {
               
                    for(var i=0;i<Object.values(v).length;i++){
                        if( firstcolumn[j] == Object.values(v)[0]) {
                           
                            mtfinance = mtfinance + parseFloat(Object.values(v)[1].replace(/,/g, "."));    
                            mtfinance += parseFloat(Object.values(v)[2].replace(/,/g, "."));    
                            mtpaie  += parseFloat(Object.values(v)[3].replace(/,/g, "."));;
                           
                        }
                    } 
                    
          });
     
        row.AbrMin=firstcolumn[j]; 
        row.MtFinanc=mtfinance.toFixed(2).toString(); 
        row.MtEng=mtfinance.toFixed(2).toString(); 
        row.MtPaie=mtpaie.toFixed(2).toString();   
        sumobj.push(row); 
        row={"AbrMin":" ","MtFinanc":" ","MtEng":" ","MtPaie":" "}     
        mtfinance=0; 
        mtfinance=0;   
        mtpaie=0;     
        }
                         
        console.log(JSON.stringify(sumobj));         
                         
       charts(sumobj);
                     });
                    
        
});
    });

function charts(jsoo){
        var colortab = [];
        var datalabel = [];
        var barChartData = {
            labels: [],
            datasets: []
        };

        var data = {};
        var charts = [];
        
        $(document).ready(function () {
            
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each bar to be 2px wide and green
                    elements: {
                        rectangle: {
                            borderWidth: 1,
                            borderColor: 'rgb(0, 255, 0,0)',
                            borderSkipped: 'bottom'
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false,
                        text: 'table'
                    }
                }
            });

        });
    colortab=["rgba(88,71,185,.7)", "rgba(148,1,175,.7)", "rgba(224,27,53,.7)", "rgba(245,18,182,.7)", "rgba(4,118,215,.7)", "rgba(101,115,35,.7)", "rgba(142,100,146,.7)", "rgba(64,74,235,.7)", "rgba(6,239,175,.7)", "rgba(245,113,88,.7)", "rgba(170,253,232,.7)", "rgba(73,89,233,.7)", "rgba(200,151,186,.7)", "rgba(237,169,99,.7)", "rgba(48,230,223,.7)", "rgba(189,198,75,.7)", "rgba(203,103,223,.7)", "rgba(74,122,94,.7)", "rgba(201,34,117,.7)", "rgba(113,205,112,.7)", "rgba(107,156,180,.7)", "rgba(143,171,189,.7)", "rgba(181,174,13,.7)", "rgba(30,107,85,.7)", "rgba(12,159,207,.7)", "rgba(185,179,7,.7)", "rgba(239,155,148,.7)", "rgba(148,219,36,.7)", "rgba(170,127,188,.7)", "rgba(145,104,142,.7)", "rgba(160,142,217,.7)", "rgba(238,147,98,.7)", "rgba(13,241,148,.7)", "rgba(204,14,217,.7)", "rgba(48,220,91,.7)", "rgba(35,232,179,.7)", "rgba(202,171,7,.7)", "rgba(176,102,148,.7)", "rgba(123,19,135,.7)", "rgba(211,195,45,.7)", "rgba(130,119,221,.7)", "rgba(35,121,2,.7)", "rgba(165,131,21,.7)", "rgba(87,194,99,.7)", "rgba(240,126,131,.7)", "rgba(179,108,6,.7)", "rgba(93,53,128,.7)", "rgba(33,192,13,.7)", "rgba(29,224,203,.7)", "rgba(67,79,38,.7)"] 
         ;

        $(document).ready(function () {
            
         
           
            
            $('#chartt').on('click',function(){
               pushdata(jsoo); 
            });
            

               
            
                $('#tab_charth').empty();
                $("#tab_chartb").empty();
               var string="<tr>";
                    for(var i=0;i<Object.keys(jsontab[0]).length;i++){ 
                            string += "<th>" + Object.keys(jsontab[0])[i] + "</th>" ;      
                    }
                    string +="</tr>"
                    $("#tab_charth").append(string);
                $.each(jsoo, function (k, v) {
                    console.log(JSON.stringify(jsoo));
                    var string="<tr>";
                    for(var i=0;i<Object.values(v).length;i++){ 
                        if(i==0)
                            string += "<td>" + Object.values(v)[i] + "</td>" ;   
                        else
                            string += "<td id='ff'>" + Object.values(v)[i].replace(/,/g, ".") + "</td>" ;    
                    }
                    string +="</tr>"
                    $("#tab_chartb").append(string);
                });
                var isMouseDown = false;
                var startRowIndex = null;
                var startCellIndex = null;
                var shift = false;
                data = charts;

                function selectTo(cell) {

                    var row = cell.parent();
                    var cellIndex = cell.index();
                    var rowIndex = row.index();

                    var rowStart, rowEnd, cellStart, cellEnd;

                    if (rowIndex < startRowIndex) {
                        rowStart = rowIndex;
                        rowEnd = startRowIndex;
                    } else {
                        rowStart = startRowIndex;
                        rowEnd = rowIndex;
                    }

                    if (cellIndex < startCellIndex) {
                        cellStart = cellIndex;
                        cellEnd = startCellIndex;
                    } else {
                        cellStart = startCellIndex;
                        cellEnd = cellIndex;
                    }
                    data = []; //reset data
                    chart = {}; //reset data 
                    for (var i = rowStart; i <= rowEnd; i++) {
                        var rowCells = $("#table").find("tr").eq(i+1).find("td[id=ff]");
                        $("#table").find("tr").eq(i+1).children(":first").addClass("selected");
                        var headers = $("#tab_charth").find("tr").eq(0).find("th");

                        for (var j = cellStart - 1; j <= cellEnd - 1; j++) {
                            if (rowCells.eq(j).hasClass("selected")) {
                                rowCells.eq(j).removeClass("selected");
                                headers.eq(j + 1).removeClass("selected");

                            }
                            if (!rowCells.eq(j+1).hasClass("selected")) {

                                rowCells.eq(j).addClass("selected");
                                headers.eq(j + 1).addClass("selected");
                                var subject = $("#table").find("tr").eq(i+1).children(":first").html();
                                var value = rowCells.eq(j).html();
                                var key = headers.eq(j + 1).html();
                                chart[$("#tab_charth").find("tr").eq(0).find("th").eq(0).html()] = subject;
                                chart[key] = value;
                            }

                        }
                        data.push(chart);
                        chart = {};
                    }

                    pushdata(data);
                    $("#tab_charth").find("tr").eq(0).find("th").eq(0).addClass("selected");
                }

                function selectmax(cell) {

                    var row = cell.parent();
                    var cellIndex = cell.index();
                    var rowIndex = row.index();
                    var rowStart, rowEnd, cellStart, cellEnd;

                    if (rowIndex < startRowIndex) {
                        rowStart = rowIndex;
                        rowEnd = startRowIndex;
                    } else {
                        rowStart = startRowIndex;
                        rowEnd = rowIndex;
                    }

                    if (cellIndex < startCellIndex) {
                        cellStart = cellIndex;
                        cellEnd = startCellIndex;
                    } else {
                        cellStart = startCellIndex;
                        cellEnd = cellIndex;
                    }
                    data = []; //reset data
                    chart = {}; //reset data 
                    for (var i = rowStart; i <= rowEnd; i++) {
                        console.log(rowStart + "fffff" + rowEnd)
                        var rowCells = $("#table").find("tr").eq(i).find("td[id=ff]");
                        $("#table").find("tr").eq(i).children(":first").addClass("selected");
                        var headers = $("#tab_charth").find("tr").eq(0).find("th");
                        if (rowCells.eq(cellStart - 1).hasClass("selected")) {
                            rowCells.eq(cellStart - 1).removeClass("selected");
                            headers.eq(cellStart).removeClass("selected");

                        }
                        if (!rowCells.eq(cellStart - 1).hasClass("selected")) {
                            rowCells.eq(cellStart - 1).addClass("selected");
                            headers.eq(cellStart).addClass("selected");

                            var subject = $("#table").find("tr").eq(i).children(":first").html();
                            var value = rowCells.eq(cellStart - 1).html();
                            var key = headers.eq(cellStart).html();
                            chart[$("#tab_charth").find("tr").eq(0).find("th").eq(0).html()] = subject;
                            chart[key] = value;


                        }
                        if (rowCells.eq(cellEnd - 1).hasClass("selected")) {
                            rowCells.eq(cellEnd - 1).removeClass("selected");
                            headers.eq(cellEnd).removeClass("selected");
                        }
                        if (!rowCells.eq(cellEnd - 1).hasClass("selected")) {
                            rowCells.eq(cellEnd - 1).addClass("selected");
                            headers.eq(cellEnd).addClass("selected");
                            subject = $("#table").find("tr").eq(i).children(":first").html();
                            value = rowCells.eq(cellEnd - 1).html();
                            key = headers.eq(cellEnd).html();
                            chart[$("#tab_charth").find("tr").eq(0).find("th").eq(0).html()] = subject;
                            chart[key] = value;
                        }
                        data.push(chart);
                        chart = {};
                        pushdata(data);
                    }

                    JSON.stringify(data);
                    $("#tab_charth").find("tr").eq(0).find("th").eq(0).addClass("selected");
                }

                $("#table").find("td[id=ff]").mousedown(function (e) {
                        chart = {};
                        data = [];
                        isMouseDown = true;
                        var cell = $(this);
                        var cellIndex = cell.parent().index();
                        data = []; //reset data
                        chart = {}; //reset data
                        var rowCells = $("#table").find("tr").eq(cell.index()).find("td[id=ff]");
                         $("#table").find("tr").eq(cell.index()).children(":first").addClass("selected");
                        var headers = $("#tab_charth").find("tr").eq(0).find("th");

                        var subject = $("#table").find("tr").eq(cellIndex+1).children(":first").html();
                        var value = cell.html();
                        var key = headers.eq(cell.index()).html();
                        chart[$("#tab_charth").find("tr").eq(0).find("th").eq(0).html()] = subject;
                        chart[key] = value;

                        data.push(chart);
                        pushdata(data);
                        $("#table").find(".selected").removeClass("selected"); // deselect everythin
                        if (e.shiftKey) {
                            shift = true;
                            selectmax(cell);
                        } else {

                            if (!cell.hasClass("selected")) {
                                cell.addClass("selected");
                            }
                            if ($(this).hasClass("selected")) {
                                $("#table").find("tr").eq(cellIndex+1).children(":first").addClass("selected");
                                $("#tab_charth").find("tr").eq(0).find("th").eq(cell.index()).addClass("selected");
                                $("#tab_charth").find("tr").eq(0).find("th").eq(0).addClass("selected");
                                startCellIndex = cell.index();
                                startRowIndex = cell.parent().index();

                            }
                        }
                       
                        return false; // prevent text selection
                    })
                    .mouseover(function () {
                        if (!isMouseDown && !shift) return;
                        if (!shift) {
                            $("#table").find(".selected").removeClass("selected")
                        };
                        if (isMouseDown && !shift) {
                            selectTo($(this));
                        }
                        if (isMouseDown && shift) {
                            selectmax($(this));
                        }
                        if (event.shiftKey) {

                        } else {
                            shift = false;
                        }

                    })
                    .bind("selectstart", function () {
                        return false;
                    });


                $(document).mouseup(function () {
                    isMouseDown = false;

                });



            



        });

        function pushdata(data) {
            console.log("hi"+JSON.stringify(data));
            datalabel = [];
            var datasets = [];
            var newDataset = {
                label: " ",
                backgroundColor: "rgba(81,123,235,.7)",
            };

            for (var i = 0; i < data.length; i++) {
                datalabel[i] = Object.values(data[i])[0];
            }
            barChartData.labels = datalabel;

             while(barChartData.datasets.length>0){
                barChartData.datasets.pop();
             };
           
            for (var j = 1; j < Object.keys(data[0]).length; j++) {

                for (var i = 0; i < data.length; i++) {
                    datasets[i] = parseFloat(Object.values(data[i])[j]);
                    newDataset.label = Object.keys(data[0])[j];
                }
                // console.log(j);

                
               

                newDataset.data = datasets;
                barChartData.datasets.push(newDataset);
                
                datasets = [];
                newDataset = {
                    label: " ",
                    backgroundColor: colortab[j]
                };

            }
             
            window.myBar.destroy();
            myBar.destroy()
            var ctx = document.getElementById("canvas").getContext("2d");
            myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each bar to be 2px wide and green
                    elements: {
                        rectangle: {
                            borderWidth: 1,
                            borderColor: 'rgb(0, 255, 0,0)',
                            borderSkipped: 'bottom'
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false,
                        text: 'table'
                    }
                }
            });
        
        }

        function color() {
            return Math.round(Math.random() * 255);
        };

        function rgbfactory() {
            return 'rgba(' + color() + ',' + color() + ',' + color() + ',.7)';
        }; 
    window.onload=function(){
        pushdata(jsontab);
    }
                };

        


