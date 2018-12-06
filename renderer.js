// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.$ = window.jquery = require('./node_modules/jquery');
window.dt = require('./node_modules/datatables.net')();
window.buttons  = require('./node_modules/datatables.net-buttons')();
window.Papa = require('./node_modules/papaparse');

var dataval;

Papa.parse('addresses.csv',  {
  header: false,
  download: true,
  dynamicTyping: true,
  complete: function(results) {
    dataval = results.data;
    window.$(document).ready(function() {
        window.$('#example').DataTable( {
            data: dataval,
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]
        } );
    } );
  }
});
