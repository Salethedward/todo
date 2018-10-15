const $form = $(".register");
const $input = $('.large');
const $ul = $('#list');


$form.on('submit', (e) => {

	e.preventDefault();
	const text = $input.val();
	$input.val('');

	const $li = $('<li></li>');
	$ul.append($li);
	
	const $span = $('<span></span>');
	$li.append($span);
	$span.text(text);

	const $checkbox = $('<input/>');
	$checkbox.attr('type', 'checkbox').addClass('check');
	$li.append($checkbox);
	

	const $removeButton = $('<button>Remove</button>')
	$removeButton.addClass('remove');
	$li.append($removeButton);
	
	if (text == '') {
		$li.hide();
	}	
	
	
});


$ul.on('change click', (e) => {

// 	Checkbox
	const $checkbox = $(e.target);
	const $checked = $checkbox.is(':checked');
	if ($checked) {
			
		$checkbox.parent().fadeTo('slow', 0.70);
		
	} else {

		$checkbox.parent().fadeTo('slow', 1);
	}

// Remove button

	if (e.target.className === 'remove') {
		
		$(e.target).parent().hide();
	}	
	
});

































