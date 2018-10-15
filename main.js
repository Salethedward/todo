const $form = $(".register");
const $input = $('.large');
const $ul = $('#list');


$form.on('submit', (e) => {

	e.preventDefault();
	const text = $input.val();
	$input.val('');

	const $li = $('<li></li>');
	const $span = $('<span></span>');
	$ul.append($li);
	$li.append($span);
	$span.text(text);

	const $checkbox = $('<input/>');
	$checkbox.attr('type', 'checkbox').addClass('check');
	$li.append($checkbox);
	

	const $removeButton = $('<button>Remove</button>').addClass('remove');
	$li.append($removeButton);
	
	if (text == '') {
		$li.hide();
	}	
	
	
});


$ul.on('change', (e) => {
	const $checkbox = $(e.target);
	const check = $checkbox.prop('checked');
	const $checked = $checkbox.is(':checked');
		if ($checked) {
			$checkbox.parent().fadeTo('slow', 0.70);
			$checkbox.attr('checked', true);
		}else{

			$checkbox.parent().fadeTo('slow', 1);
			$checkbox.attr('checked', false);
		}

});



$ul.on('click', (e) => {
	$(e.target).parent().hide();
});





























