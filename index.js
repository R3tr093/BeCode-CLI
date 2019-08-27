#!/usr/bin/env node


// placeholder some const.

const chalk = require("chalk");
const figlet = require("figlet");
const warning = chalk.keyword('orange');
const basic = chalk.hex('#DEADED').bold;
const log = console.log;
const axios = require('axios');
const inquirer = require('inquirer');
const ora = require('ora');
const args = process.argv;
const userVal = args[2];
var crit = 0;
 

// Is a styling format, don't mind about this kind of log.
log();
log();



// Need this to convert country name into an country code to implement at our get request, so for this we use country-list.
const { getCode, getName } = require('country-list');

// Init program with an Art work.
const init = () => { 
return new Promise((resolve,reject)=>{

  figlet.text("BeCode Tools !", {
    font: 'Ghost',
    horizontalLayout: 'fitted', 
    verticalLayout: 'fitted' 
    }, function(err, data) {
    
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return reject(err);
    }
    
    log(warning(data));

    resolve(true);
   
    
  
  });


});  


}


// At this point user request as fail for the first time, so we give it all the country value possible.
const askQuestions = () => {
   
  log();

  log(basic("- Andorra (AD) - Albania (AL) - Argentina (AR) - Austria (AT) -   Australia (AU) -  Åland Islands (AX) -   Barbados (BB) -   Belgium (BE)                                ||")) 
log(warning("- Bulgaria(BG) - Benin (BJ)   - Bolivia (BO)   - Brazil (BR) -   Bahamas (BS) - Botswana (BW) -   Belarus (BY) - Belize (BZ) -  Canada (CA)                              ||")) 
  log(basic("- Switzerland (CH) -   Chile (CL)  -   China (CN)  -   Colombia (CO) -   Costa Rica (CR)  -    Cuba (CU) -   Cyprus (CY)   -    Czechia (CZ) -   Germany (DE)            ||")) 
log(warning("- Denmark (DK)  -    Dominican Republic (DO)   -   Ecuador (EC) -   Estonia (EE) -   Egypt (EG)  -   Spain (ES) -   Finland (FI)  -   Faroe Islands (FO) - France (FR)   ||")) 
  log(basic("- Gabon (GA)  -   United Kingdom (GB)   - United Kingdom (GB) - Grenada (GD) -   Greenland (GL)  -   Gambia (GM) -    Greece (GR) -   Guatemala (GT) -   Guyana (GY)     ||")) 
log(warning("- Honduras (HN) -    Croatia (HR)  -  Haiti (HT) -   Hungary (HU) -  Indonesia (ID)   -  Ireland (IE) -    Isle of Man (IM) -   Iceland (IS)  -    Italy (IT)            ||")) 
  log(basic("- Jersey (JE) -    Jamaica (JM)  -   Japan (JP)  -   Liechtenstein (LI) -    Lesotho (LS) -   Lithuania (LT) -   Luxembourg (LU) -   Latvia (LV) -    Morocco (MA)       ||")) 
log(warning("- Monaco (MC)  -    Moldova (MD)  -   Madagascar (MG) -   Macedonia (MK) -   Mongolia (MN)  -   Malta (MT) -   Mexico (MX)  -   Mozambique (MZ) -   Namibia (NA)         ||")) 
  log(basic("- Niger (NE) -   Nicaragua (NI)   - Netherlands (NL) -   Norway (NO) -   New Zealand (NZ)  -   Panama (PA) -   Peru (PE)  - Poland (PL) -   Puerto Rico (PR)             ||")) 
log(warning("- Portugal (PT) -   Paraguay (PY)  -   Romania (RO) -    Serbia (RS) -   Russia (RU)  -    Sweden (SE) -    Slovenia (SI) - Slovakia (SK)  -  San Marino (SM)            ||")) 
  log(basic("- Suriname (SR) -  El Salvador (SV)  -   Tunisia (TN) -   Turkey (TR) -    Ukraine (UA)  - United States (US) -    Uruguay (UY)  -  Vatican City (VA) -   Venezuela (VE) ||")) 
log(warning("- Venezuela (VE) -    Vietnam (VN)  -   South Africa (ZA) - Zimbabwe (ZW)                                                                                                ||")) 

log()

log(chalk`{bgWhite.red.bold !-- > Select a country by his name example ( Tunisia )  < -- ! }`);

// Asking for a new country name.
log();
    const questions = [
    {
      type: "input",
      name: "A",
      message: basic(" \n Enter a contry name   : "),
      
    },
    
  ];
 

  // give the questions array to prompt method of inquirer
  return inquirer.prompt(questions);
 
 
};
 

