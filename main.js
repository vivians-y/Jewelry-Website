document.onscroll=(function () {
    if (document.scrollingElement.scrollTop>1) {
        document.querySelector("header").classList.remove("header-transparent");
    } else {
        document.querySelector("header").classList.add("header-transparent");
    }
});