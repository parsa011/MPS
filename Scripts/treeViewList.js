let li = document.querySelector('li.has-child');

function openChild(a) {
    const icon = a.previousElementSibling;
    if (icon.style.transform == 'rotate(-90deg)') {
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.style.transform = 'rotate(-90deg)';
    }
    const childList = a.nextElementSibling;
    childList.classList.toggle('d-none');
}

(function () {
    let active = document.querySelector('.cates li.active');
    var parent = active.parentElement;
    openChild(parent.previousElementSibling);
    var parentId = parent.getAttribute('data-parent');
    var query = 'ul[id="' + parentId + '"]';
    while (document.querySelector(query)) {
        query = 'ul[id="' + parentId + '"]';
        var findedUl = document.querySelector(query);
      if(!findedUl){
          break;
      }
        openChild(findedUl.previousElementSibling);
        parentId = findedUl.getAttribute('data-parent');
    }
})();