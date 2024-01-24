
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$(document).ready(function(){
   
    $('#myTab a').on('shown.bs.tab');{
        const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

        $('[data-toggle="tooltip"]').tooltip()

            // To allow table elements
            myDefaultAllowList.table = []

            // To allow td elements and data-bs-option attributes on td elements
            myDefaultAllowList.td = ['data-bs-option']

            // You can push your custom regex to validate your attributes.
            // Be careful about your regular expressions being too lax
            const popover = /^data-my-app-[\w-]+/
            myDefaultAllowList['*'].push(popover)


            // to enable tooltips with the default configuration
            $('[data-bs-toggle="tooltip"]').tooltip()

            // to initialize tooltips with given configuration
            $('[data-bs-toggle="tooltip"]').tooltip({
            boundary: 'clippingParents',
            customClass: 'myClass'
            })

        // to trigger the `show` method
        $('#myTooltip').tooltip('show')
            }

});