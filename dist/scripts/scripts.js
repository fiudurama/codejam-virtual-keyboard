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
		capsLock: false,
		language: null
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
			'` ~', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _', '= +', 'backspace backspace',
			'tab tab', 'q q', 'w w', 'e e', 'r r', 't t', 'y y', 'u u', 'i i', 'o o', 'p p', '[ {', '] }', '\\ |',
			'capslock capslock', 'a a', 's s', 'd d', 'f f', 'g g', 'h h', 'j j', 'k k', 'l l', '; :', '\' "', 'enter enter',
			'shift shift', 'z z', 'x x', 'c c', 'v v', 'b b', 'n n', 'm m', ', <', '. >', '/ ?', 'shift shift', '&uarr; &uarr;',
			'ctrl ctrl', 'win win', 'alt alt', 'space space', 'alt alt', 'ctrl ctrl', '&larr; &larr;', '&darr; &darr;', '&rarr; &rarr;',
		];
		
		let lang = keyEng;

		lang.forEach((key, i) => {
			const keyEl = document.createElement('button');
			const insertBrAfter = ['backspace', '\\', 'enter', '&uarr;'].indexOf(key) != -1;
			const keySplit = key.split(' ');

			keyEl.classList.add('keyboard__key');
			keyEl.setAttribute('data-default-char', keySplit[0]);
			keyEl.setAttribute('data-modified-char', keySplit[1]);

			// document.addEventListener('keydown', () => {
			// 	if (i == 0) {
			// 		console.log(event);
			// 	}
			// });

			// document.addEventListener('keyup', () => {
			// 	if (i == 0) {
			// 		console.log(event.code);
			// 	}
			// });

			switch (keySplit[0]) {
				case 'backspace':
					keyEl.textContent = keySplit[0].toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this.properties.value = this.properties.value.slice(0, this.properties.value.length - 1);
						this._triggerEvent('oninput');
					});

					document.addEventListener('keydown', event => {
						if ( event.code === 'Backspace' ) {
							event.preventDefault();
							keyEl.classList.add('keyboard__key--pressed');

							this.properties.value = this.properties.value.slice(0, this.properties.value.length - 1);
							this._triggerEvent('oninput');
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === 'Backspace') {
							keyEl.classList.remove('keyboard__key--pressed');
						};
					});

					break;

				case 'tab':
					keyEl.textContent = keySplit[0].toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this.properties.value += '\t';
						this._triggerEvent('oninput');
					});

					document.addEventListener('keydown', event => {
						if (event.code === 'Tab') {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');

							this.properties.value += '\t';
							this._triggerEvent('oninput');
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === 'Tab') {
							keyEl.classList.remove('keyboard__key--pressed');
						};
					});

					break;

				case 'capslock':
					keyEl.textContent = keySplit[0].toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this._capsLockToggle();
						keyEl.classList.toggle('keyboard__key--pressed', this.properties.capsLock)
					});

					document.addEventListener('keydown', event => {
						if (event.code === 'CapsLock') {
							event.preventDefault();

							this._capsLockToggle();
							keyEl.classList.toggle('keyboard__key--pressed', this.properties.capsLock)
						}
					});

					break;

				case 'enter':
					keyEl.textContent = keySplit[0].toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this.properties.value += '\n';
						this._triggerEvent('oninput');
					});

					document.addEventListener('keydown', event => {
						if (event.code === 'Enter') {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');
							this.properties.value += '\n';
							this._triggerEvent('oninput');
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === 'Enter') {
							keyEl.classList.remove('keyboard__key--pressed');
						}
					});

					break;

				case 'space':
					keyEl.textContent = keySplit[0].toLowerCase();
					keyEl.classList.add('keyboard__key--space');

					keyEl.addEventListener('click', () => {
						this.properties.value += ' ';
						this._triggerEvent('oninput');
					});

					document.addEventListener('keydown', event => {
						if (event.code === 'Space') {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');
							this.properties.value += ' ';
							this._triggerEvent('oninput');
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === 'Space') {
							keyEl.classList.remove('keyboard__key--pressed');
						}
					});

					break;

				case 'ctrl':
					keyEl.textContent = keySplit[0].toLowerCase();
					keyEl.classList.add('keyboard__key--size-3');
					break;

				case 'shift':
					keyEl.textContent = keySplit[0].toLowerCase();
					keyEl.classList.add('keyboard__key--size-2');

					document.addEventListener('keydown', event => {
						if (event.code === 'ShiftLeft') {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');
							this._charTypeToggle();
						};
					});
					
					document.addEventListener('keyup', event => {
						if (event.code === 'ShiftLeft') {
							keyEl.classList.remove('keyboard__key--pressed');
							this._charTypeToggle();
						};
					});

					break;

				case 'win':
				case 'alt':
				case '&uarr;':
				case '&darr;':
				case '&larr;':
				case '&rarr;':
					keyEl.textContent = keySplit[0].toLowerCase();
					break;
			
				default:
					keyEl.textContent = keySplit[0].toLowerCase();

					document.addEventListener('keydown', event => {

						if (event.key.toLowerCase() == keySplit[0].toLowerCase()) {
							keyEl.classList.add('keyboard__key--pressed');

							if ( event.shiftKey ) {
								this.properties.value += this.properties.capsLock ? keySplit[0].toLowerCase() : keySplit[0].toUpperCase();
							} else {
								this.properties.value += this.properties.capsLock ? keySplit[0].toUpperCase() : keySplit[0].toLowerCase();
							};
							this._triggerEvent('oninput');
						} else if (event.key.toLowerCase() == keySplit[1].toLowerCase()) {
							keyEl.classList.add('keyboard__key--pressed');

							if (event.shiftKey) {
								this.properties.value += this.properties.capsLock ? keySplit[1].toLowerCase() : keySplit[1].toUpperCase();
							} else {
								this.properties.value += this.properties.capsLock ? keySplit[1].toUpperCase() : keySplit[1].toLowerCase();
							};
							this._triggerEvent('oninput');
						}
					});

					document.addEventListener('keyup', event => {
						if (event.key.toLowerCase() == keySplit[0].toLowerCase()) {
							keyEl.classList.remove('keyboard__key--pressed');
						};

						if (event.key.toLowerCase() == keySplit[1].toLowerCase()) {
							keyEl.classList.remove('keyboard__key--pressed');
						};
					});

					keyEl.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? keySplit[0].toUpperCase() : keySplit[0].toLowerCase();
						this._triggerEvent('oninput');
					});
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

	_charTypeToggle() {
		for (const key of this.elements.keys) {
			const specKeys = ['backspace', 'enter', 'tab', 'capslock', 'shift', 'space', 'win', 'alt', 'ctrl', '&uarr;', '&darr;', '&larr;', '&rarr;']
				.indexOf(key.textContent.toLowerCase()) == -1;

			if (specKeys) {
					if (event.shiftKey) {
						key.textContent = this.properties.capsLock ? key.getAttribute('data-modified-char').toLowerCase() : key.getAttribute('data-modified-char').toUpperCase();
					} else {
						key.textContent = this.properties.capsLock ? key.getAttribute('data-default-char').toUpperCase() : key.getAttribute('data-default-char').toLowerCase();
					}
			}
		}
	},

	write(initialValue, oninput) {
		this.properties.value = initialValue || '';
		this.eventHandlers.oninput = oninput;
	},

}

window.addEventListener('load', function() {
	Keyboard.init();
});