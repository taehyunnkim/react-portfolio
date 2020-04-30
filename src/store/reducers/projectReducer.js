const initState = {
  projects: [
    {title: 'Vocaby', date:'Jan 2020 - Present', shortDescription:'A Vocabulary Building Google Extension Project'},
    {title: 'UW Leaders', date:'April 2020 - Present', shortDescription:'Official UW Leaders Website'},
    {title: 'Collewear', date:'May 2020 - Present', shortDescription:'Fashion Items Web Scraper'}
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;