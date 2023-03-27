const steps = document.querySelectorAll('form > div')
const numbers = document.querySelectorAll('.number')
const planPrice = document.querySelectorAll('.plan .price')
const addonsPrice = document.querySelectorAll('.addons .price')
const summaryPrice = document.querySelectorAll('.summary .price')
const totalPrice = document.querySelector('.total .price')
const switcher = document.querySelector('.switcher div')
const free = document.querySelectorAll('.free')
const subscription = document.querySelector('.subscription')
const subscriptionDuration = document.querySelector('.total span')
let counter = 0
let numberIndex = 0
let plan = 'monthly'
let abbr = 'mo'

function toggleNextStep(step, index) {
    if(index === counter) {
        step.classList.remove('hide')
    } else {
        step.classList.add('hide')
    }
}
function togglePreviousStep(step, index) {
    if(index === counter) {
        step.classList.remove('hide')
    } else {
        step.classList.add('hide')
    }
}
document.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.matches('.next-btn')) {
        counter = counter === 4 ? counter = 4 : counter += 1
        numberIndex = numberIndex === 3 ? numberIndex = 3 : numberIndex += 1
        steps.forEach((step, index) => {
            toggleNextStep(step, index)
        })
        numbers.forEach((number, index) => {
            if(index === numberIndex) {
                number.classList.add('active')
            } else {
                number.classList.remove('active')
            }
        })
    }
})

document.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.matches('.back-btn')) {
        numberIndex = numberIndex === 0 ? numberIndex = 0 : numberIndex -= 1
        counter = counter === 0 ? counter = 0 : counter -= 1
        steps.forEach((step, index) => {
           togglePreviousStep(step, index)
        })
        numbers.forEach((number, index) => {
            if(index === numberIndex) {
                number.classList.add('active')
            } else {
                number.classList.remove('active')
            }
        })
    }
})

switcher.parentElement.addEventListener('click', () => {
    switcher.classList.toggle('yearly')
    plan = plan === 'yearly' ? 'monthly' : 'yearly'
    if(plan === 'yearly') {
        setYearlyPlan()
    } else {
        setMonthlyPlan()
    }
})

function setYearlyPlan() {
    free.forEach(ele => {
        ele.style.visibility = 'visible'
    })
    planPrice[0].textContent = '$90/yr'
    planPrice[1].textContent = '$120/yr'
    planPrice[2].textContent = '$150/yr'

    addonsPrice[0].textContent = '+$10yr'
    addonsPrice[1].textContent = '+$20yr'
    addonsPrice[2].textContent = '+$20yr'

    summaryPrice[0].textContent = '+$90/yr'
    summaryPrice[1].textContent = '+$10/yr'
    summaryPrice[2].textContent = '+$20/yr'
    totalPrice.textContent = '+$120/yr'

    subscription.textContent = '(Yearly)'
    subscriptionDuration.textContent = 'year'
}

function setMonthlyPlan() {
    free.forEach(ele => {
        ele.style.visibility = 'hidden'
    })
    planPrice[0].textContent = '$9/mo'
    planPrice[1].textContent = '$12/mo'
    planPrice[2].textContent = '$15/mo'

    addonsPrice[0].textContent = '+$1mo'
    addonsPrice[1].textContent = '+$2mo'
    addonsPrice[2].textContent = '+$2mo'

    summaryPrice[0].textContent = '+$9/mo'
    summaryPrice[1].textContent = '+$1/mo'
    summaryPrice[2].textContent = '+$2/mo'
    totalPrice.textContent = '+$12/mo'

    subscription.textContent = '(Monthly)'
    subscriptionDuration.textContent = 'year'
}