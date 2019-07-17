//this is attached to the body tag in the html, we tell it to run onload of the page
function onload(){
    //Set our title information
    createTitle()

    //set our apInvHead
    createApInvHead()

    //create our apInvLines
    createApInvLines()

    //create apInvFooter
    createApInvFooter()
}

function createTitle(){
    //create the html elements here
    let titleDiv1 = document.getElementById('apInvTitle1')
    titleDiv1.classList = 'col-8 mr-auto ml-auto'
    let titleDiv2 = document.getElementById('apInvTitle2')
    titleDiv2.classList = 'col-8 mr-auto ml-auto'
    let var1 = document.createElement("H4")
    var1.innerText = 'Accounts Payable - Invoice'
    titleDiv2.append(var1)
}

function createApInvHead(){
    let apInvHead = document.getElementById('apInvHeader')
    var invoiceHeader= [
        {
            "Name":"Invoice Number:",
            "Value":"1234"
        },
        {   
            "Name":"Invoice Date:",
            "Value":"04/15/1994"
        },
        {
            "Name":"Vendor Name:",
            "Value":"Bank of America"
        },
        {
            "Name":"Vendor Number:",
            "Value":"1459"
        },
         
    ]
    var invInfo = document.getElementById('invInfo')
    var invInfoDetail = document.getElementById('invInfoDetail')
    var table = document.createElement('table')
    table.classList = "table table-borderless"
    var tableBody = table.createTBody()

    for (field of invoiceHeader){
        var tRow = tableBody.insertRow()
        var cell1 = tRow.insertCell()
        cell1.classList="h5"
        var cell2 = tRow.insertCell()
        cell2.classList="h6"
        cell1.innerHTML=field.Name
        cell2.innerHTML=field.Value
    }

    invInfo.append(table)
    invInfoDetail.append(table)

    var addressHeader = [
        {
            "SectionName":"Bill To:",
            "CoName":"New Hanover Regional Medical Center",
            "Addr1":"2131 S 17th St",
            "Addr2": "",
            "Addr3":"Wilmington, NC 28401"
        },
        {
            "SectionName":"Remit To:",
            "CoName":"Bank of America",
            "Addr1":"1459 Some St",
            "Addr2": "",
            "Addr3":"Charlotte, NC 28401"
        }    
    ]
    var addressInfo = document.getElementById('addrInfo')
    for (section of addressHeader){
        Object.keys(section).map((key) =>{
            if (key == "SectionName"){
                let cell1 = document.createElement('h4')
                cell1.classList = "h4"
                cell1.innerHTML = section[key]
                addressInfo.append(cell1)
            }else{
                let cell2 = document.createElement('h6')
                cell2.classList = "h6"
                cell2.innerHTML = section[key]
                addressInfo.append(cell2)
            }
        })
    }
}

function createApInvLines(){
    var data = [
        {
            "Dept":"9010",
            "Account":"850060",
            "Line Amount":"100",
        },
        {
            "Dept":"9011",
            "glAccount":"850061",
            "Line Amount":"101",
        },
        {
            "Dept":"9012",
            "Account":"850062",
            "Line Amount":"102",
        },     
    ]
    let apInvLines = document.getElementById('apInvLines')
    let invLinesTable = document.createElement('table')
    invLinesTable.classList = "table table-striped bordered"
    var invLinesHead = invLinesTable.createTHead()
    var invLinesHeadRow = invLinesHead.insertRow()
    var invLinesBody = invLinesTable.createTBody()
    invLinesHead.classList = "h5"

    for (key in data[0]){
        var cell = invLinesHeadRow.insertCell()
        cell.innerHTML = key
    }
        for (line of data){
            var lineRow = invLinesBody.insertRow()
            Object.values(line).map((value) =>{
                    let cell1 = lineRow.insertCell()
                    cell1.classList = "h6"
                    cell1.innerHTML = value
            }) 
    }
    
    apInvLines.append(invLinesTable)
    
    //Create the table
    //Create the table header
    //create the table header columns
    //create the tbody
    //loop over our data to do the below
    //create the body row
    //create the body row columns and populate with data
}

function createApInvFooter(){
    let footerDiv = document.getElementById('apInvFooter')
    footerDiv.classList = 'col-8 ml-auto mr-auto'
    let var1 = document.createElement("H4")
    var1.innerText = 'Approval Stamp Here'
    footerDiv.append(var1)
}