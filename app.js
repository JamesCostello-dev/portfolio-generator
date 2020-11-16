// console.log(document);

// const message = 'hello node';

// const sum = 5 + 3;

// console.log(message);
// console.log(sum);

// const commandLineArgs = process.argv;
// console.log(commandLineArgs); 

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);