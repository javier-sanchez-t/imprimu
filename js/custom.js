
function launchModal(modalName, title, description) {
 $('#modalTitle').text(title);
 $('#modalDescription').text(description);
 $('#' + modalName).addClass("is-active");
}

function closeModal(modalName) {
 $('#'+modalName).removeClass("is-active");
}