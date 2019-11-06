const Keyboard = {
	elements: {
		main: null,
		textarea: null,
		keys: []
	},

	properties: {
		value: '',
		language: 'en',
		capsLock: false,
		keyLayout: [
			{ keyCode: 192, en: '`', ru: 'ё', enModified: '~', ruModified: 'Ё' },
			{ keyCode: 49, en: '1', ru: '1', enModified: '!', ruModified: '!' },
			{ keyCode: 50, en: '2', ru: '2', enModified: '@', ruModified: '"' },
			{ keyCode: 51, en: '3', ru: '3', enModified: '#', ruModified: '№' },
			{ keyCode: 52, en: '4', ru: '4', enModified: '$', ruModified: ';' },
			{ keyCode: 53, en: '5', ru: '5', enModified: '%', ruModified: '%' },
			{ keyCode: 54, en: '6', ru: '6', enModified: '^', ruModified: ':' },
			{ keyCode: 55, en: '7', ru: '7', enModified: '&', ruModified: '?' },
			{ keyCode: 56, en: '8', ru: '8', enModified: '*', ruModified: '*' },
			{ keyCode: 57, en: '9', ru: '9', enModified: '(', ruModified: '(' },
			{ keyCode: 48, en: '0', ru: '0', enModified: ')', ruModified: ')' },
			{ keyCode: 189, en: '-', ru: '-', enModified: '_', ruModified: '_' },
			{ keyCode: 187, en: '=', ru: '=', enModified: '+', ruModified: '+' },
			{ keyCode: 8, en: 'backspace', ru: 'backspace', code: 'Backspace' },
			{ keyCode: 9, en: 'tab', ru: 'tab', code: 'Tab' },
			{ keyCode: 81, en: 'q', ru: 'й', enModified: 'Q', ruModified: 'Й' },
			{ keyCode: 87, en: 'w', ru: 'ц', enModified: 'W', ruModified: 'Ц' },
			{ keyCode: 69, en: 'e', ru: 'у', enModified: 'E', ruModified: 'У' },
			{ keyCode: 82, en: 'r', ru: 'к', enModified: 'R', ruModified: 'К' },
			{ keyCode: 84, en: 't', ru: 'е', enModified: 'T', ruModified: 'Е' },
			{ keyCode: 89, en: 'y', ru: 'н', enModified: 'Y', ruModified: 'Н' },
			{ keyCode: 85, en: 'u', ru: 'г', enModified: 'U', ruModified: 'Г' },
			{ keyCode: 73, en: 'i', ru: 'ш', enModified: 'I', ruModified: 'Ш' },
			{ keyCode: 79, en: 'o', ru: 'щ', enModified: 'O', ruModified: 'Щ' },
			{ keyCode: 80, en: 'p', ru: 'з', enModified: 'P', ruModified: 'З' },
			{ keyCode: 219, en: '[', ru: 'х', enModified: '{', ruModified: 'Х' },
			{ keyCode: 221, en: ']', ru: 'ъ', enModified: '}', ruModified: 'Ъ' },
			{ keyCode: 220, en: '\\', ru: '\\', enModified: '|', ruModified: '/' },
			{ keyCode: 20, en: 'capslock', ru: 'capslock', code: 'CapsLock' },
			{ keyCode: 65, en: 'a', ru: 'ф', enModified: 'A', ruModified: 'Ф' },
			{ keyCode: 83, en: 's', ru: 'ы', enModified: 'S', ruModified: 'Ы' },
			{ keyCode: 68, en: 'd', ru: 'в', enModified: 'D', ruModified: 'В' },
			{ keyCode: 70, en: 'f', ru: 'а', enModified: 'F', ruModified: 'А' },
			{ keyCode: 71, en: 'g', ru: 'п', enModified: 'G', ruModified: 'П' },
			{ keyCode: 72, en: 'h', ru: 'р', enModified: 'H', ruModified: 'Р' },
			{ keyCode: 74, en: 'j', ru: 'о', enModified: 'J', ruModified: 'О' },
			{ keyCode: 75, en: 'k', ru: 'л', enModified: 'K', ruModified: 'Л' },
			{ keyCode: 76, en: 'l', ru: 'д', enModified: 'L', ruModified: 'Д' },
			{ keyCode: 186, en: ';', ru: 'ж', enModified: ':', ruModified: 'Ж' },
			{ keyCode: 222, en: '\'', ru: 'э', enModified: '"', ruModified: 'Э' },
			{ keyCode: 13, en: 'enter', ru: 'enter', code: 'Enter' },
			{ keyCode: 16, en: 'shift', ru: 'shift', code: 'ShiftLeft' },
			{ keyCode: 90, en: 'z', ru: 'я', enModified: 'Z', ruModified: 'Я' },
			{ keyCode: 88, en: 'x', ru: 'ч', enModified: 'X', ruModified: 'Ч' },
			{ keyCode: 67, en: 'c', ru: 'с', enModified: 'C', ruModified: 'С' },
			{ keyCode: 86, en: 'v', ru: 'м', enModified: 'V', ruModified: 'М' },
			{ keyCode: 66, en: 'b', ru: 'и', enModified: 'B', ruModified: 'И' },
			{ keyCode: 78, en: 'n', ru: 'т', enModified: 'N', ruModified: 'Т' },
			{ keyCode: 77, en: 'm', ru: 'ь', enModified: 'M', ruModified: 'Ь' },
			{ keyCode: 188, en: ',', ru: 'б', enModified: '<', ruModified: 'Б' },
			{ keyCode: 190, en: '.', ru: 'ю', enModified: '>', ruModified: 'Ю' },
			{ keyCode: 191, en: '/', ru: '.', enModified: '?', ruModified: ',' },
			{ keyCode: 16, en: 'shift', ru: 'shift', code: 'ShiftRight' },
			{ keyCode: 38, en: 'up', ru: 'up', code: 'ArrowUp' },
			{ keyCode: 17, en: 'ctrl', ru: 'ctrl', code: 'ControlLeft' },
			{ keyCode: 17, en: 'win', ru: 'win', code: 'MetaLeft' },
			{ keyCode: 18, en: 'alt', ru: 'alt', code: 'AltLeft' },
			{ keyCode: 32, en: 'space', ru: 'space', code: 'Space' },
			{ keyCode: 18, en: 'alt', ru: 'alt', code: 'AltRight' },
			{ keyCode: 17, en: 'ctrl', ru: 'ctrl', code: 'ControlRight' },
			{ keyCode: 37, en: 'left', ru: 'left', code: 'ArrowLeft' },
			{ keyCode: 40, en: 'down', ru: 'down', code: 'ArrowDown' },
			{ keyCode: 39, en: 'right', ru: 'right', code: 'ArrowRight' },
		]
	},

	init() {
		this.elements.main = document.createElement('div');
		this.elements.textarea = document.createElement('textarea');

		this.elements.textarea.classList.add('keyboard-output');
		this.elements.main.classList.add('keyboard');

		if (localStorage.getItem('language')) {
			this.properties.language = localStorage.getItem('language');
		};

		this.elements.main.appendChild(this._createKeyboard(this.properties.language));
		this.elements.keys = this.elements.main.querySelectorAll('.keyboard__key');

		document.body.appendChild(this.elements.textarea);
		document.body.appendChild(this.elements.main);
	},

	_createKeyboard(language) {
		const fragment = document.createDocumentFragment();

		this.properties.keyLayout.forEach((key, i) => {
			const keyEl = document.createElement('button');
			const insertBrAfter = [8, 220, 13, 38].indexOf(key.keyCode) != -1;

			keyEl.classList.add('keyboard__key');

			document.addEventListener('keydown', () => {
				if (i === 0) {
					// console.log(event);
					this._languageToggle(this.properties.language);
				}
			});

			switch (key[language]) {
				case 'backspace':
					keyEl.textContent = key[language];
					keyEl.classList.add('keyboard__key--size-2');

					document.addEventListener('keydown', event => {
						if ( event.code === key.code ) {
							event.preventDefault();
							keyEl.classList.add('keyboard__key--pressed');

							this.properties.value = this.properties.value.slice(0, this.properties.value.length - 1);
							this._onInput();
						}
					});

					document.addEventListener('keyup', event => {
						if ( event.code === key.code ) {
							keyEl.classList.remove('keyboard__key--pressed');
						};
					});

					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');

						this.properties.value = this.properties.value.slice(0, this.properties.value.length - 1);
						this._onInput();
					});

					break;

				case 'tab':
					keyEl.textContent = key[language];
					keyEl.classList.add('keyboard__key--size-2');

					document.addEventListener('keydown', event => {
						if (event.code === key.code) {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');

							this.properties.value += '\t';
							this._onInput();
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === key.code) {
							keyEl.classList.remove('keyboard__key--pressed');
						};
					});

					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');

						this.properties.value += '\t';
						this._onInput();
					});

					break;

				case 'capslock':
					keyEl.textContent = key[language];
					keyEl.classList.add('keyboard__key--size-2');

					keyEl.addEventListener('click', () => {
						this._capsLockToggle();
						keyEl.classList.toggle('keyboard__key--pressed', this.properties.capsLock)
					});

					document.addEventListener('keydown', event => {
						if (event.code === key.code) {
							event.preventDefault();

							this._capsLockToggle();
							keyEl.classList.toggle('keyboard__key--pressed', this.properties.capsLock)
						}
					});

					break;

				case 'enter':
					keyEl.textContent = key[language];
					keyEl.classList.add('keyboard__key--size-2');

					document.addEventListener('keydown', event => {
						if (event.code === key.code) {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');
							this.properties.value += '\n';
							this._onInput();
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === key.code) {
							keyEl.classList.remove('keyboard__key--pressed');
						}
					});
					
					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');

						this.properties.value += '\n';
						this._onInput();
					});

					break;

				case 'space':
					keyEl.textContent = key[language];
					keyEl.classList.add('keyboard__key--space');

					document.addEventListener('keydown', event => {
						if (event.code === key.code) {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');
							this.properties.value += ' ';
							this._onInput();
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === key.code) {
							keyEl.classList.remove('keyboard__key--pressed');
						}
					});

					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');

						this.properties.value += ' ';
						this._onInput();
					});

					break;

				case 'ctrl':
					keyEl.textContent = key[language];
					keyEl.classList.add('keyboard__key--size-3');

					document.addEventListener('keydown', event => {
						if (event.code === key.code) {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');
						}
					});

					document.addEventListener('keyup', event => {
						if (event.code === key.code) {
							keyEl.classList.remove('keyboard__key--pressed');
						}
					});

					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');
					});

					break;

				case 'shift':
					keyEl.textContent = key[language];
					keyEl.classList.add('keyboard__key--size-2');

					document.addEventListener('keydown', event => {
						if (event.code === key.code) {
							event.preventDefault();

							keyEl.classList.add('keyboard__key--pressed');
							this._charTypeToggle(this.properties.language);
						};
					});
					
					document.addEventListener('keyup', event => {
						if (event.code === key.code) {
							keyEl.classList.remove('keyboard__key--pressed');
							this._charTypeToggle(this.properties.language);
						};
					});
					
					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');
					});

					break;

				case 'win':
				case 'alt':
				case 'up':
				case 'down':
				case 'left':
				case 'right':
					keyEl.textContent = key[language];

					document.addEventListener('keydown', event => {
						
						if (event.code === key.code) {
							event.preventDefault();
							keyEl.classList.add('keyboard__key--pressed');
						}
					});
					
					document.addEventListener('keyup', event => {
						if (event.code === key.code) {
							event.preventDefault();
							keyEl.classList.remove('keyboard__key--pressed');
						}
					});

					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');
					});

					break;
			
				default:
					keyEl.textContent = key[language];

					document.addEventListener('keydown', event => {
						if (event.keyCode === key.keyCode) {

							keyEl.classList.add('keyboard__key--pressed');

							if ( event.shiftKey ) {
								this.properties.value += this.properties.capsLock ? key[this.properties.language + 'Modified'].toLowerCase() : key[this.properties.language + 'Modified'].toUpperCase();
							} else {
								this.properties.value += this.properties.capsLock ? key[this.properties.language].toUpperCase() : key[this.properties.language].toLowerCase();
							};
							this._onInput();
						}
					});

					document.addEventListener('keyup', event => {
						if (event.keyCode == key.keyCode) {
							keyEl.classList.remove('keyboard__key--pressed');
						};
					});
					
					keyEl.addEventListener('mousedown', () => {
						keyEl.classList.add('keyboard__key--pressed');

						this.properties.value += this.properties.capsLock ? key[language].toUpperCase() : key[language].toLowerCase();
						this._onInput();
					});

					break;
			};

			keyEl.addEventListener('mouseup', () => {
				keyEl.classList.remove('keyboard__key--pressed');
			});

			keyEl.addEventListener('mouseleave', () => {
				keyEl.classList.remove('keyboard__key--pressed');
			});

			fragment.appendChild(keyEl);

			if (insertBrAfter) {
				fragment.appendChild(document.createElement('br'));
			}
		});

		return fragment;
	},

	_onInput() {
		event.preventDefault();

		this.elements.textarea.value = this.properties.value;
	},

	_capsLockToggle() {
		this.properties.capsLock = !this.properties.capsLock;

		for (const key of this.elements.keys) {

			const specKeys = ['backspace', 'enter', 'tab', 'capslock', 'shift', 'space', 'win', 'alt', 'ctrl', 'up', 'down', 'left', 'right']
				.indexOf(key.textContent.toLowerCase()) == -1;

			if (specKeys) {
				key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
			}
		}
	},

	_charTypeToggle(language) {
		let i = 0;
		for (const key of this.elements.keys) {
			const specKeys = ['backspace', 'enter', 'tab', 'capslock', 'shift', 'space', 'win', 'alt', 'ctrl', 'up', 'down', 'left', 'right']
				.indexOf(key.textContent.toLowerCase()) == -1;
			const keyLayout = this.properties.keyLayout;

			if (specKeys) {
					if (event.shiftKey) {
						key.textContent = this.properties.capsLock ? keyLayout[i][language + 'Modified'].toLowerCase() : keyLayout[i][language + 'Modified'].toUpperCase();
					} else {
						key.textContent = this.properties.capsLock ? keyLayout[i][language].toUpperCase() : keyLayout[i][language].toLowerCase();
					}
			}

			i++;
		}
	},

	_languageToggle(language) {

		if (event.shiftKey && event.ctrlKey) {
			switch (localStorage.getItem('language')) {
				case 'en':
					localStorage.setItem('language', 'ru');
					break;

				case 'ru':
					localStorage.setItem('language', 'en');
					break;
			}
			this.properties.language = localStorage.getItem('language');
			
			let i = 0;
			for (const key of this.elements.keys) {
				const specKeys = ['backspace', 'enter', 'tab', 'capslock', 'shift', 'space', 'win', 'alt', 'ctrl', 'up', 'down', 'left', 'right']
				.indexOf(key.textContent.toLowerCase()) == -1;
				const keyLayout = this.properties.keyLayout;
				
				if (specKeys) {
					if (event.shiftKey) {
						key.textContent = this.properties.capsLock ? 
						keyLayout[i][language + 'Modified'].toLowerCase() : keyLayout[i][language + 'Modified'].toUpperCase();
					} else {
						key.textContent = this.properties.capsLock ? keyLayout[i][language].toUpperCase() : keyLayout[i][language].toLowerCase();
					}
				}
				
				i++;
			}
		}
	},

}

window.addEventListener('load', function() {
	Keyboard.init();
});