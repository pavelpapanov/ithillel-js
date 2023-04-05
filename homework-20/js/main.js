'use strict';

function generateItem(item) {
	let resultList = document.querySelector('.result');
	let listItem = document.createElement('li');
	listItem.textContent = item;
	resultList.appendChild(listItem);
}

class Student {
	constructor(array) {
		this.name = array.name;
		this.surname = array.surname;
		this.birthYear = array.birthYear;
		this.attendance = [];
		this.maxLength = 25;
		this.progress = array.progress;
	}

	studentAge() {
		const birthYear = this.birthYear;
		const date = new Date();
		const currentYear = date.getFullYear();

		return currentYear - birthYear;
	}

	present() {
		const attendance = this.attendance;
		const maxLength = this.maxLength;

		if (attendance.length < maxLength) {
			return attendance.push(true);
		} else {
			console.log(`Не може бути більше ${this.maxLength} відвідувань`);
		}
	}

	absent() {
		const attendance = this.attendance;
		const maxLength = this.maxLength;

		if (attendance.length < maxLength) {
			return attendance.push(false);
		} else {
			console.log(`Не може бути більше ${this.maxLength} відвідувань`);
		}
	}

	getAverageSum = (numbers) => {
		let sum = 0;
		for (let i = 0; i < numbers.length; i += 1) {
			sum += numbers[i];
		}
		return sum / numbers.length;
	};

	getAverageAttendance = (numbers) => {
		let sum = 0;
		for (let i = 0; i < numbers.length; i += 1) {
			if (numbers[i] === true) {
				sum += numbers[i];
			}
		}
		return sum / this.maxLength;
	};

	summary() {
		const progress =  this.getAverageSum(this.progress);
		const attendance = this.getAverageAttendance(this.attendance);

		if (progress > 90 && attendance > 0.9) {
			return `Молодець ${this.name}! Середня оцінка - ${progress}, середнє відвідування - ${attendance}`;
		} else if ((progress < 90 && attendance > 0.9) || (progress > 90 && attendance < 0.9)) {
			return `Добре ${this.name}, але можна краще. Середня оцінка - ${progress}, середнє відвідування - ${attendance}`;
		} else {
			return `Редиска ти ${this.name}. Середня оцінка - ${progress}, середнє відвідування - ${attendance}`;
		}
	}
}

const Pavlo = new Student({
	name: 'Pavlo',
	surname: 'Papanov',
	birthYear: 1989,
	progress: [100, 90, 85, 60, 30, 10]
});

Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.absent();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.absent();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.absent();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.absent();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.present();
Pavlo.absent();

generateItem(Pavlo.summary());

const Nikita = new Student({
	name: 'Nikita',
	surname: 'Kovalinskiy',
	birthYear: 2017,
	progress: [100, 90, 85, 90, 100, 90]
});

Nikita.present();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.absent();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.absent();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.absent();
Nikita.present();
Nikita.present();
Nikita.absent();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.present();
Nikita.absent();

generateItem(Nikita.summary());

const Oleksandra = new Student({
	name: 'Oleksandra',
	surname: 'Kovalinska',
	birthYear: 2020,
	progress: [100, 100, 100, 100, 100, 100]
});

Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();
Oleksandra.present();

generateItem(Oleksandra.summary());