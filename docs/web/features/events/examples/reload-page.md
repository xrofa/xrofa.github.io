# Reload page after customer gives or changes consents

This script will perform a page refresh when a user gives or changes their consents.

!!! warning "" 
    This script sets a variable to differentiate between the page load and the consent change

```html
<script>
  var page = 0;
  window.addEventListener('uc-event', function (e) {
    if (e.detail.event == 'consent_status' && e.detail.type == 'implicit' && page == 0) {
      page = 1;
    } else {
      if (e.detail.event == 'consent_status' && e.detail.type == 'explicit' && page == 0) {
        page = 1;
      } else {
        if (e.detail.event == 'consent_status' && e.detail.type == 'explicit' && page == 1) {
          location.reload();
        }
      }
    }
  });
</script>
```