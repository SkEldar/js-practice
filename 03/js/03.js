$(document).ready(function() {
    showStartModal();
});
function showStartModal() {
    if(localStorage.getItem('modalYesbtn') != 1) {
    setTimeout(function() {
        $('#exampleModalLong').modal('show');
        $('#modalYesBtn').on('click',function() {
            //save state modal
            localStorage.setItem('modalYesBtn',1);
            $('#exampleModalLong').modal('hide');
        });
    },5000);
};
};
