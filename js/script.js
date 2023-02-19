{
    const welcome = () => {
        console.log("Witam na mojej pierwszej stronie internetowej");
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");

        body.classList.toggle("body__dark");
        themeName.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";
    }

    const init = () => {
        welcome();

        const button = document.querySelector(".js-changeBackgroundButton");

        button.addEventListener("click", onChangeBackgroundClick);
    }

    init();
}
































