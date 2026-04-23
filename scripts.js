const version = "v1.1.10";

document.getElementById("ver").innerText = version;

async function load_stuff() {
    const jobs = [...document.querySelectorAll("[data-include]")].map( //array of everything that has [data-include], loops through the array
        el =>
            fetch(el.dataset.include)
            .then(r => r.text())
            .then(html => el.innerHTML = html)
    );


    return Promise.all(jobs);
}


document.addEventListener("DOMContentLoaded", load_stuff);