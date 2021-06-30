$('.createBurger').on('submit', event => {
   event.preventDefault();

   const newBurger = {
      burger_name: $('#burgerName').val().trim(),
      devoured: $('[name=devoured]:checked').val().trim(),
   };

   $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
   }).then(() => {
      location.reload();
   });
});

$(document).on('click', '.nomBurger', event => {
   const id = event.target.getAttribute('data-id');
   const devouredState = event.target.dataset.devouredState;

   const newDevouredState = {
      devoured: devouredState,
   };

   $.ajax('./api/burgers/' + id, {
      type: 'PUT',
      data: newDevouredState,
   }).then(() => {
      location.reload();
   });
});

$('.discardBurger').on('click', event => {
   const id = event.target.getAttribute('data-id');

   $.ajax('/api/burgers/' + id, {
      type: 'DELETE',
   }).then(() => {
      location.reload();
   });
});