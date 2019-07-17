<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/page">
        <html>
            <title>
                AP Invoice Template
            </title>
            <!-- this auto imports the bootstrap css, just type in the class names on elements -->
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            
            <!-- this imports our script file -->
            <script src="script.js"></script>

            <!-- this import moment.js, which is used to parse dates, when you moment in the script.js file, it is referencing this -->
            <script src="https://momentjs.com/downloads/moment.js"></script>
            
            <body onload="onload()">
                <!-- give the page a nice header -->
                <div class="col-8 mr-auto" id="apInvTitle"></div>

                <!-- give the page our ap invoice header information -->
                <!-- it is okay to hard code the html for the header information -->
                <div class="col-8 mr-auto" id="apInvHeader"></div>

                <!-- give our page the invoice line details -->
                <div class="col-8 mr-auto" id="apInvLines"></div>

                <!-- give our page the footer information, stamps, etc. -->
                <div class="col-8 mr-auto" id="apInvFooter"></div>
            </body>
        </html>
	</xsl:template>
</xsl:stylesheet>