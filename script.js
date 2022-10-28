const clockText = document.querySelector('.clock_text')

const getTime = () => {

  let date = new Date()

  /* -------- GET HOURS, MINUTES, SECONDS -------- */
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let day = date.toDateString()

  /* -------- CHECK AM or PM -------- */
  if(hours > 12){
    hours -= 12
    am_pm = 'PM'
  }
  if(hours == 0){
    hours = 12
    am_pm = 'AM'
  }

  /* -------- ADD ZERO BEFORE HOURS IF IT IS LESS THAN 10 -------- */
  if(hours < 10)
    hours = '0' + hours

  /* -------- ADD ZERO BEFORE MINUTES IF IT IS LESS THAN 10 -------- */
  if(minutes < 10)
    minutes = '0' + minutes

  /* -------- ADD ZERO BEFORE HOURS IF IT IS LESS THAN 10 -------- */
  if(seconds < 10)
    seconds = '0' + seconds

  /* -------- ARRANGE TIME and DISPLAY ON THE SCREEN -------- */
  let time = `${hours}:${minutes}:${seconds}<span class='am_pm'>${am_pm}<span class='day'>${day}<span>`
  clockText.innerHTML = time

}

/* -------- RUN getTime() AFTER EVERY SECOND -------- */
setInterval(getTime, 1000)
