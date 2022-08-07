const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
newSport = sports.splice(1,3)
console.log(sports) //['football', 'judo']
console.log(newSport) //['volleyball', 'tennis', 'basketball']