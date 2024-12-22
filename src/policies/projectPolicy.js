const canUpdateProject = (user, project)=>{
   return  (
      user.role === 'admin' ||
     (user.role === 'manager' &&  user.department === project.department)

    
   )
}