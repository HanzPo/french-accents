function copyCharacter(character) {
    navigator.clipboard.writeText(character);
    showToast();
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("à");
    link.addEventListener('click', function() {
        copyToTheClipboard("à");
    });
});

async function copyToTheClipboard(textToCopy){
    const el = document.createElement('textarea');
    el.value = textToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function showToast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2900);
}