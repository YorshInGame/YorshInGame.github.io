//Get this by file->share->publish->one sheet csv
var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSrLRfEaNXvQV3sqbMZJ6OuBL-68wIczR-QgbK4gm7KoNY8xfUBTrOA4zr5p1x6VbobawNnkh0hfgLS/pub?gid=1512174972&single=true&output=csv'

function grabCell(data, gameName){
    if(data.length<50)
       return "error (fecthing values)";
    
    //ParseCSV
    var re=/\r\n|\n\r|\n|\r/g;
    var csv = data.replace(re,',').split(',');
    for(var i = 0;i<csv.length;i++)
    {
        var candidateName = csv[i];
        if(candidateName == gameName){
            return csv[i+1];
        }
    }

    return "error";
}


/*
function grabCell(data, gameName){
    //Remove useless data
    var jsonString = data.substring(47).slice(0, -2);
    
    return data;
    
    //Parse JSON
    try{var json = JSON.parse(jsonString)}
    catch(e){return "error (parsing)"}
    
    //Foreach line
    for(var i = 0;i<json.table.rows.length;i++)
    {
        //Get the line data
        var line = json.table.rows[i];
        
        var cellule = line.c[0];
        //Get game name on this row
        try{var candidateName = cellule.f ? cellule.f : cellule.v}
        catch(e){candidateName = ''}
        
        if(candidateName == gameName){
                cellule = line.c[1];
                try{var valeur = cellule.f ? cellule.f : cellule.v}
                catch(e){valeur = ''}
                return valeur;
        }
    }

    return "error (value)";
}*/  