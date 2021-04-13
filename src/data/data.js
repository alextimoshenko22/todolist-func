const users = [
    { id: 1, name: 'Alex', birthday: '22.10.1992', city: 'Yekaterinburg, RU', email: 'ultimatevs@mail.ru' },
    { id: 2, name: 'Paul', birthday: '11.11.1993', city: 'Berlin, GE', email: 'paul-work@gmail.ru' },
    { id: 3, name: 'Max', birthday: '02.12.1991', city: 'New York, USA', email: 'maxmaxs@mail.ru' },
    { id: 4, name: 'Victor', birthday: '12.01.1995', city: 'Moscow, RU', email: 'vvv1@mail.ru' },
    { id: 5, name: 'Stas', birthday: '18.07.1992', city: 'Yekaterinburg, RU', email: 'spider12@mail.ru' },
    { id: 6, name: 'Roberto', birthday: '16.08.1992', city: 'Paris, FR', email: 'sss35@gmail.ru' },
    { id: 7, name: 'Nik', birthday: '10.05.1992', city: 'Moscow, RU', email: 'wowow@yandex.ru' },
    { id: 8, name: 'Boris', birthday: '23.06.1992', city: 'Yekaterinburg, RU', email: 'office2@yandex.ru' },
    { id: 9, name: 'Gustavo', birthday: '04.10.1992', city: 'Madrid, SP', email: 'kek@gmail.ru' },
    { id: 10, name: 'Yong', birthday: '03.10.1992', city: 'Tokyo, JA', email: 'myspace@gmail.ru' },
]

export const myPromiseFunc = {
    generatePromise: (ms) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ms <= 3000) {
                    resolve(ms)
                }
                else {
                    reject('Fuck')
                }
            }, ms)
        })
    },

    allPromises: (arrayOfPromises) => {
        let counter = 0
        let results = []
        return new Promise((resolve, reject) => {
            arrayOfPromises.forEach((promise, i = 0) => {
                promise.then(res => {
                    results[i] = res
                    counter += 1
                    if (counter === arrayOfPromises.length) {
                        resolve(results)
                    }
                })
                    .catch((error) => reject(error))
            })
        })
    },
    
    syncAllPromises: async (arrayOfPromises) => {
        let result = []
        for (let i = 0; i < arrayOfPromises.length; i++) {
            result[i] = await arrayOfPromises[i]
        }
        return result
    }

}

export default users