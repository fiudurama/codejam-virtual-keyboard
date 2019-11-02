const Keybord = {
	elements: {
		main: null,
		textarea: null,
		keys: []
	},

	properties: {
		value: '',
		capsLock: false
	},

	init() {
		this.elements.main = document.createElement('div');
		this.elements.textarea = document.createElement('textarea');

		this.elements.main.classList.add('keyboard');
		this.elements.textarea.classList.add('keyboard-output');

		document.body.appendChild(this.elements.textarea);
		document.body.appendChild(this.elements.main);
	},

	_createKeyboard() {

	},

	_capsLockToggle() {

	},


}

window.addEventListener('load', function() {
	Keybord.init();
});