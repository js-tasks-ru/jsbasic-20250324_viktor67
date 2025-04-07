
function sumSalary(salaries) {
  let sum = 0;
  let isHasSalary = false;
  for (const key in salaries) {
    if (typeof salaries[key] === 'number' && Number.isFinite(salaries[key]))
    {
      isHasSalary = true;
      sum += salaries[key];
    }
    
  }
  if (isHasSalary) {
    return sum;
  } else {
    return 0;
  }

  
}

