# my-jquery-accodion-plugin
Accordion

using;

$(selector).accordion({
    multiple: true // or false - default is false
});


example using;

<script type="text/javascript">
        $(".accordion").accordion({
            multiple: true
        });
</script>

<div class="accordion">
    <div class="acc-tab">
        <div class="acc-title">Lorem ipsum dolor sit amet</div>
        <div class="acc-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem sed mi posuere ultrices cursus a lectus. Integer congue finibus felis.
        </div>
    </div>
    <div class="acc-tab">
        <div class="acc-title">consectetur adipiscing elit</div>
        <div class="acc-content">Morbi consectetur ex ante, non ullamcorper tortor accumsan non. Mauris ac euismod metus. Pellentesque posuere elit ante, nec mollis enim auctor non.</div>
    </div>
    <div class="acc-tab">
        <div class="acc-title">Vivamus nibh metus</div>
        <div class="acc-content">Sed gravida arcu quis sem lobortis, eget mollis est faucibus. Praesent facilisis augue nec tempus dictum. Proin gravida nisl et ante hendrerit mollis ut at sapien.</div>
    </div>
</div>
