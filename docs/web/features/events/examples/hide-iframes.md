# Hide iframes when the banner is shown

!!! warning "Requirements"
    In both examples it is necessary to add a `<div>` in the place where you want to add the iframe
    ```html
    <div id="log"></div>
    ```

    
```html
<script>
  window.addEventListener("CMP_SHOWN", function (e) {
    document.getElementById('log').innerHTML = '';
  }
  });
  window.addEventListener("SAVE", function (e) {
    document.getElementById('log').innerHTML = '<iframe id="IFRAME_ID" src="IFRAME_SRC"></iframe>';
  }
  });
</script>
```