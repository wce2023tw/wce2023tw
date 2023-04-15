const loadHtml = (id, filename) => {
    $(`#${id}`).load(`${filename}`);
    if (filename == 'home.html') { $(`#${id}`).addClass("mt-auto"); }
    else { $(`#${id}`).removeClass("mt-auto"); }
}