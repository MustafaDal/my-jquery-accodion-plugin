# my-jquery-accodion-plugin
Accordion

using;

$(selector).accordion({
    multiple: true // or false - default is false
});


example using;


```javascript
<script type="text/javascript">
        $(".accordion").accordion({
            multiple: true
        });
</script>
```

```html
<div class="accordion">
    <div class="acc-tab">
        <div class="acc-title">Lorem ipsum dolor sit amet</div>
        <div class="acc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <div class="acc-tab">
        <div class="acc-title">Consectetur</div>
        <div class="acc-content">Morbi consectetur ex ante.</div>
    </div>
    <div class="acc-tab">
        <div class="acc-title">Vivamus nibh metus</div>
        <div class="acc-content">Sed gravida arcu quis sem lobortis.</div>
    </div>
</div>
```