// Find a country in the API by using the country code seem's like "UK" as only paramater

const getCountry = (param) => {
{
 
  log();
  // Let now the process is actually looking for data...
  const spinner = ora(warning('Calling, awaiting a response...')).start();
  
  
  
  var i = 0;

  // use axios to send an HTTP GET request to an API
  axios.get('https://date.nager.at/api/v2/publicholidays/2019/' + param)
  .then(function (response) {
    
    var dataLength = response.data.length;
    
    log();
  
    // fetch some data into the response
    while(dataLength > i )
    {
        log()
        
        // Make a date format in EU.
        var str = response.data[i].date;
        var words = str.split('-');
      

        log("Holiday : " + warning(response.data[i].name) + "  Date --> " + basic(words[2] + "-" + words[1] + "-" + words[0]));
        log()
        i++;
    
    }

    
    
  })
 
 
  .catch(function (error) {
    log();
    log();
    log(chalk`{bgWhite.red.bold !-- > An unexpectable error has encountered, sorry. < -- ! }`);
    log();
    log();
    log(chalk`{bgWhite.red.bold !-- > Check your Internet connection and retry. < -- ! }`);
    spinner.stop();
  })
 
 
  .finally(function () {
    
    if(i > 0)
    {
      log(basic(" finding : " + i + " holidays."));
      log();
      spinner.text = warning("Request successfully done.");
      spinner.succeed();
      spinner.stop();
    }


  
    
  });


}}

// Resolve the answer by testing if the value we gonna send as parameter is not undefined.

const resolveAnswers = (A) => {
   
  const { getCode, getName } = require('country-list');
 
  // cast country name in a country code
  if(A !== undefined)
  {
    var result = getCode(A);
  }

  

  // result is undefined we're not able to cast it into country code, so it's an error.
  if(result===undefined)
  {
    
    
    if(crit === 0)
    {
      log();
    
      log(chalk`{bgWhite.red.bold !-- > Request failed, probably cause by parameter format. < -- ! }`);
     
  
      log();
  
      log();
      
      log(chalk`{bgWhite.red.bold !-- > cheat mode activated. < -- ! }`);
  
      log();
  
      crit++;
  
    }


    

    
  }

  // If result has been cast into a country code, so we try to call the API with getCountry()
  if(result !==undefined)
  {
    getCountry(result);
  }
  
};



  const run = async () => {
    
  
    // Init the banner 
    const start = await init();
 
    // Try to start progam with value passed with command line.
    const resolve1 = resolveAnswers(userVal);




    // The starting of program has fail at the first so we retry and give more options, and instruction to the users
    if(crit > 0)
    {
      const answers = await askQuestions();




      const { A, B , C , D, E} = answers;
    

      // Let's try again.
      const resolve2 = resolveAnswers(A);
  
      
    }

    // It's an error for the second time, so we shutdown the program.
    if(crit >= 1)
    {
      log();
    
      log(chalk`{bgWhite.red.bold !-- > La requête à échoué < -- ! }`);
     
  
      log();
  
      log();
      
      log(chalk`{bgWhite.red.bold !-- > Fin du programme < -- ! }`);
  
      log();
  
     
  
    }
    




  };

  // Start the program.
  run();

