function validateForm()
{
  let x = document.form.name.value;
  let password=document.form.password.value;
  let age=document.form.age.value;
  if(x == "")
  {
    alert("Name must be filled out");
    return false;
  }
  else if(password.length<6)
  {  
    alert("Password must be at least 6 characters long.");  
    return false;  
  }
  else
  {
    confirm("Are you sure you want to proceed?");
  }
}