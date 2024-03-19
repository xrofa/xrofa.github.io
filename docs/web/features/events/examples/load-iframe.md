# Load iframe via Event Listener

You can load iframes for services via an event listener. Below are two different examples, one with the `consent_status` event, and another with the `UC_UI_INITIALIZED` event.

!!! warning "Requirements"
    In both examples it is necessary to add a `<div>` in the place where you want to add the iframe
    ```html
    <div id="log"></div>
    ```

## `consent_status`

In this example, the iframe is injected when the user gives consent. If the user gave consent in the past the iframe will be injected after page load.

If during the session a user decides to deny consent, the iframe will also be removed without the need of refreshing the page.

```html
<script>
  window.addEventListener('ucEvent', function (e) {
  if (e.detail.type == 'EXPLICIT' && e.detail['SERVICE_NAME']) {
    document.getElementById('log').innerHTML =
      '<iframe frameborder="0" height="200" width="200" src="IFRAME_SRC"></iframe>';
  } else {
    document.getElementById('log').innerHTML = '';
  }
  });
</script>
```

## `UC_UI_INITIALIZED`

This example only works if the user gave consent in the past, or by reloading after consent is given.

```html
<script>
  window.addEventListener('UC_UI_INITIALIZED', function (event) {
  if (__ucCmp.getServices().filter((data) => (data.id === 'SERVICE_ID') & (data.consent.status === true)).length == 0) {
    document.getElementById('log').innerHTML = '';
  } else {
    document.getElementById('log').innerHTML =
      '<iframe id="IFRAME_ID" src="IFRAME_SCR"></iframe>';
  }
  });
</script>
```