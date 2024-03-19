# Add a script to the head via Event Listener

## Example 1

This example shows how to inject the script tag of a service into the `<head>` element of the page when a user gives consent.
If the user gave consent in the past, the iframe will be loaded after the page loads.

```html
<script>
  window.addEventListener('ucEvent', function (e) {
  if (e.detail.type == 'EXPLICIT' && e.detail['SERVICE_NAME']) {
    const sc = eval(document.createElement('script'));
    sc.setAttribute('src', 'SCRIPT_SRC');
    sc.setAttribute('type', 'text/javascript');
    document.head.appendChild(sc);
  }
  });
</script>
```

## Example 2

This example shows how to inject script tags for services that consent has previously been given for, i.e. on page re-visit or reload.

```html
<script>
  window.addEventListener('UC_UI_INITIALIZED', function (event) {
  // initialized
  if (__ucCmp.getServices().filter((data) => (data.id === 'SERVICE_ID') & (data.consent.status === true)).length == 1) {
    const sc = eval(document.createElement('script'));
    sc.setAttribute('src', 'SCRIPT_SRC');
    sc.setAttribute('type', 'text/javascript');
    document.head.appendChild(sc);
  }
  });
</script>
```

