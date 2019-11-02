const Keyboard = {
	elements: {
		main: null,
		textarea: null,
		keys: []
	},

	eventHandlers: {
		oninput: null
	},

	properties: {
		value: '',
		capsLock: false
	},

	init() {
		this.elements.main = document.createElement('div');
		this.elements.textarea = document.createElement('textarea');

		this.elements.textarea.classList.add('keyboard-output');
		this.elements.main.classList.add('keyboard');
		this.elements.main.appendChild(this._createKeyboard());

		this.elements.keys = this.elements.main.querySelectorAll('.keyboard__key');

		document.body.appendChild(this.elements.textarea);
		document.body.appendChild(this.elements.main);

		this.write(this.elements.textarea.value, currentValue => {
			this.elements.textarea.value = currentValue;
		});
	},

	_createKeyboard() {
		const fragment = document.createDocumentFragment();
		const keyEng = [
			'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
			'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
			'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
			'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', '&uarr;',
			'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;',
		];
		
		let lang = keyEng;

		lang.forEach(key => {
			const keyEl = document.createElement('button');
			const insertBrAfter = ['backspace', '\\', 'enter', '&uarr;'].indexOf(key) != -1;

			keyEl.classList.add('keyboard__key');

			switch (key) {
				case 'backspace':
					keyEl.textContent = key.toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this.properties.value = this.properties.value.slice(0, this.properties.value.length - 1);
						this._triggerEvent('oninput');
					});

					break;

				case 'tab':
					keyEl.textContent = key.toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this.properties.value += '\t';
						this._triggerEvent('oninput');
					});

					break;

				case 'capslock':
					keyEl.textContent = key.toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this._capsLockToggle();
						keyEl.classList.toggle('keyboard__key--active', this.properties.capsLock)
					});

					break;

				case 'enter':
					keyEl.textContent = key.toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this.properties.value += '\n';
						this._triggerEvent('oninput');
					});

					break;

				case 'space':
					keyEl.textContent = key.toLowerCase();
					keyEl.classList.add('keyboard__key--space');

					keyEl.addEventListener('click', () => {
						this.properties.value += ' ';
						this._triggerEvent('oninput');
					});

					break;

				case 'ctrl':
					keyEl.textContent = key.toLowerCase();
					keyEl.classList.add('keyboard__key--size-3');
					break;

				case 'shift':
					keyEl.textContent = key.toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');
					break;

				case 'win':
				case 'alt':
				case 'shift':
				case '&uarr;':
				case '&darr;':
				case '&larr;':
				case '&rarr;':
					keyEl.textContent = key.toLowerCase();
					break;
			
				default:
					keyEl.textContent = key.toLowerCase();

					keyEl.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this._triggerEvent('oninput');
					})
					break;
			};

			fragment.appendChild(keyEl);

			if (insertBrAfter) {
				fragment.appendChild(document.createElement('br'));
			}
		});

		return fragment;
	},

	_triggerEvent(handlerName) {
		if ( typeof this.eventHandlers[handlerName] == 'function' ) {
			this.eventHandlers[handlerName](this.properties.value);
		};
	},

	_capsLockToggle() {
		this.properties.capsLock = !this.properties.capsLock;

		for (let i = 0; i < this.elements.keys.length; i++) {
			const specKeys = ['backspace', 'enter', 'tab', 'capslock', 'shift', 'space', 'win', 'alt', 'ctrl', '&uarr;', '&darr;', '&larr;', '&rarr;']
			.indexOf(this.elements.keys[i].textContent.toLowerCase()) == -1;

			if (specKeys) {
				this.elements.keys[i].textContent = this.properties.capsLock ? this.elements.keys[i].textContent.toUpperCase() : this.elements.keys[i].textContent.toLowerCase();
			}
		}
	},

	write(initialValue, oninput) {
		this.properties.value = initialValue || '';
		this.eventHandlers.oninput = oninput;
	}


}

window.addEventListener('load', function() {
	Keyboard.init();
});