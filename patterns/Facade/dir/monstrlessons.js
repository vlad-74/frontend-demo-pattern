let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН FACADE - ИСПОЛЬЗУЕТСЯ ЧТОБЫ СОЗДАТЬ ПРОСТОЙ ИНТЕРФЕЙС К БОЛЬШОЙ И СЛОЖНОЙ
ЧАСТИ КОДА, ЧТОБЫ СПРЯТАТЬ ЕГО СЛОЖНОСТЬ */

class Bank {
  verify (amount) {
    return amount < 999
  }
}

class CreditHistory {
  check (name) {
    // difficult logic
    return true
  }
}

class Balance {
  check (name) {
    return true
  }
}

class Credit {
  constructor (name) {
    this.name = name
  }

  applyFor (amount) {
    const isApproved = new Bank().verify(amount)
    const bankResult = isApproved ? 'approved' : 'denied'
    const isPositiveBalance = new Balance().check(this.name)
    const balance = isPositiveBalance ? 'positive balance' : 'negative balance'
    const isGoodCreditHistory = new CreditHistory().check(this.name)
    const creditHistory = isGoodCreditHistory ? 'good' : 'poor'

    return `${this.name} has been ${bankResult} for the ${amount}$ credit. With a ${creditHistory} credit standing and having a ${balance}`
  }
}

const credit = new Credit('John')
const creditSmall = credit.applyFor(99)
const creditMedium = credit.applyFor(199)
const creditLarge = credit.applyFor(99999)

console.log('creditSmall', creditSmall)
console.log('creditMedium', creditMedium)
console.log('creditLarge', creditLarge)
