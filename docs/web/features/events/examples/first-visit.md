# Detecting first-time visits by listening to the consent status in dataLayer

```html
<script>
  var page = 0;
  window.addEventListener('uc-event', function (e) {
    if (e.detail.event == 'consent_status' && e.detail.type == 'implicit' && page == 0) {
      page = 1;
      dataLayer.push('FirstUserVisit');
    } else {
      if (e.detail.event == 'consent_status' && e.detail.type == 'explicit' && page == 0) {
        page = 1;
        dataLayer.push('UserAlreadyConsented');
      } else {
        if (e.detail.event == 'consent_status' && e.detail.type == 'explicit' && page == 1) {
          dataLayer.push('UserChangedConsents');
        }
      }
    }
  });
</script>
```